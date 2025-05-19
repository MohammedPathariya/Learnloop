// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import ThinkMatePage from "./pages/ThinkMatePage";
import SavedLibrary from "./components/SavedLibrary";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <h1>LearnLoop</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz Mode</Link>
            <Link to="/thinkmate">ThinkMate Mode</Link>
            <Link to="/library">Saved Library</Link>
          </div>
        </div>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/thinkmate" element={<ThinkMatePage />} />
            <Route path="/library" element={<SavedLibrary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
