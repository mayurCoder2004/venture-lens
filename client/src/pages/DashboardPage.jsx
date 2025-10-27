import { useEffect, useState } from "react";
import { getIdeas, deleteIdea } from "../utils/api";
import DashboardStats from "../components/dashboard/DashboardStats";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchIdeas = async () => {
    try {
      const res = await getIdeas();
      setIdeas(res.data);
    } catch (err) {
      console.error("Failed to fetch ideas", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this idea?")) return;
    try {
      await deleteIdea(id);
      setIdeas(ideas.filter((idea) => idea._id !== id));
    } catch (err) {
      console.error("Error deleting idea:", err);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-blue-600">Loading dashboard...</p>
    );

  return (
    <div className="max-w-5xl mx-auto mt-30 mb-30 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          📊 VentureLens Dashboard
        </h1>
        <button
          onClick={() => navigate("/analyze")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          + New Analysis
        </button>
      </div>

      <DashboardStats ideas={ideas} />

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.length > 0 ? (
          ideas.map((idea) => (
            <div
              key={idea._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                {idea.idea || "Untitled Idea"}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(idea.createdAt).toLocaleDateString()}
              </p>
              <button
                onClick={() => navigate(`/idea/${idea._id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </button>
              <button
                onClick={() => handleDelete(idea._id)}
                className="ml-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No ideas analyzed yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
