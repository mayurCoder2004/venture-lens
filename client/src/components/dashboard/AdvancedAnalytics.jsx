import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from "recharts";

const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];

const AdvancedAnalytics = ({ ideas }) => {
  if (!ideas?.length) return null;

  const scoreTrend = ideas.map((idea) => ({
    date: new Date(idea.createdAt).toLocaleDateString(),
    score: idea.score || 0,
  }));

  const categoryCount = ideas.reduce((acc, idea) => {
    const cat = idea.category || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const topIdeas = [...ideas]
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 5)
    .map((idea) => ({ name: idea.idea.slice(0, 20) + "...", score: idea.score }));

  const categoryData = Object.entries(categoryCount).map(([name, value]) => ({
    name,
    value,
  }));

  const monthlyCount = ideas.reduce((acc, idea) => {
    const month = new Date(idea.createdAt).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});
  const monthlyData = Object.entries(monthlyCount).map(([month, count]) => ({
    month,
    count,
  }));

  return (
    <div className="mt-12 grid lg:grid-cols-2 gap-8">
      {/* Score Trend */}
      <div className="shadow-md rounded-xl bg-white">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">📈 Average Score Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={scoreTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="shadow-md rounded-xl bg-white">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">🧩 Category Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Ideas */}
      <div className="shadow-md rounded-xl bg-white">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">🏆 Top Performing Ideas</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topIdeas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Analysis */}
      <div className="shadow-md rounded-xl bg-white">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">📅 Monthly Idea Analysis Count</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
