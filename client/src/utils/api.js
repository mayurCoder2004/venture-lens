import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// ✅ Automatically attach token to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 🔹 Analyze idea
export const analyzeIdea = async (idea) => {
  try {
    const response = await API.post("/analyze", { idea });
    return response.data.analysis || response.data;
  } catch (error) {
    console.error("❌ Error analyzing idea:", error);
    throw (
      error.response?.data?.error ||
      error.message ||
      "Failed to analyze idea"
    );
  }
};

// 🔹 Get all saved ideas (Dashboard)
export const getIdeas = async () => {
  try {
    const res = await API.get("/analyze");
    return res;
  } catch (err) {
    console.error("❌ Failed to fetch ideas:", err);
    throw err;
  }
};

// 🔹 Delete an idea
export const deleteIdea = async (id) => {
  try {
    const res = await API.delete(`/analyze/${id}`);
    return res.data;
  } catch (err) {
    console.error("❌ Failed to delete idea:", err);
    throw err;
  }
};

export default API;
