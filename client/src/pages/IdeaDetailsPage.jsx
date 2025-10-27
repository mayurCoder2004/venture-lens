import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIdeaById } from "../utils/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

  if (loading) return <p className="text-center mt-10 text-blue-600">Loading idea...</p>;
  if (!idea) return <p className="text-center mt-10 text-red-500">Idea not found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-purple-700 mb-2">
        💡 {idea.idea}
      </h1>

      <p className="text-gray-500 text-sm mb-6">
        {new Date(idea.createdAt).toLocaleDateString()}
      </p>

      <div className="prose max-w-none prose-headings:text-purple-700 prose-p:text-gray-800 prose-li:text-gray-700">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {idea.analysis}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;
