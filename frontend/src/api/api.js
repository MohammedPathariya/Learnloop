// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Adjust for your FastAPI backend
});

// Example API call (GET dialogue)
export const getDialogue = async (topic) => {
  const response = await api.post("/explain", { topic });
  return response.data;
};

// Example API call (GET quiz)
export const getQuiz = async (text) => {
  const response = await api.post("/quiz", { text });
  return response.data;
};

export default api;
