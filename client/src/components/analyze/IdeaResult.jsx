import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast, { Toaster } from 'react-hot-toast';
import { Save, Check, Loader2, Lightbulb, Sparkles } from "lucide-react";

// Mock API function for demo
const saveIdea = async (idea, analysis) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1500);
  });
};

const IdeaResult = ({ result }) => {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
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
      toast.error('Idea or analysis is missing!', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    try {
      setSaving(true);
      
      // Show loading toast
      const loadingToast = toast.loading('Saving your idea...', {
        position: 'top-center',
      });

      await saveIdea(formattedResult.idea, formattedResult.analysis);
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Show success toast
      toast.success('Idea saved successfully! 🎉', {
        duration: 3000,
        position: 'top-center',
        icon: '✅',
      });
      
      setSaved(true);
      
      // Reset saved state after 3 seconds
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("❌ Failed to save idea:", error);
      
      toast.error('Failed to save idea. Please try again.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster 
        toastOptions={{
          // Default options
          className: '',
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
          },
          // Success toast style
          success: {
            style: {
              background: '#10b981',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10b981',
            },
          },
          // Error toast style
          error: {
            style: {
              background: '#ef4444',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#ef4444',
            },
          },
          // Loading toast style
          loading: {
            style: {
              background: '#3b82f6',
            },
          },
        }}
      />

      <div className="mt-8 relative">
        {/* Decorative background elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>

        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          {/* Top gradient accent */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

          <div className="p-6 md:p-8">
            {/* Header section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    AI Analysis Result
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Your comprehensive startup evaluation
                  </p>
                </div>
              </div>

              {/* Save button */}
              <button
                onClick={handleSave}
                disabled={saving || saved}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:transform-none ${
                  saved
                    ? "bg-green-600 text-white cursor-default"
                    : saving
                    ? "bg-slate-400 dark:bg-slate-600 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white hover:shadow-xl"
                }`}
              >
                {saving ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Saving...</span>
                  </>
                ) : saved ? (
                  <>
                    <Check size={18} />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    <span>Save Idea</span>
                  </>
                )}
              </button>
            </div>

            {/* Idea title section */}
            <div className="mb-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-1">
                    Your Idea
                  </p>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                    {formattedResult.idea}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-8"></div>

            {/* Analysis content */}
            <div className="prose prose-lg max-w-none 
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
                {formattedResult.analysis}
              </ReactMarkdown>
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 px-6 md:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-400">
              <p>
                💡 <span className="font-medium">Pro Tip:</span> Save this analysis to track your idea's progress
              </p>
              <div className="flex items-center gap-2 text-xs bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                <Sparkles className="text-blue-600 dark:text-blue-400" size={14} />
                <span className="font-medium text-blue-700 dark:text-blue-300">AI-Powered Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaResult;