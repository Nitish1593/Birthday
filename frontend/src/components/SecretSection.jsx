import React, { useState } from "react";
import { Button } from "./ui/button";

const SecretSection = ({ onNext }) => {
  const [secretRevealed, setSecretRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center relative">
      {/* Secret heart in corner */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setSecretRevealed(true)}
          className="text-4xl hover:scale-110 transition-transform duration-300 animate-pulse"
        >
          💖
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {!secretRevealed ? (
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-purple-200">
            <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-8">
              Secret Section 🤫
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              There's something special hidden on this page...
            </p>
            <p className="text-lg text-gray-600 italic">
              Look for the secret heart! 💖
            </p>
          </div>
        ) : (
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-purple-200">
            <div className="text-6xl mb-6 animate-bounce">🎉</div>
            <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-8">
              You Found It! 🎊
            </h2>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
              <p className="text-2xl text-purple-700 font-dancing-script mb-4">
                "If you're reading this, you're one of the most precious people in the world to me."
              </p>
              <p className="text-lg text-gray-700">
                You always will be. ❤️
              </p>
            </div>
            
            <div className="text-lg text-gray-600 italic mb-8">
              This secret was meant just for you, Khushi. 
              You have a special place in my heart that no one else can fill.
            </div>
            
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Our Timeline 📅
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecretSection;