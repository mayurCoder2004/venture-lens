import { useState } from "react";
import IdeaForm from "../components/analyze/IdeaForm";
import IdeaResult from "../components/analyze/IdeaResult";
import { analyzeIdea } from "../utils/api";
import { Brain, Sparkles, Loader2, Zap } from "lucide-react";

const AnalyzePage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (idea) => {
    setLoading(true);
    setResult(null);
    try {
      const response = await analyzeIdea(idea);

      // 🧠 Backend returns: { message, idea: { idea, analysis } }
      const finalResult = response?.idea
        ? { idea: response.idea.idea, analysis: response.idea.analysis }
        : { idea, analysis: response.analysis || response };

      setResult(finalResult);
    } catch (error) {
      alert("Error analyzing idea. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto mt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-2xl">
            <Brain className="text-white" size={40} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            AI Idea <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Analyzer</span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Transform your startup concept into actionable insights with our AI-powered analysis engine
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
              <Zap className="text-yellow-500" size={16} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
              <Sparkles className="text-blue-500" size={16} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
              <Brain className="text-indigo-500" size={16} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Deep Analysis</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <IdeaForm onAnalyze={handleAnalyze} />

        {/* Loading State */}
        {loading && (
          <div className="mt-8 relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl animate-pulse"></div>
            
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-12">
              <div className="flex flex-col items-center justify-center space-y-6">
                {/* Animated loader */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <Loader2 className="relative text-blue-600 dark:text-blue-400 animate-spin" size={56} />
                </div>

                {/* Loading text */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Analyzing Your Idea
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our AI is evaluating market potential, competition, and monetization strategies...
                  </p>
                </div>

                {/* Loading steps */}
                <div className="w-full max-w-md space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-600 dark:text-slate-400">Processing your concept</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-100"></div>
                    <span className="text-slate-600 dark:text-slate-400">Researching market dynamics</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-slate-600 dark:text-slate-400">Generating insights</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full max-w-md">
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-loading-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Result Section */}
        <IdeaResult result={result} />

        {/* Bottom info section */}
        {!loading && !result && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 max-w-lg">
              <Sparkles className="text-blue-600 dark:text-blue-400" size={32} />
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                  Ready to Validate Your Idea?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Our AI analyzes thousands of data points to give you comprehensive insights on market viability, competition landscape, and revenue potential.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default AnalyzePage;