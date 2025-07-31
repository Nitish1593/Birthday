import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const MemoryLane = ({ onNext }) => {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const memories = [
    {
      image: "https://customer-assets.emergentagent.com/job_sweet-promise/artifacts/yl6sb1gr_Khushi.jpg",
      title: "Beautiful Khushi",
      description: "This was the day I realized how beautiful and amazing you are.",
      date: "A moment to remember"
    },
    {
      image: "https://customer-assets.emergentagent.com/job_sweet-promise/artifacts/3uspezol_Khushi_2.jpg",
      title: "Happy Moments",
      description: "Your smile always lights up every moment 🥺",
      date: "Perfect timing"
    },
    {
      image: "https://customer-assets.emergentagent.com/job_sweet-promise/artifacts/6j9ucwf7_khushi_img.jpg",
      title: "Sweet Memories",
      description: "Every photo tells a story of happiness",
      date: "Precious moments"
    },
    {
      image: "https://customer-assets.emergentagent.com/job_sweet-promise/artifacts/47evcnbx_kb.jpg",
      title: "Childhood Cuteness",
      description: "You were adorable then, and you're amazing now!",
      date: "Throwback love"
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
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-200 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={memories[currentMemory].image} 
                  alt={memories[currentMemory].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-bold text-rose-600 mb-4">
                {memories[currentMemory].title}
              </h3>
              <p className="text-lg text-gray-700 mb-4 italic max-w-md mx-auto">
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