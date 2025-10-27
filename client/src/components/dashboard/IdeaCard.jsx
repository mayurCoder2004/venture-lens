const IdeaCard = ({ idea, onDelete }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-purple-700 mb-2">
        {idea.idea || "Untitled Idea"}
      </h3>

      <div className="text-sm text-gray-600 mb-3">
        <p>
          <strong>Score:</strong> {idea.score || "N/A"}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(idea.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="mt-3 flex gap-3">
        <button
          onClick={() => (window.location.href = `/idea/${idea._id}`)}
          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </button>
        <button
          onClick={() => onDelete(idea._id)}
          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IdeaCard;
