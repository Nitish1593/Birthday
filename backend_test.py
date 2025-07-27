#!/usr/bin/env python3
"""
Backend API Testing Script for Birthday Website
Tests all endpoints with realistic birthday website data
"""

import requests
import json
import sys
from datetime import datetime
import os

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_URL = f"{BASE_URL}/api"
print(f"🔗 Testing API at: {API_URL}")

def test_endpoint(method, endpoint, data=None, expected_status=200):
    """Test an API endpoint and return the response"""
    url = f"{API_URL}{endpoint}"
    try:
        if method.upper() == 'GET':
            response = requests.get(url, timeout=10)
        elif method.upper() == 'POST':
            response = requests.post(url, json=data, timeout=10)
        else:
            print(f"❌ Unsupported method: {method}")
            return None
            
        print(f"📡 {method} {endpoint} -> Status: {response.status_code}")
        
        if response.status_code != expected_status:
            print(f"❌ Expected status {expected_status}, got {response.status_code}")
            print(f"Response: {response.text}")
            return None
            
        try:
            return response.json()
        except:
            return response.text
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return None

def main():
    print("🎂 Starting Birthday Website Backend API Tests")
    print("=" * 60)
    
    test_results = {
        "passed": 0,
        "failed": 0,
        "tests": []
    }
    
    # Test 1: Root endpoint
    print("\n1️⃣ Testing Root Endpoint")
    result = test_endpoint('GET', '/')
    if result and 'Happy Birthday Khushi' in str(result):
        print("✅ Root endpoint working - returns birthday message")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "GET /api/", "status": "PASS"})
    else:
        print("❌ Root endpoint failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "GET /api/", "status": "FAIL"})
    
    # Test 2: Status Check endpoints
    print("\n2️⃣ Testing Status Check Endpoints")
    
    # POST status
    status_data = {"client_name": "Birthday Website Visitor"}
    result = test_endpoint('POST', '/status', status_data)
    if result and 'id' in result and 'client_name' in result:
        print("✅ POST /api/status working - creates status check")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "POST /api/status", "status": "PASS"})
    else:
        print("❌ POST /api/status failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "POST /api/status", "status": "FAIL"})
    
    # GET status
    result = test_endpoint('GET', '/status')
    if result and isinstance(result, list):
        print(f"✅ GET /api/status working - returns {len(result)} status checks")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "GET /api/status", "status": "PASS"})
    else:
        print("❌ GET /api/status failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "GET /api/status", "status": "FAIL"})
    
    # Test 3: Birthday Messages endpoints
    print("\n3️⃣ Testing Birthday Messages Endpoints")
    
    # POST birthday message
    message_data = {
        "name": "Sarah Johnson",
        "message": "Happy Birthday Khushi! Hope your special day is filled with joy, laughter, and all your favorite things. You deserve all the happiness in the world! 🎉🎂",
        "email": "sarah.johnson@email.com"
    }
    result = test_endpoint('POST', '/birthday-messages', message_data)
    if result and 'id' in result and 'name' in result and 'message' in result:
        print("✅ POST /api/birthday-messages working - creates birthday message")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "POST /api/birthday-messages", "status": "PASS"})
    else:
        print("❌ POST /api/birthday-messages failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "POST /api/birthday-messages", "status": "FAIL"})
    
    # POST another birthday message without email
    message_data2 = {
        "name": "Alex Chen",
        "message": "Wishing you the most amazing birthday ever! May this new year of your life bring you endless opportunities and beautiful moments. Celebrate big! 🎈🎁"
    }
    result = test_endpoint('POST', '/birthday-messages', message_data2)
    if result and 'id' in result and 'name' in result:
        print("✅ POST /api/birthday-messages (without email) working")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "POST /api/birthday-messages (no email)", "status": "PASS"})
    else:
        print("❌ POST /api/birthday-messages (without email) failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "POST /api/birthday-messages (no email)", "status": "FAIL"})
    
    # GET birthday messages
    result = test_endpoint('GET', '/birthday-messages')
    if result and isinstance(result, list):
        print(f"✅ GET /api/birthday-messages working - returns {len(result)} messages")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "GET /api/birthday-messages", "status": "PASS"})
    else:
        print("❌ GET /api/birthday-messages failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "GET /api/birthday-messages", "status": "FAIL"})
    
    # Test 4: Visitor Data endpoints
    print("\n4️⃣ Testing Visitor Data Endpoints")
    
    # POST visitor data
    visitor_data = {
        "visitor_ip": "192.168.1.100",
        "sections_viewed": ["welcome", "memories", "photo-gallery", "love-letter"],
        "time_spent": 450,
        "favorite_section": "photo-gallery",
        "love_letter_opened": True
    }
    result = test_endpoint('POST', '/visitor-data', visitor_data)
    if result and 'id' in result and 'sections_viewed' in result:
        print("✅ POST /api/visitor-data working - creates visitor data")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "POST /api/visitor-data", "status": "PASS"})
    else:
        print("❌ POST /api/visitor-data failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "POST /api/visitor-data", "status": "FAIL"})
    
    # POST another visitor data
    visitor_data2 = {
        "visitor_ip": "10.0.0.25",
        "sections_viewed": ["welcome", "timeline", "wishes"],
        "time_spent": 320,
        "favorite_section": "timeline",
        "love_letter_opened": False
    }
    result = test_endpoint('POST', '/visitor-data', visitor_data2)
    if result and 'id' in result:
        print("✅ POST /api/visitor-data (second visitor) working")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "POST /api/visitor-data (visitor 2)", "status": "PASS"})
    else:
        print("❌ POST /api/visitor-data (second visitor) failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "POST /api/visitor-data (visitor 2)", "status": "FAIL"})
    
    # GET visitor data
    result = test_endpoint('GET', '/visitor-data')
    if result and isinstance(result, list):
        print(f"✅ GET /api/visitor-data working - returns {len(result)} visitor records")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "GET /api/visitor-data", "status": "PASS"})
    else:
        print("❌ GET /api/visitor-data failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "GET /api/visitor-data", "status": "FAIL"})
    
    # Test 5: Section Interactions endpoints
    print("\n5️⃣ Testing Section Interactions Endpoints")
    
    # POST section interactions
    interactions = [
        {"section_name": "welcome", "interaction_type": "view"},
        {"section_name": "photo-gallery", "interaction_type": "click"},
        {"section_name": "memory-card", "interaction_type": "flip"},
        {"section_name": "music-player", "interaction_type": "play"},
        {"section_name": "love-letter", "interaction_type": "view"}
    ]
    
    interaction_success = 0
    for interaction in interactions:
        result = test_endpoint('POST', '/section-interactions', interaction)
        if result and 'id' in result and 'section_name' in result:
            interaction_success += 1
    
    if interaction_success == len(interactions):
        print(f"✅ POST /api/section-interactions working - created {interaction_success} interactions")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "POST /api/section-interactions", "status": "PASS"})
    else:
        print(f"❌ POST /api/section-interactions partially failed - {interaction_success}/{len(interactions)} succeeded")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "POST /api/section-interactions", "status": "FAIL"})
    
    # GET section interactions
    result = test_endpoint('GET', '/section-interactions')
    if result and isinstance(result, list):
        print(f"✅ GET /api/section-interactions working - returns {len(result)} interactions")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "GET /api/section-interactions", "status": "PASS"})
    else:
        print("❌ GET /api/section-interactions failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "GET /api/section-interactions", "status": "FAIL"})
    
    # Test 6: Analytics endpoint
    print("\n6️⃣ Testing Analytics Endpoint")
    
    result = test_endpoint('GET', '/analytics')
    if result and 'total_visits' in result and 'total_messages' in result:
        print("✅ GET /api/analytics working - returns analytics data")
        print(f"   📊 Total visits: {result.get('total_visits', 0)}")
        print(f"   📊 Total messages: {result.get('total_messages', 0)}")
        print(f"   📊 Most viewed section: {result.get('most_viewed_section', 'N/A')}")
        print(f"   📊 Love letter opens: {result.get('love_letter_opens', 0)}")
        print(f"   📊 Average time spent: {result.get('average_time_spent', 0):.1f}s")
        test_results["passed"] += 1
        test_results["tests"].append({"test": "GET /api/analytics", "status": "PASS"})
    else:
        print("❌ GET /api/analytics failed")
        test_results["failed"] += 1
        test_results["tests"].append({"test": "GET /api/analytics", "status": "FAIL"})
    
    # Summary
    print("\n" + "=" * 60)
    print("🎂 BIRTHDAY WEBSITE BACKEND TEST SUMMARY")
    print("=" * 60)
    print(f"✅ Tests Passed: {test_results['passed']}")
    print(f"❌ Tests Failed: {test_results['failed']}")
    print(f"📊 Success Rate: {(test_results['passed']/(test_results['passed']+test_results['failed'])*100):.1f}%")
    
    print("\n📋 Detailed Results:")
    for test in test_results["tests"]:
        status_icon = "✅" if test["status"] == "PASS" else "❌"
        print(f"  {status_icon} {test['test']}")
    
    if test_results["failed"] == 0:
        print("\n🎉 All backend endpoints are working correctly!")
        print("🗄️ MongoDB collections should be populated with test data")
        return True
    else:
        print(f"\n⚠️ {test_results['failed']} tests failed - check the logs above")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)