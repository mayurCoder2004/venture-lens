import express from "express";
import {
  analyzeIdea,
  getUserIdeas,
  deleteIdea,
  saveIdea,
  getIdeaById,
  generatePitchDeck,
  inviteCollaborator,
} from "../controller/ideaController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, analyzeIdea);
router.post("/save", authMiddleware, saveIdea);
router.get("/", authMiddleware, getUserIdeas);
router.get("/:id", authMiddleware, getIdeaById);
router.delete("/:id", authMiddleware, deleteIdea);
router.post("/:id/invite", authMiddleware, inviteCollaborator);
router.post("/generate-pdf", authMiddleware, generatePitchDeck);

export default router;
