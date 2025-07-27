import React, { useState } from "react";
import { Button } from "./ui/button";

const FlipCards = ({ onNext }) => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const cards = [
    {
      front: "What makes you special?",
      back: "You care more than anyone I know.",
      color: "from-pink-400 to-purple-400"
    },
    {
      front: "Your superpower?",
      back: "Your smile fixes bad days.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      front: "Your strength?",
      back: "You're sweet but strong.",
      color: "from-green-400 to-teal-400"
    },
    {
      front: "Your gift?",
      back: "You understand even when I don't say a word.",
      color: "from-blue-400 to-indigo-400"
    },
    {
      front: "Your weakness?",
      back: "You like pav bhaji more than logic 😋",
      color: "from-red-400 to-pink-400"
    },
    {
      front: "Your magic?",
      back: "You make ordinary moments extraordinary.",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const toggleCard = (index) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-purple-600 mb-6">
            Why You're Special 💫
          </h2>
          <p className="text-lg text-gray-600 italic">
            Click the cards to discover what makes you amazing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flip-card h-64 cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className={`flip-card-inner ${flippedCards.has(index) ? 'flipped' : ''}`}>
                <div className={`flip-card-front bg-gradient-to-br ${card.color} rounded-3xl p-8 shadow-lg flex items-center justify-center`}>
                  <p className="text-white text-xl font-bold text-center">
                    {card.front}
                  </p>
                </div>
                <div className={`flip-card-back bg-gradient-to-br ${card.color} rounded-3xl p-8 shadow-lg flex items-center justify-center`}>
                  <p className="text-white text-lg text-center font-medium">
                    {card.back}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            More Memories 📸
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;