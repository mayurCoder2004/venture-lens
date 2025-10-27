import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { saveIdea } from "../../utils/api";

const IdeaResult = ({ result }) => {
  const [saving, setSaving] = useState(false);
  const [formattedResult, setFormattedResult] = useState(null);

  useEffect(() => {
    if (!result) return;

    // 🧩 Handle both types of backend responses
    if (result.idea?.analysis) {
      setFormattedResult({
        idea: result.idea.idea,
        analysis: result.idea.analysis,
        _id: result.idea._id,
      });
    } else if (result.analysis) {
      setFormattedResult(result);
    } else if (result.idea) {
      setFormattedResult({
        idea: result.idea,
        analysis: result.analysis || "No analysis available.",
      });
    }
  }, [result]);

  if (!formattedResult) return null;

  // Handle Save
  const handleSave = async () => {
    if (!formattedResult.idea || !formattedResult.analysis) {
      alert("Idea or analysis is missing!");
      return;
    }

    try {
      setSaving(true);
      await saveIdea(formattedResult.idea, formattedResult.analysis);
      alert("✅ Idea saved successfully!");
    } catch (error) {
      console.error("❌ Failed to save idea:", error);
      alert("❌ Failed to save idea. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-purple-700">
          🧠 Analysis Result
        </h2>

        <button
          onClick={handleSave}
          disabled={saving}
          className={`px-4 py-2 rounded-lg text-white transition ${
            saving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {saving ? "Saving..." : "💾 Save Idea"}
        </button>
      </div>

      <div className="mb-3 text-gray-800 font-semibold">
        💡 <span className="text-purple-700">{formattedResult.idea}</span>
      </div>

      <div className="prose max-w-none prose-headings:text-purple-700 prose-p:text-gray-800 prose-li:text-gray-700">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {formattedResult.analysis}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default IdeaResult;
