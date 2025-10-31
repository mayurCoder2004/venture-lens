import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import { TrendingUp, Target, Trophy, Calendar, PieChartIcon } from "lucide-react";

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

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-3">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm text-slate-600 dark:text-slate-400">
              {entry.name}: <span className="font-bold" style={{ color: entry.color }}>{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          Advanced Analytics
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Deep insights into your idea portfolio and performance metrics
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Score Trend */}
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden">
          {/* Top gradient accent */}
          <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Average Score Trend
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Track your ideas performance over time
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={scoreTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#64748b"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#64748b"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>

        {/* Category Distribution */}
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden">
          {/* Top gradient accent */}
          <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl flex items-center justify-center">
                <PieChartIcon className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Category Distribution
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Breakdown of ideas by category
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 flex justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={true}
                  >
                    {categoryData.map((_, i) => (
                      <Cell 
                        key={i} 
                        fill={COLORS[i % COLORS.length]}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>

        {/* Top Performing Ideas */}
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden">
          {/* Top gradient accent */}
          <div className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-800/30 rounded-xl flex items-center justify-center">
                <Trophy className="text-yellow-600 dark:text-yellow-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Top Performing Ideas
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your highest-scoring concepts
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topIdeas}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b"
                    style={{ fontSize: '11px' }}
                    angle={-15}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    stroke="#64748b"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="score" 
                    fill="#8B5CF6"
                    radius={[8, 8, 0, 0]}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>

        {/* Monthly Analysis */}
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden">
          {/* Top gradient accent */}
          <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-800/30 rounded-xl flex items-center justify-center">
                <Calendar className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Monthly Idea Count
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Analysis activity by month
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#64748b"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#64748b"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    fill="#10B981"
                    radius={[8, 8, 0, 0]}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;