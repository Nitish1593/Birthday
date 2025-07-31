import React, { useState } from 'react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import GuestBook from './GuestBook';

const GuestExperience = () => {
  const [showGuestBook, setShowGuestBook] = useState(false);
  const { user, logout } = useAuth();

  if (showGuestBook) {
    return <GuestBook onNext={() => setShowGuestBook(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-cream-50 to-yellow-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating celebration elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {['🎉', '🎈', '💖', '🌸', '✨', '🎂', '🎁'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>

      {/* Logout button */}
      <button
        onClick={logout}
        className="fixed top-6 right-6 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        Logout
      </button>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-200">
          <div className="text-8xl mb-6 animate-pulse">🎂</div>
          
          <h1 className="text-5xl md:text-6xl font-dancing-script text-pink-600 mb-6">
            Welcome {user?.name}! 🎉
          </h1>
          
          <div className="text-6xl mb-8">🎈</div>
          
          <h2 className="text-3xl md:text-4xl font-dancing-script text-purple-600 mb-8">
            Join Khushi's Birthday Celebration!
          </h2>
          
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You're invited to be part of something special! Today we're celebrating 
              an amazing person who brings joy and happiness wherever she goes.
            </p>
            
            <p className="text-lg text-gray-600 italic">
              "Every birthday is a gift. Every year is a blessing. 
              Every moment is a celebration!" 
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-4xl mb-4">💝</div>
            
            <p className="text-xl text-gray-700 mb-8">
              Leave a special birthday wish for Khushi and make her day even more memorable!
            </p>
            
            <Button
              onClick={() => setShowGuestBook(true)}
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-12 py-6 text-2xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Leave Birthday Wishes 💌
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🎊</div>
              <p className="text-sm text-gray-600">Celebrate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💕</div>
              <p className="text-sm text-gray-600">Share Love</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎈</div>
              <p className="text-sm text-gray-600">Spread Joy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <p className="text-sm text-gray-600">Make Memories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestExperience;