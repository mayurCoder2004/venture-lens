import { analyzeIdeaWithOpenRouter } from "../services/openRouterService.js";
import Idea from "../models/Idea.js";

export const analyzeIdea = async (req, res) => {
  try {
    const { idea } = req.body;
    const userId = req.user.id; // from authMiddleware

    if (!idea) return res.status(400).json({ message: "Idea is required" });

    const analysis = await analyzeIdeaWithOpenRouter(idea);

    // ✅ Save to database
    const savedIdea = await Idea.create({
      user: userId,
      idea,
      analysis,
    });

    res.status(201).json({ message: "Idea analyzed successfully", idea: savedIdea });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to analyze idea", error: err.message });
  }
};

// 🧠 Fetch all saved ideas for a user (Dashboard)
export const getUserIdeas = async (req, res) => {
  try {
    const userId = req.user.id;
    const ideas = await Idea.find({ user: userId }).sort({ createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch ideas", error: err.message });
  }
};


export const deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const idea = await Idea.findOneAndDelete({ _id: id, user: userId });
    if (!idea) return res.status(404).json({ message: "Idea not found" });

    res.json({ message: "Idea deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete idea", error: err.message });
  }
};

export const saveIdea = async (req, res) => {
  try {
    const { idea, analysis } = req.body;
    const userId = req.user.id;

    if (!idea || !analysis)
      return res.status(400).json({ message: "Idea and analysis are required" });

    const newIdea = new Idea({ user: userId, idea, analysis });
    await newIdea.save();

    res.status(201).json({ message: "Idea saved successfully", idea: newIdea });
  } catch (err) {
    console.error("Error saving idea:", err);
    res.status(500).json({ message: "Failed to save idea", error: err.message });
  }
};
