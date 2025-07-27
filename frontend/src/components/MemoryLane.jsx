import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const MemoryLane = ({ onNext }) => {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const memories = [
    {
      image: "📱",
      title: "First Long Chat",
      description: "This was the day I realized how important you are.",
      date: "A day I'll never forget"
    },
    {
      image: "😊",
      title: "Your Cute Moment",
      description: "You looked so cute here 🥺",
      date: "Perfect timing"
    },
    {
      image: "🍛",
      title: "Pav Bhaji Discovery",
      description: "The day I learned about your favorite food!",
      date: "Food bonding"
    },
    {
      image: "💕",
      title: "Heart to Heart",
      description: "When we talked about everything and nothing",
      date: "Connection moment"
    },
    {
      image: "🎈",
      title: "Birthday Planning",
      description: "When I decided to make this surprise for you",
      date: "The beginning of this"
    }
  ];

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentMemory(prev => (prev + 1) % memories.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [autoPlay]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-cream-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-rose-600 mb-6">
            Memory Lane 📸
          </h2>
          <p className="text-lg text-gray-600 italic">
            Our beautiful moments together
          </p>
        </div>

        <div className="relative">
          {/* Main Memory Display */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-200 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-6 animate-pulse">
                {memories[currentMemory].image}
              </div>
              <h3 className="text-3xl font-bold text-rose-600 mb-4">
                {memories[currentMemory].title}
              </h3>
              <p className="text-lg text-gray-700 mb-4 italic">
                {memories[currentMemory].description}
              </p>
              <div className="text-sm text-rose-500 font-medium">
                {memories[currentMemory].date}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={() => setCurrentMemory(prev => prev > 0 ? prev - 1 : memories.length - 1)}
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full"
            >
              ← Previous
            </Button>
            <Button
              onClick={() => setAutoPlay(!autoPlay)}
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full"
            >
              {autoPlay ? '⏸️ Pause' : '▶️ Play'}
            </Button>
            <Button
              onClick={() => setCurrentMemory(prev => (prev + 1) % memories.length)}
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full"
            >
              Next →
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMemory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentMemory 
                    ? 'bg-rose-500 w-6' 
                    : 'bg-rose-200 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic mb-6">
            *Photos will be added soon - this is just the beginning of our memory collection!*
          </p>
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Play Our Playlist 🎵
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;