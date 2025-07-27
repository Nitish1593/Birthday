from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Birthday Website Models
class BirthdayMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    message: str
    email: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class BirthdayMessageCreate(BaseModel):
    name: str
    message: str
    email: Optional[str] = None

class VisitorData(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    visitor_ip: Optional[str] = None
    sections_viewed: List[str] = []
    time_spent: int = 0  # in seconds
    favorite_section: Optional[str] = None
    love_letter_opened: bool = False
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class VisitorDataCreate(BaseModel):
    visitor_ip: Optional[str] = None
    sections_viewed: List[str] = []
    time_spent: int = 0
    favorite_section: Optional[str] = None
    love_letter_opened: bool = False

class SectionInteraction(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    section_name: str
    interaction_type: str  # 'view', 'click', 'flip', 'play', etc.
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class SectionInteractionCreate(BaseModel):
    section_name: str
    interaction_type: str

class WebsiteAnalytics(BaseModel):
    total_visits: int
    total_messages: int
    most_viewed_section: str
    love_letter_opens: int
    average_time_spent: float

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Happy Birthday Khushi! 🎂"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Birthday Website Routes
@api_router.post("/birthday-messages", response_model=BirthdayMessage)
async def create_birthday_message(message_data: BirthdayMessageCreate):
    message_dict = message_data.dict()
    message_obj = BirthdayMessage(**message_dict)
    await db.birthday_messages.insert_one(message_obj.dict())
    return message_obj

@api_router.get("/birthday-messages", response_model=List[BirthdayMessage])
async def get_birthday_messages():
    messages = await db.birthday_messages.find().sort("timestamp", -1).to_list(1000)
    return [BirthdayMessage(**msg) for msg in messages]

@api_router.post("/visitor-data", response_model=VisitorData)
async def create_visitor_data(visitor_data: VisitorDataCreate):
    visitor_dict = visitor_data.dict()
    visitor_obj = VisitorData(**visitor_dict)
    await db.visitor_data.insert_one(visitor_obj.dict())
    return visitor_obj

@api_router.get("/visitor-data", response_model=List[VisitorData])
async def get_visitor_data():
    visitors = await db.visitor_data.find().sort("timestamp", -1).to_list(1000)
    return [VisitorData(**visitor) for visitor in visitors]

@api_router.post("/section-interactions", response_model=SectionInteraction)
async def create_section_interaction(interaction_data: SectionInteractionCreate):
    interaction_dict = interaction_data.dict()
    interaction_obj = SectionInteraction(**interaction_dict)
    await db.section_interactions.insert_one(interaction_obj.dict())
    return interaction_obj

@api_router.get("/section-interactions", response_model=List[SectionInteraction])
async def get_section_interactions():
    interactions = await db.section_interactions.find().sort("timestamp", -1).to_list(1000)
    return [SectionInteraction(**interaction) for interaction in interactions]

@api_router.get("/analytics", response_model=WebsiteAnalytics)
async def get_analytics():
    try:
        # Get total visits
        total_visits = await db.visitor_data.count_documents({})
        
        # Get total messages
        total_messages = await db.birthday_messages.count_documents({})
        
        # Get most viewed section
        pipeline = [
            {"$group": {"_id": "$section_name", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 1}
        ]
        most_viewed_result = await db.section_interactions.aggregate(pipeline).to_list(1)
        most_viewed_section = most_viewed_result[0]["_id"] if most_viewed_result else "welcome"
        
        # Get love letter opens
        love_letter_opens = await db.visitor_data.count_documents({"love_letter_opened": True})
        
        # Get average time spent
        pipeline = [
            {"$group": {"_id": None, "avg_time": {"$avg": "$time_spent"}}}
        ]
        avg_time_result = await db.visitor_data.aggregate(pipeline).to_list(1)
        average_time_spent = avg_time_result[0]["avg_time"] if avg_time_result else 0
        
        return WebsiteAnalytics(
            total_visits=total_visits,
            total_messages=total_messages,
            most_viewed_section=most_viewed_section,
            love_letter_opens=love_letter_opens,
            average_time_spent=average_time_spent
        )
    except Exception as e:
        logger.error(f"Error getting analytics: {e}")
        raise HTTPException(status_code=500, detail="Error fetching analytics")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
