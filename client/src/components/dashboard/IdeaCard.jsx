const IdeaCard = ({ idea, onDelete }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{idea.title || "Untitled Idea"}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{idea.summary}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Score: {idea.score || "N/A"}</span>
        <span>{new Date(idea.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => window.location.href = `/idea/${idea._id}`}
          className="text-blue-600 hover:underline"
        >
          View Details
        </button>
        <button
          onClick={() => onDelete(idea._id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IdeaCard;
