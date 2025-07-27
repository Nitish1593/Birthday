import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const ThingsYouLove = ({ onNext }) => {
  const [visibleItems, setVisibleItems] = useState(0);

  const loveItems = [
    { emoji: "🍛", text: "Pav Bhaji", description: "Your absolute favorite!" },
    { emoji: "🍫", text: "Chocolates", description: "Sweet like you" },
    { emoji: "🧸", text: "Cute Moments", description: "Making memories" },
    { emoji: "🫂", text: "Caring Talks", description: "Heart to heart" },
    { emoji: "📱", text: "Long Chats", description: "Hours fly by" },
    { emoji: "🌸", text: "Beautiful Things", description: "Just like you" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < loveItems.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-cream-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-pink-600 mb-6">
            Things You Love ❤️
          </h2>
          <p className="text-lg md:text-xl text-gray-600 italic">
            "Everything you love, I've started loving more — because they're a part of you."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loveItems.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                index < visibleItems 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl border border-pink-200 hover:border-pink-300 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-pink-600 mb-2">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 italic">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Show Me More 🌟
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThingsYouLove;