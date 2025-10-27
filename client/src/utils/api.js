import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

// Add token to request headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

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

export default API;
