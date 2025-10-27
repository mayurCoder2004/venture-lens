const DashboardStats = ({ ideas }) => {
  if (!ideas.length) return null;

  const avgScore = (
    ideas.reduce((sum, idea) => sum + (idea.score || 0), 0) / ideas.length
  ).toFixed(1);

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-100 text-blue-800 rounded-lg p-4 text-center shadow">
        <p className="text-lg font-bold">{ideas.length}</p>
        <p className="text-sm">Ideas Analyzed</p>
      </div>
      <div className="bg-green-100 text-green-800 rounded-lg p-4 text-center shadow">
        <p className="text-lg font-bold">{avgScore}</p>
        <p className="text-sm">Average Viability Score</p>
      </div>
      <div className="bg-purple-100 text-purple-800 rounded-lg p-4 text-center shadow">
        <p className="text-lg font-bold">AI & Tech</p>
        <p className="text-sm">Most Common Category</p>
      </div>
    </div>
  );
};

export default DashboardStats;
