# 🎂 Happy Birthday Khushi - Surprise Website

A magical, heart-touching birthday surprise website created with love for Khushi's special day (1st August)!

## ✨ Features

### 🎈 For Khushi (Birthday Girl)
**Login:** Username: `Khusu`, Password: `Khusu`

Access to the complete birthday experience:
- **Welcome Page** - Magical confetti and balloons
- **Heart Message** - Personal heartfelt message
- **Promise Page** - A promise from the heart
- **Things You Love** - Real images of her favorite things (Pav Bhaji, Chocolates, etc.)
- **Memory Lane** - Personal photo carousel with her actual photos
- **Flip Cards** - Interactive cards revealing why she's special
- **Playlist** - Dedicated songs with personal notes
- **Interactive Cake** - Blow candles and cut cake animations
- **Secret Section** - Hidden easter egg surprise
- **Timeline** - Journey of your bond
- **Virtual Gift Box** - Surprise rewards and virtual chocolates
- **Guest Book** - View all birthday wishes
- **Analytics Dashboard** - See how many people visited and celebrated

### 🎁 For Guests
**Login:** Any username and password

Limited but meaningful experience:
- **Welcome Message** - Join the celebration
- **Guest Book** - Leave birthday wishes for Khushi
- Clean, beautiful interface focused on the birthday wish experience

## 🎨 Design Theme
- **Colors:** Soft pastels (baby pink, light brown, cream, warm yellow)
- **Typography:** Dancing Script (handwritten feel) + Poppins (clean body text)
- **Animations:** Confetti, floating hearts, celebration particles, smooth transitions
- **Responsive:** Works perfectly on desktop and mobile

## 🔧 Tech Stack
- **Frontend:** React, TailwindCSS, Axios
- **Backend:** FastAPI, Python
- **Database:** MongoDB
- **Authentication:** Context-based auth system
- **Deployment:** GitHub Pages (Frontend), Backend can be deployed separately

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- MongoDB
- Yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd happy-birthday-khushi
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   yarn install
   yarn start
   ```

3. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

4. **Environment Variables**
   - Frontend: `REACT_APP_BACKEND_URL` in `/frontend/.env`
   - Backend: `MONGO_URL` and `DB_NAME` in `/backend/.env`

## 📱 Usage

### For Khushi:
1. Go to the website
2. Login with: Username: `Khusu`, Password: `Khusu`
3. Enjoy the complete birthday experience!
4. Navigate through all 13 sections using the dots on the left
5. Check analytics to see how many people celebrated with you

### For Guests:
1. Go to the website
2. Login with any username and password
3. Leave a beautiful birthday wish in the guest book
4. Your message will be saved for Khushi to see

## 🎯 Key Features

### Real Images Integration
- **Food Images:** Authentic pav bhaji and chocolate images from the internet
- **Personal Photos:** Khushi's actual photos in the Memory Lane section
- **Interactive Elements:** Teddy bears, smartphones, flowers - all real images

### Interactive Animations
- **Candle Blowing:** Interactive cake with flame animation
- **Cake Cutting:** Two-step celebration process
- **Confetti & Celebrations:** Dynamic particle animations
- **Card Flipping:** Smooth 3D flip animations

### Data Analytics
- **Visit Tracking:** Monitor website visitors
- **Section Analytics:** See which sections are most popular
- **Message Counter:** Track birthday wishes received
- **Time Tracking:** Monitor engagement duration

## 💾 Database Collections

- `birthday_messages` - Guest book entries
- `visitor_data` - Analytics and tracking data  
- `section_interactions` - User interaction tracking
- `status_checks` - System health monitoring

## 🎊 Special Touches

- **Personal Love Letter** - Accessible via floating 💌 button
- **Secret Heart** - Hidden easter egg in secret section
- **Memory Carousel** - Khushi's personal photos with auto-play
- **Guest Analytics** - See how many people joined the celebration
- **Responsive Design** - Beautiful on all devices

## 🎈 Deployment

The website automatically deploys to GitHub Pages when pushed to the main branch. The GitHub Actions workflow handles:
- Installing dependencies
- Building the React app
- Deploying to GitHub Pages

## 💝 Special Message

*This website isn't just code - it's a digital love letter, a promise, a virtual hug, and a memory box all in one place. Every animation, every color, every word has been crafted with love to create an unforgettable birthday experience for someone very special.*

**Happy Birthday, Khushi! 🎂✨**

---

Made with 💖 by Nitish for Khushi's special day