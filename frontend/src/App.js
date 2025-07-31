import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginPage from "./components/LoginPage";
import BirthdayWebsite from "./components/BirthdayWebsite";
import GuestExperience from "./components/GuestExperience";

const AppContent = () => {
  const { user, loading, isKhushi, isGuest } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">🎂</div>
          <p className="text-xl text-gray-600">Loading birthday surprise...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  if (isKhushi) {
    return <BirthdayWebsite />;
  }

  if (isGuest) {
    return <GuestExperience />;
  }

  return <LoginPage />;
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppContent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;