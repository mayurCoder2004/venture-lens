import { TextServiceClient } from "@google-ai/generativelanguage";
import dotenv from "dotenv";

dotenv.config();

const client = new TextServiceClient({ apiKey: process.env.GEMINI_API_KEY });

export const analyzeIdeaWithGemini = async (idea) => {
  try {
    const response = await client.generateText({
      model: "models/gemini-2.0-flash",
      prompt: {
        text: `Analyze this startup idea and give strengths, weaknesses, market fit, and improvements: "${idea}"`,
      },
      temperature: 0.7,
      maxOutputTokens: 500,
    });

    // The API response is nested
    return (
      response?.candidates?.[0]?.output?.[0]?.content?.[0]?.text ||
      "No analysis generated"
    );
  } catch (err) {
    console.error("Gemini Service Error:", err);
    throw new Error(err.message || "Failed to generate idea analysis");
  }
};
