import React, { useState } from "react";
import { Button } from "./ui/button";
import analyticsService from "../utils/analytics";

const CakeSection = ({ onNext }) => {
  const [candleBlown, setCandleBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const blowCandle = () => {
    setCandleBlown(true);
    setTimeout(() => setShowWish(true), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-dancing-script text-pink-600 mb-8">
          Make a Wish! 🎂
        </h2>

        {/* Cake */}
        <div className="relative mb-8">
          <div className="text-8xl mb-4">🎂</div>
          
          {/* Candle */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            {!candleBlown ? (
              <div className="flex flex-col items-center">
                <div className="w-2 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="text-2xl animate-bounce">🕯️</div>
              </div>
            ) : (
              <div className="text-2xl">💨</div>
            )}
          </div>
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
              Blow the Candle 🎂
            </Button>
          </div>
        ) : (
          <div className={`bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 transition-all duration-1000 ${showWish ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-6xl mb-4">✨</div>
            <p className="text-2xl text-pink-600 font-dancing-script mb-6">
              May all your wishes come true, and may I be there to witness every smile you make.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Happy Birthday, Khushi! 🎉
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
    </div>
  );
};

export default CakeSection;