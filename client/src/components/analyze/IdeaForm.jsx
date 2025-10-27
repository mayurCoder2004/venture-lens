import { useState } from "react";

const IdeaForm = ({ onAnalyze }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return alert("Please enter your idea");
    onAnalyze(idea);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md">
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your startup or project idea..."
        className="border p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Analyze Idea
      </button>
    </form>
  );
};

export default IdeaForm;
