import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const analyzeIdeaWithOpenRouter = async (idea) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-4o-mini", // choose model
        messages: [
          {
            role: "system",
            content:
              "You are a professional startup analyst. Your job is to analyze startup ideas and provide detailed feedback.",
          },
          {
            role: "user",
            content: `
Analyze this startup idea: "${idea}"

Provide your analysis in the following structured format:

1. **Idea Summary**: Summarize the idea in 1-2 sentences.
2. **Strengths**: List key advantages and what makes the idea promising.
3. **Weaknesses**: Point out possible challenges or flaws.
4. **Market Fit**: Assess the target audience, demand, and potential competitors.
5. **Revenue Model Suggestions**: Suggest possible monetization strategies.
6. **Improvement Suggestions**: Recommend ways to make the idea better or more scalable.
7. **Overall Viability**: Rate the idea on a scale of 1-10 and explain why.
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:5000",
          "X-Title": "Venture Lens",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.error(
      "OpenRouter Service Error:",
      err.response?.data || err.message
    );
    throw new Error(
      err.response?.data?.error || err.message || "Failed to analyze idea"
    );
  }
};
