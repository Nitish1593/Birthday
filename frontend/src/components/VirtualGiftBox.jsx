import React, { useState } from "react";
import { Button } from "./ui/button";

const VirtualGiftBox = ({ onNext }) => {
  const [giftOpened, setGiftOpened] = useState(false);
  const [showRewards, setShowRewards] = useState(false);

  const openGift = () => {
    setGiftOpened(true);
    setTimeout(() => setShowRewards(true), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
      {/* Falling chocolates */}
      {showRewards && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              🍫
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-8">
          Virtual Gift Box 🎁
        </h2>

        {!giftOpened ? (
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-purple-200">
            <div className="text-8xl mb-6 animate-pulse">🎁</div>
            <p className="text-xl text-gray-700 mb-8">
              I have some special gifts for you! Click to open...
            </p>
            <Button
              onClick={openGift}
              className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Open Gift Box 🎊
            </Button>
          </div>
        ) : (
          <div className={`bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-purple-200 transition-all duration-1000 ${showRewards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-3xl font-dancing-script text-purple-600 mb-8">
              Your Rewards! 🎊
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
                <div className="text-4xl mb-2">🍫</div>
                <h4 className="text-xl font-bold text-purple-600 mb-2">
                  Unlimited Virtual Chocolates
                </h4>
                <p className="text-gray-700">
                  As many as you want, whenever you want!
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6">
                <div className="text-4xl mb-2">📱</div>
                <h4 className="text-xl font-bold text-pink-600 mb-2">
                  Unlimited Annoying Texts
                </h4>
                <p className="text-gray-700">
                  You win unlimited annoying texts from me. Forever! 😂
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6">
                <div className="text-4xl mb-2">🤗</div>
                <h4 className="text-xl font-bold text-indigo-600 mb-2">
                  Claim Your Hug
                </h4>
                <p className="text-gray-700 mb-4">
                  Redeemable anytime, anywhere!
                </p>
                <div className="text-6xl animate-pulse">🫂</div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6">
                <div className="text-4xl mb-2">💕</div>
                <h4 className="text-xl font-bold text-teal-600 mb-2">
                  Lifetime Friend Guarantee
                </h4>
                <p className="text-gray-700">
                  No expiry date, no terms and conditions!
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button
                onClick={onNext}
                className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Over 🔄
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualGiftBox;