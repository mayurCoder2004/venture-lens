import { useState } from "react";
import IdeaForm from "../components/analyze/IdeaForm";
import IdeaResult from "../components/analyze/IdeaResult";
import { analyzeIdea } from "../utils/api";

const AnalyzePage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (idea) => {
    setLoading(true);
    setResult(null);
    try {
      const analysis = await analyzeIdea(idea);
      setResult(analysis);
    } catch (error) {
      alert("Error analyzing idea. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">💡 VentureLens - Idea Analyzer</h1>
      <IdeaForm onAnalyze={handleAnalyze} />
      {loading && <p className="mt-4 text-center text-blue-600">Analyzing your idea... please wait ⏳</p>}
      <IdeaResult result={result} />
    </div>
  );
};

export default AnalyzePage;
