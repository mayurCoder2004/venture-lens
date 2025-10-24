import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models?key=" + process.env.GEMINI_API_KEY
    );
    const data = await response.json();

    if (data.models) {
      console.log("✅ Available Gemini Models:");
      data.models.forEach((m) => console.log(`- ${m.name}`));
    } else {
      console.log("⚠️ No models found or invalid API key");
      console.log(data);
    }
  } catch (error) {
    console.error("❌ Error fetching models:", error);
  }
}

listModels();
