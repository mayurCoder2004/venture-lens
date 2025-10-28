import { useState } from "react";
import { Sparkles, Send, Lightbulb } from "lucide-react";

const IdeaForm = ({ onAnalyze }) => {
  const [idea, setIdea] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return alert("Please enter your idea");
    onAnalyze(idea);
  };

  const characterCount = idea.length;
  const maxCharacters = 1000;

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
    >
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Lightbulb className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Describe Your Idea
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tell us about your startup concept
            </p>
          </div>
        </div>

        {/* Textarea container */}
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-lg opacity-0 transition-opacity duration-300 ${
              isFocused ? "opacity-20" : ""
            }`}
          ></div>
          <div className="relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Example: A mobile app that uses AI to help small businesses automate their customer support..."
              maxLength={maxCharacters}
              className={`w-full border-2 ${
                isFocused
                  ? "border-blue-500 dark:border-blue-400"
                  : "border-slate-300 dark:border-slate-600"
              } bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 p-4 rounded-xl h-40 resize-none focus:outline-none transition-all duration-200`}
            ></textarea>

            {/* Character count */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <span
                className={`text-xs font-medium ${
                  characterCount > maxCharacters * 0.9
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {characterCount}/{maxCharacters}
              </span>
            </div>
          </div>
        </div>

        {/* Tips section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <Sparkles className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Pro Tips:
              </p>
              <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Be specific about your target audience</li>
                <li>• Mention the problem you're solving</li>
                <li>• Include your unique value proposition</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!idea.trim()}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md"
        >
          <Sparkles size={20} />
          <span>Analyze My Idea</span>
          <Send size={18} />
        </button>

        {/* Bottom info text */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
          Our AI will analyze market potential, competition, and monetization strategies
        </p>
      </div>
    </form>
  );
};

export default IdeaForm;