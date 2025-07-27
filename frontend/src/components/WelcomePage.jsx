import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const WelcomePage = ({ onNext }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-cream-50 to-yellow-50 flex items-center justify-center relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {['🎉', '🎈', '💖', '🌸', '✨'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Floating Balloons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            🎈
          </div>
        ))}
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-dancing-script text-pink-600 mb-6 animate-pulse">
          Hey Khushi...
        </h1>
        
        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
          <p className="text-2xl md:text-3xl text-pink-700 mb-8 font-medium">
            Someone made this just for you 💌
          </p>
          
          <p className="text-lg md:text-xl text-pink-600 mb-8">
            Tap below to begin your birthday surprise 🎈
          </p>
          
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Begin ❤️
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;