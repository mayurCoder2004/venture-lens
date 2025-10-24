import { analyzeIdeaWithOpenRouter } from "../services/openRouterService.js";

export const analyzeIdea = async (req, res) => {
  try {
    const { idea } = req.body;
    if (!idea) return res.status(400).json({ message: "Idea is required" });

    const analysis = await analyzeIdeaWithOpenRouter(idea);
    res.json({ analysis });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to analyze idea", error: err.message });
  }
};
