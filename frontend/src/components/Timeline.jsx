import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Timeline = ({ onNext }) => {
  const [visibleEvents, setVisibleEvents] = useState(0);

  const timelineEvents = [
    {
      title: "Day 1: When We Met",
      description: "The beginning of something beautiful",
      icon: "🌟",
      color: "from-pink-400 to-purple-400"
    },
    {
      title: "First Funny Conversation",
      description: "When we realized we could talk for hours",
      icon: "😄",
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Your First Long Chat",
      description: "The moment our friendship deepened",
      icon: "💬",
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Today: Your Birthday",
      description: "Celebrating the amazing person you are",
      icon: "🎂",
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Someday: Future Together",
      description: "A future filled with more memories and laughter",
      icon: "🌈",
      color: "from-purple-400 to-indigo-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleEvents(prev => {
        if (prev < timelineEvents.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-indigo-600 mb-6">
            Timeline of Our Bond 📅
          </h2>
          <p className="text-lg text-gray-600 italic">
            Every moment has been a gift
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 to-purple-300 h-full rounded-full"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } transition-all duration-1000 ${
                  index < visibleEvents 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
              >
                {/* Event card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-gradient-to-r ${event.color} rounded-3xl p-6 shadow-lg text-white`}>
                    <div className="text-4xl mb-2">{event.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm opacity-90">{event.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-white border-4 border-pink-400 rounded-full shadow-lg"></div>
                </div>

                {/* Empty space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Final Surprise 🎁
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;