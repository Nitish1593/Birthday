import React from "react";
import { Button } from "./ui/button";

const LoveLetter = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
        >
          ×
        </button>

        {/* Envelope animation */}
        <div className="text-center py-8">
          <div className="text-6xl mb-4 animate-pulse">💌</div>
          <h3 className="text-3xl font-dancing-script text-pink-600 mb-8">
            Digital Love Letter
          </h3>
        </div>

        {/* Letter content */}
        <div className="px-8 pb-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
            <p className="text-lg text-gray-700 leading-relaxed space-y-4">
              <span className="block font-dancing-script text-2xl text-pink-600">Dear Khushi,</span>
              
              <span className="block">
                Even words feel too small when I try to describe how much you mean to me. 
                You've brought colors to my world that I never knew existed.
              </span>
              
              <span className="block">
                Your laugh is my favorite sound, your smile my favorite sight, 
                and your presence my favorite feeling. You make the ordinary extraordinary 
                just by being you.
              </span>
              
              <span className="block">
                I hope this little surprise brings even a fraction of the joy you bring 
                to my life every single day. You deserve all the happiness in the world, 
                and I'm grateful I get to witness your beautiful soul.
              </span>
              
              <span className="block">
                Thank you for being the most amazing person I know. Thank you for your 
                patience, your kindness, and your incredible heart.
              </span>
              
              <span className="block font-dancing-script text-xl text-pink-600 text-right mt-8">
                Yours truly, forever just one message away —<br />
                Nitish 💕
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;