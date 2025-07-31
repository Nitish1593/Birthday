import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import analyticsService from "../utils/analytics";

const CakeSection = ({ onNext }) => {
  const [candleBlown, setCandleBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);

  const blowCandle = () => {
    setCandleBlown(true);
    analyticsService.trackInteraction('cake_section', 'candle_blown');
    setTimeout(() => setShowWish(true), 1000);
    setTimeout(() => setShowCelebration(true), 2000);
  };

  const cutCake = () => {
    setCakeCut(true);
    analyticsService.trackInteraction('cake_section', 'cake_cut');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 flex items-center justify-center relative overflow-hidden">
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              {['🎉', '🎊', '✨', '🎈', '🎁', '💖', '🌟'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-dancing-script text-pink-600 mb-8">
          {!candleBlown ? "Make a Wish! 🎂" : "Happy Birthday Khushi! 🎉"}
        </h2>

        {/* Cake */}
        <div className="relative mb-8">
          <div className="text-8xl mb-4 transition-transform duration-500 hover:scale-105">
            {cakeCut ? "🍰" : "🎂"}
          </div>
          
          {/* Candle Animation */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            {!candleBlown ? (
              <div className="flex flex-col items-center">
                <div className="w-2 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="text-2xl animate-bounce">🕯️</div>
              </div>
            ) : (
              <div className="text-2xl animate-pulse">💨</div>
            )}
          </div>

          {/* Sparkles around cake */}
          {candleBlown && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-ping"
                  style={{
                    left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 80}%`,
                    top: `${50 + Math.sin(i * 45 * Math.PI / 180) * 80}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          )}
        </div>

        {!candleBlown ? (
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
            <p className="text-xl text-gray-700 mb-6">
              Close your eyes, make a wish, and blow the candle!
            </p>
            <Button
              onClick={blowCandle}
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Blow the Candle 🕯️
            </Button>
          </div>
        ) : (
          <div className={`bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 transition-all duration-1000 ${showWish ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-6xl mb-4 animate-bounce">✨</div>
            <p className="text-2xl text-pink-600 font-dancing-script mb-6">
              May all your wishes come true, and may I be there to witness every smile you make.
            </p>
            
            {!cakeCut ? (
              <div className="space-y-4">
                <p className="text-lg text-gray-700 mb-6">
                  Now it's time to cut the cake! 🎂
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={cutCake}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Cut the Cake 🔪
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-4xl mb-4 animate-bounce">🍰</div>
                <p className="text-xl text-purple-600 font-dancing-script mb-6">
                  Perfect! Now everyone can enjoy this special moment with you! 🎊
                </p>
                <Button
                  onClick={onNext}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Discover Secret 🤫
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CakeSection;