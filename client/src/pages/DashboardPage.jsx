import { useEffect, useState, useRef } from "react";
import { getIdeas, deleteIdea } from "../utils/api";
import DashboardStats from "../components/dashboard/DashboardStats";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Plus, Trash2, Eye, Lightbulb, Calendar, Loader2 } from "lucide-react";

const DashboardPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const hasFetched = useRef(false); // ✅ Prevent double fetch

  const fetchIdeas = async () => {
    try {
      console.log("Fetching ideas..."); // For debugging
      const res = await getIdeas();
      setIdeas(res.data);
    } catch (err) {
      console.error("Failed to fetch ideas", err);
      toast.error('Failed to fetch ideas. Please try again.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-slate-800">Delete this idea?</p>
        <p className="text-sm text-slate-600">This action cannot be undone.</p>
        <div className="flex gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              const loadingToast = toast.loading('Deleting idea...', {
                position: 'top-center',
              });

              try {
                await deleteIdea(id);
                setIdeas((prev) => prev.filter((idea) => idea._id !== id));
                toast.dismiss(loadingToast);
                toast.success('Idea deleted successfully! 🗑️', {
                  duration: 3000,
                  position: 'top-center',
                });
              } catch (err) {
                console.error("Error deleting idea:", err);
                toast.dismiss(loadingToast);
                toast.error('Failed to delete idea. Please try again.', {
                  duration: 4000,
                  position: 'top-center',
                });
              }
            }}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-medium rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'top-center',
      style: {
        background: '#fff',
        color: '#1e293b',
        padding: '16px',
        borderRadius: '12px',
        minWidth: '300px',
      },
    });
  };

  // ✅ Prevent duplication due to React Strict Mode
  useEffect(() => {
    if (!hasFetched.current) {
      fetchIdeas();
      hasFetched.current = true;
    }
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
          <Loader2 className="relative text-blue-600 dark:text-blue-400 animate-spin" size={48} />
        </div>
        <p className="mt-6 text-lg font-medium text-slate-700 dark:text-slate-300">
          Loading your dashboard...
        </p>
      </div>
    );

  return (
    <>
      <Toaster 
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: { style: { background: '#10b981' } },
          error: { style: { background: '#ef4444' } },
          loading: { style: { background: '#3b82f6' } },
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-8 px-4">
        <div className="max-w-7xl mx-auto mt-20">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
                  Your Dashboard
                </h1>
              </div>
              <p className="text-slate-600 dark:text-slate-400 ml-15">
                Track and manage all your validated startup ideas
              </p>
            </div>
            <button
              onClick={() => navigate("/analyze")}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Plus size={20} />
              <span>New Analysis</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <DashboardStats ideas={ideas} />
          </div>

          {/* Ideas Grid Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Your Ideas
            </h2>
          </div>

          {ideas.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea) => (
                <div
                  key={idea._id}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 p-6 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg mb-4">
                      <Lightbulb className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>

                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {idea.idea || "Untitled Idea"}
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                      <Calendar size={16} />
                      <span>{new Date(idea.createdAt).toLocaleDateString()}</span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate(`/idea/${idea._id}`)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        <Eye size={18} />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => handleDelete(idea._id)}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-20"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-blue-600 dark:text-blue-400" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                No Ideas Yet
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-center max-w-md">
                Start your entrepreneurial journey by analyzing your first startup idea
              </p>
              <button
                onClick={() => navigate("/analyze")}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Plus size={20} />
                <span>Analyze Your First Idea</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
