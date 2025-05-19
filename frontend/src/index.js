// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18+ uses this
import './index.css'; // Your basic CSS file
import App from "./App";

// Correct React 18 setup
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
