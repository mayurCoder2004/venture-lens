import express from "express";
import {
  analyzeIdea,
  getUserIdeas,
  deleteIdea,
  saveIdea,
} from "../controller/ideaController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"; // ✅ if using auth

const router = express.Router();

router.post("/", authMiddleware, analyzeIdea);
router.post("/save", authMiddleware, saveIdea);
router.get("/", authMiddleware, getUserIdeas);
router.delete("/:id", authMiddleware, deleteIdea);

export default router; // ✅ this fixes the issue
