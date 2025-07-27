import React, { useState } from "react";
import { Button } from "./ui/button";

const Playlist = ({ onNext }) => {
  const [currentSong, setCurrentSong] = useState(0);

  const songs = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      note: "This is how I see you - absolutely perfect 💕",
      emoji: "🎵"
    },
    {
      title: "All of Me",
      artist: "John Legend",
      note: "Your vibe in song form 💗",
      emoji: "🎶"
    },
    {
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      note: "When I think of our long conversations",
      emoji: "🎼"
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      note: "How long I want to be your friend",
      emoji: "🎵"
    },
    {
      title: "Count on Me",
      artist: "Bruno Mars",
      note: "My promise to you in song form",
      emoji: "🎶"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-6">
            Our Playlist 🎵
          </h2>
          <p className="text-lg text-gray-600 italic">
            Songs that remind me of you
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200">
          {/* Current Song Display */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">
              {songs[currentSong].emoji}
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {songs[currentSong].title}
            </h3>
            <p className="text-xl text-gray-600 mb-4">
              by {songs[currentSong].artist}
            </p>
            <div className="bg-purple-100 rounded-2xl p-4 max-w-md mx-auto">
              <p className="text-purple-700 italic">
                {songs[currentSong].note}
              </p>
            </div>
          </div>

          {/* Playlist */}
          <div className="space-y-4">
            {songs.map((song, index) => (
              <div
                key={index}
                onClick={() => setCurrentSong(index)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  index === currentSong 
                    ? 'bg-purple-200 shadow-lg' 
                    : 'bg-white/50 hover:bg-purple-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{song.emoji}</div>
                    <div>
                      <h4 className="font-bold text-purple-600">{song.title}</h4>
                      <p className="text-gray-600">{song.artist}</p>
                    </div>
                  </div>
                  {index === currentSong && (
                    <div className="text-purple-600 animate-pulse">
                      ♪ Playing
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic mb-4">
              *Music links will be added soon - imagine these playing softly*
            </p>
            
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Time for Cake 🎂
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;