import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { analyzeIdea, getUserIdeas, deleteIdea } from "../controller/ideaController.js";

const router = express.Router();

router.post("/", authMiddleware, analyzeIdea);
router.get("/", authMiddleware, getUserIdeas);
router.delete("/:id", authMiddleware, deleteIdea);

export default router;
