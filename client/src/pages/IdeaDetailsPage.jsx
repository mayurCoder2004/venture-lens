import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIdeaById } from "../utils/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  Lightbulb,
  Calendar,
  Loader2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const IdeaDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        const data = await getIdeaById(id);
        setIdea(data);
      } catch (err) {
        console.error("Failed to load idea details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchIdea();
  }, [id]);

  const handleGeneratePitchDeck = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/analyze/generate-pdf`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            idea: idea.idea,
            analysis: idea.analysis,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${idea.idea.replace(/\s+/g, "_")}_PitchDeck.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to generate pitch deck. Try again.");
    }
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
          <Loader2
            className="relative text-blue-600 dark:text-blue-400 animate-spin"
            size={48}
          />
        </div>
        <p className="mt-6 text-lg font-medium text-slate-700 dark:text-slate-300">
          Loading idea details...
        </p>
      </div>
    );

  if (!idea)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 px-4">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-xl opacity-20"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center">
            <AlertCircle className="text-red-600 dark:text-red-400" size={40} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          Idea Not Found
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-center">
          The idea you're looking for doesn't exist or has been deleted.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto mt-20">
        {/* Back button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 group"
        >
          <ArrowLeft
            size={20}
            className="transform group-hover:-translate-x-1 transition-transform duration-200"
          />
          <span>Back to Dashboard</span>
        </button>

        {/* Main content card */}
        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          {/* Top gradient accent */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

          <div className="p-8 md:p-12">
            {/* Header section */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-3">
                  <Sparkles
                    className="text-blue-600 dark:text-blue-400"
                    size={14}
                  />
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                    AI Analysis
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3 leading-tight">
                  {idea.idea}
                </h1>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar size={16} />
                  <span className="text-sm">
                    Analyzed on{" "}
                    {new Date(idea.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent my-8"></div>

            {/* Analysis content */}
            <div
              className="prose prose-lg max-w-none 
              prose-headings:text-slate-800 dark:prose-headings:text-slate-100
              prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:leading-relaxed
              prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-100 dark:prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/10 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
              prose-ul:my-4 prose-ol:my-4
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-slate-100 dark:prose-th:bg-slate-700 prose-th:p-3 prose-th:text-left
              prose-td:border prose-td:border-slate-200 dark:prose-td:border-slate-700 prose-td:p-3"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {idea.analysis}
              </ReactMarkdown>
            </div>
          </div>

          {/* Bottom section with action buttons */}
          <div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 px-8 md:px-12 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
                What would you like to do next?
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/analyze")}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Sparkles size={18} />
                  <span>New Analysis</span>
                </button>

                <button
                  onClick={handleGeneratePitchDeck}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  🎯 <span>Generate Pitch Deck PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;
