import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const HeartMessage = ({ onNext }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-pink-50 to-yellow-50 flex items-center justify-center relative">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-200">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-pink-600 mb-8">
            A Message From the Heart 💖
          </h2>
          
          <div className={`transition-all duration-2000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 font-handwritten">
              <p>
                "You've been the calm in my chaos. Even when I'm annoying or difficult, 
                you handle everything like the sweetest person alive..."
              </p>
              
              <p>
                "You don't just bring joy into your own life, but mine too. 
                Thank you for existing. I mean it."
              </p>
              
              <div className="text-pink-600 font-medium">
                "Every moment with you feels like a gift I never knew I needed."
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Continue Reading 💕
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartMessage;