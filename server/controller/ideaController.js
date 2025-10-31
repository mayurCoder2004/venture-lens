import { analyzeIdeaWithOpenRouter } from "../services/openRouterService.js";
import Idea from "../models/Idea.js";
import PDFDocument from "pdfkit";

export const analyzeIdea = async (req, res) => {
  try {
    const { idea } = req.body;
    const userId = req.user.id;

    if (!idea) return res.status(400).json({ message: "Idea is required" });

    // 🧠 Get AI analysis
    const analysis = await analyzeIdeaWithOpenRouter(idea);

    // 🎯 Extract viability score
    let score = null;
    const match =
      analysis.match(/Rating:\s*(\d+)\s*\/10/i) ||
      analysis.match(/Score:\s*(\d+)\s*\/10/i);
    if (match) score = Number(match[1]);

    // 🏷️ Extract Category (e.g., “Category: AgriTech”)
    let category = "Uncategorized";
    const catMatch = analysis.match(/Category:\s*(.*)/i);
    if (catMatch && catMatch[1]) {
      category = catMatch[1].trim().split(/\n|\.|,/)[0]; // take first word/line
    } else {
      // fallback: infer category from idea keywords
      if (/farm|agri|crop|soil/i.test(idea)) category = "AgriTech";
      else if (/health|medic|care|hospital/i.test(idea)) category = "HealthTech";
      else if (/fintech|bank|payment|crypto/i.test(idea)) category = "FinTech";
      else if (/edu|learn|teach/i.test(idea)) category = "EdTech";
      else if (/travel|tour/i.test(idea)) category = "TravelTech";
      else if (/ai|machine|data/i.test(idea)) category = "AI / Data";
    }

    // 💾 Save in database
    const savedIdea = await Idea.create({
      user: userId,
      idea,
      analysis,
      score,
      category,
    });

    res.status(201).json({
      message: "Idea analyzed successfully",
      idea: savedIdea,
    });
  } catch (err) {
    console.error("❌ Error analyzing idea:", err);
    res.status(500).json({
      message: "Failed to analyze idea",
      error: err.message,
    });
  }
};

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

export const getIdeaById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const idea = await Idea.findOne({ _id: id, user: userId });
    if (!idea) return res.status(404).json({ message: "Idea not found" });

    res.json(idea);
  } catch (err) {
    console.error("Error fetching idea by ID:", err);
    res.status(500).json({ message: "Failed to fetch idea", error: err.message });
  }
};

/* ✅ Updated In-Memory PDF Generation */
export const generatePitchDeck = async (req, res) => {
  try {
    const { idea, analysis } = req.body;

    if (!idea || !analysis) {
      return res.status(400).json({ message: "Idea and analysis are required" });
    }

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(chunks);

      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${idea
          .replace(/\s+/g, "_")
          .slice(0, 50)}_PitchDeck.pdf"`,
      });
      res.end(pdfBuffer);
    });

    // 🧠 Helper: Header
    const addHeader = (title, color1, color2) => {
      const height = 80;
      const gradient = doc.linearGradient(0, 0, doc.page.width, 0);
      gradient.stop(0, color1).stop(1, color2);
      doc.rect(0, 0, doc.page.width, height).fill(gradient);
      doc
        .fontSize(22)
        .fillColor("white")
        .text(title, 50, 25, { align: "left" })
        .moveDown(2);
      doc.moveTo(0, height).lineTo(doc.page.width, height).strokeColor("#ddd").stroke();
      doc.moveDown(1.5);
    };

    // 🧩 Helper: Markdown-style text renderer
    const renderMarkdownText = (text) => {
      const lines = text.split("\n");

      lines.forEach((line) => {
        const trimmed = line.trim();

        if (!trimmed) {
          doc.moveDown(0.5);
          return;
        }

        // Bold (e.g., **something**)
        const boldMatch = trimmed.match(/\*\*(.*?)\*\*/g);
        if (boldMatch) {
          let parsedLine = trimmed;
          boldMatch.forEach((b) => {
            const clean = b.replace(/\*\*/g, "");
            parsedLine = parsedLine.replace(b, clean);
          });
          doc.font("Helvetica-Bold").text(parsedLine, { lineGap: 4 });
          doc.font("Helvetica");
          return;
        }

        // Bullet points
        if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
          doc.text(`• ${trimmed.replace(/^[-*]\s*/, "")}`, { lineGap: 4, indent: 20 });
          return;
        }

        // Numbered list
        if (/^[0-9]+\./.test(trimmed)) {
          doc.text(trimmed, { lineGap: 4, indent: 10 });
          return;
        }

        // Normal paragraph
        doc.text(trimmed, { lineGap: 6 });
      });
    };

    // 🏁 Cover Page
    addHeader("🚀 VentureLens Pitch Deck", "#4F46E5", "#7C3AED");

    doc.moveDown(5);
    doc.fontSize(28).fillColor("#111827").text(idea, { align: "center" });
    doc.moveDown(2);
    doc
      .fontSize(16)
      .fillColor("#6B7280")
      .text("AI-Generated Startup Idea Analysis", { align: "center" });
    doc.moveDown(10);
    doc.fontSize(12).fillColor("#9CA3AF").text("Generated by VentureLens • " + new Date().toDateString(), {
      align: "center",
    });

    // 🪄 Extract meaningful sections
    const sections = [
      { key: "Idea Summary", icon: "💡" },
      { key: "Strengths", icon: "💪" },
      { key: "Weaknesses", icon: "⚠️" },
      { key: "Market Fit", icon: "📈" },
      { key: "Revenue Model", icon: "💰" },
      { key: "Improvement", icon: "🧩" },
      { key: "Overall Viability", icon: "✅" },
    ];

    const cleanText = typeof analysis === "string" ? analysis : JSON.stringify(analysis, null, 2);

    for (const section of sections) {
      const regex = new RegExp(`(${section.key}.*?)(?=\\n[0-9]+\\.|\\n[A-Z][a-z]+:|$)`, "is");
      const match = cleanText.match(regex);
      if (match && match[1]) {
        doc.addPage();
        addHeader(`${section.icon} ${section.key}`, "#6D28D9", "#4F46E5");
        doc.moveDown(1);
        doc.fontSize(14).fillColor("#1F2937");
        renderMarkdownText(match[1]);
      }
    }

    // 🎯 Thank You Page
    doc.addPage();
    addHeader("🎯 Thank You", "#4F46E5", "#7C3AED");
    doc.moveDown(6);
    doc
      .fontSize(24)
      .fillColor("#111827")
      .text("This pitch deck was generated by VentureLens AI", { align: "center" });
    doc.moveDown(1.5);
    doc.fontSize(16).fillColor("#6B7280").text("Empowering innovators to pitch smarter 🚀", {
      align: "center",
    });

    doc.end();
  } catch (err) {
    console.error("❌ Error generating pitch deck:", err);
    res.status(500).json({ message: "Failed to generate pitch deck" });
  }
};

