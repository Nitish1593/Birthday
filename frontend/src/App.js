import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BirthdayWebsite from "./components/BirthdayWebsite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BirthdayWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;