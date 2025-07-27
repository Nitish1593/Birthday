import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import HeartMessage from "./HeartMessage";
import PromisePage from "./PromisePage";
import ThingsYouLove from "./ThingsYouLove";
import FlipCards from "./FlipCards";
import MemoryLane from "./MemoryLane";
import Playlist from "./Playlist";
import LoveLetter from "./LoveLetter";
import CakeSection from "./CakeSection";
import SecretSection from "./SecretSection";
import Timeline from "./Timeline";
import VirtualGiftBox from "./VirtualGiftBox";

const BirthdayWebsite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

  const sections = [
    <WelcomePage onNext={() => setCurrentSection(1)} />,
    <HeartMessage onNext={() => setCurrentSection(2)} />,
    <PromisePage onNext={() => setCurrentSection(3)} />,
    <ThingsYouLove onNext={() => setCurrentSection(4)} />,
    <FlipCards onNext={() => setCurrentSection(5)} />,
    <MemoryLane onNext={() => setCurrentSection(6)} />,
    <Playlist onNext={() => setCurrentSection(7)} />,
    <CakeSection onNext={() => setCurrentSection(8)} />,
    <SecretSection onNext={() => setCurrentSection(9)} />,
    <Timeline onNext={() => setCurrentSection(10)} />,
    <VirtualGiftBox onNext={() => setCurrentSection(0)} />
  ];

  return (
    <div className="birthday-website">
      {sections[currentSection]}
      
      {/* Global Love Letter Modal */}
      <LoveLetter show={showLetter} onClose={() => setShowLetter(false)} />
      
      {/* Floating Love Letter Button */}
      <button
        onClick={() => setShowLetter(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-[9999]"
      >
        💌
      </button>
      
      {/* Navigation dots */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-pink-500 w-6' 
                : 'bg-pink-200 hover:bg-pink-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayWebsite;