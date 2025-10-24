import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { analyzeIdea } from "../controller/ideaController.js";

const router = express.Router();

// Protected route - only logged-in users can analyze ideas
router.post("/", authMiddleware, analyzeIdea);

export default router;
