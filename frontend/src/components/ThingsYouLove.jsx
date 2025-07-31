import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const ThingsYouLove = ({ onNext }) => {
  const [visibleItems, setVisibleItems] = useState(0);

  const loveItems = [
    { 
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxwYXYlMjBiaGFqaXxlbnwwfHx8fDE3NTM5NTQxNTF8MA&ixlib=rb-4.1.0&q=85",
      text: "Pav Bhaji", 
      description: "Your absolute favorite!" 
    },
    { 
      image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGV8ZW58MHx8fHwxNzUzOTU0MTYyfDA&ixlib=rb-4.1.0&q=85",
      text: "Chocolates", 
      description: "Sweet like you" 
    },
    { 
      image: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXJ8ZW58MHx8fHwxNzUzOTU0MTY3fDA&ixlib=rb-4.1.0&q=85",
      text: "Cute Moments", 
      description: "Making memories" 
    },
    { 
      image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxzbWFydHBob25lfGVufDB8fHx8MTc1Mzk1NDE3M3ww&ixlib=rb-4.1.0&q=85",
      text: "Caring Talks", 
      description: "Heart to heart" 
    },
    { 
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lfGVufDB8fHx8MTc1Mzk1NDE3M3ww&ixlib=rb-4.1.0&q=85",
      text: "Long Chats", 
      description: "Hours fly by" 
    },
    { 
      image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHx8fHwxNzUzOTU0MTc4fDA&ixlib=rb-4.1.0&q=85",
      text: "Beautiful Things", 
      description: "Just like you" 
    }
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
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl border border-pink-200 hover:border-pink-300 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={item.image} 
                      alt={item.text}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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