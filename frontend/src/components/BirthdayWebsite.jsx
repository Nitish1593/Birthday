import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
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
import GuestBook from "./GuestBook";
import AnalyticsDashboard from "./AnalyticsDashboard";
import analyticsService from "../utils/analytics";

const BirthdayWebsite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const { user, logout, isKhushi } = useAuth();

  // Sections available only to Khushi
  const khushiSections = [
    { component: <WelcomePage onNext={() => setCurrentSection(1)} />, name: "welcome" },
    { component: <HeartMessage onNext={() => setCurrentSection(2)} />, name: "heart_message" },
    { component: <PromisePage onNext={() => setCurrentSection(3)} />, name: "promise" },
    { component: <ThingsYouLove onNext={() => setCurrentSection(4)} />, name: "things_you_love" },
    { component: <FlipCards onNext={() => setCurrentSection(5)} />, name: "flip_cards" },
    { component: <MemoryLane onNext={() => setCurrentSection(6)} />, name: "memory_lane" },
    { component: <Playlist onNext={() => setCurrentSection(7)} />, name: "playlist" },
    { component: <CakeSection onNext={() => setCurrentSection(8)} />, name: "cake_section" },
    { component: <SecretSection onNext={() => setCurrentSection(9)} />, name: "secret_section" },
    { component: <Timeline onNext={() => setCurrentSection(10)} />, name: "timeline" },
    { component: <VirtualGiftBox onNext={() => setCurrentSection(11)} />, name: "virtual_gift_box" },
    { component: <GuestBook onNext={() => setCurrentSection(12)} />, name: "guest_book" },
    { component: <AnalyticsDashboard onNext={() => setCurrentSection(0)} />, name: "analytics" }
  ];

  const sections = isKhushi ? khushiSections : [];

  // Track section changes for Khushi only
  useEffect(() => {
    if (isKhushi) {
      const sectionName = sections[currentSection]?.name;
      if (sectionName) {
        analyticsService.trackSectionView(sectionName);
      }
    }
  }, [currentSection, isKhushi]);

  // Handle love letter open for Khushi only
  const handleLoveLetterOpen = () => {
    setShowLetter(true);
    if (isKhushi) {
      analyticsService.trackLoveLetterOpen();
    }
  };

  // Send visitor data when component unmounts (for Khushi only)
  useEffect(() => {
    if (isKhushi) {
      const handleBeforeUnload = () => {
        analyticsService.sendVisitorData();
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        analyticsService.sendVisitorData();
      };
    }
  }, [isKhushi]);

  if (!isKhushi) {
    // This should not happen as guests have their own component
    return null;
  }

  return (
    <div className="birthday-website">
      {sections[currentSection]?.component}
      
      {/* Global Love Letter Modal - Only for Khushi */}
      <LoveLetter show={showLetter} onClose={() => setShowLetter(false)} />
      
      {/* Floating Love Letter Button - Only for Khushi */}
      <button
        onClick={handleLoveLetterOpen}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-[9999]"
      >
        💌
      </button>
      
      {/* Navigation dots - Only for Khushi */}
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

      {/* Analytics Button - Only for Khushi */}
      <button
        onClick={() => setCurrentSection(12)}
        className="fixed top-6 right-20 bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        title="View Analytics"
      >
        📊
      </button>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="fixed top-6 right-6 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        Logout
      </button>

      {/* Welcome message for Khushi */}
      <div className="fixed top-6 left-6 bg-pink-400 text-white px-4 py-2 rounded-full shadow-lg z-50">
        Welcome back, {user?.name}! 💕
      </div>
    </div>
  );
};

export default BirthdayWebsite;