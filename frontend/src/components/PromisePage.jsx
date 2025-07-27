import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const PromisePage = ({ onNext }) => {
  const [showPromise, setShowPromise] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPromise(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-cream-50 flex items-center justify-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            🤝
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-purple-200 relative">
          {/* Decorative scroll effect */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full animate-spin"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-300 rounded-full animate-spin"></div>
          
          <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-8">
            The Promise 🤞
          </h2>
          
          <div className={`transition-all duration-2000 ${showPromise ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
              <p className="text-2xl md:text-3xl text-purple-700 leading-relaxed font-handwritten">
                "No matter what happens in the future, I'll always be there for you — 
                in every situation, with just one message or one call."
              </p>
            </div>
            
            <div className="text-lg text-gray-600 italic">
              This isn't just words, it's a promise from the heart.
            </div>
          </div>
          
          {/* Holding hands animation */}
          <div className="my-8 text-6xl animate-pulse">
            🤝
          </div>
          
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            I Believe You 💜
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromisePage;