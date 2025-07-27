import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AnalyticsDashboard = ({ onNext }) => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get(`${API}/analytics`);
      setAnalytics(response.data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">📊</div>
          <p className="text-xl text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-6">
            Website Analytics 📊
          </h2>
          <p className="text-lg text-gray-600 italic">
            See how people are enjoying Khushi's birthday surprise!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Visits */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-purple-200 text-center">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {analytics?.total_visits || 0}
            </h3>
            <p className="text-gray-600">Total Visits</p>
          </div>

          {/* Total Messages */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-pink-200 text-center">
            <div className="text-4xl mb-2">💌</div>
            <h3 className="text-3xl font-bold text-pink-600 mb-2">
              {analytics?.total_messages || 0}
            </h3>
            <p className="text-gray-600">Birthday Wishes</p>
          </div>

          {/* Love Letter Opens */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-red-200 text-center">
            <div className="text-4xl mb-2">💕</div>
            <h3 className="text-3xl font-bold text-red-600 mb-2">
              {analytics?.love_letter_opens || 0}
            </h3>
            <p className="text-gray-600">Love Letter Opens</p>
          </div>

          {/* Average Time */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-indigo-200 text-center">
            <div className="text-4xl mb-2">⏱️</div>
            <h3 className="text-3xl font-bold text-indigo-600 mb-2">
              {Math.round(analytics?.average_time_spent || 0)}s
            </h3>
            <p className="text-gray-600">Avg. Time Spent</p>
          </div>
        </div>

        {/* Most Viewed Section */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-200 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-dancing-script text-purple-600 mb-4">
              Most Popular Section
            </h3>
            <div className="text-6xl mb-4">🏆</div>
            <p className="text-xl font-bold text-purple-600 capitalize">
              {analytics?.most_viewed_section || "Welcome"}
            </p>
            <p className="text-gray-600 mt-2">
              People love this section the most!
            </p>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200 mb-12">
          <h3 className="text-2xl font-dancing-script text-pink-600 mb-6 text-center">
            Fun Facts 🎉
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎂</div>
              <p className="text-gray-700">
                {analytics?.total_visits || 0} people celebrated with Khushi!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💝</div>
              <p className="text-gray-700">
                {analytics?.total_messages || 0} birthday wishes sent with love!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <p className="text-gray-700">
                {analytics?.love_letter_opens || 0} hearts touched by the love letter!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Back to Experience 🎈
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;