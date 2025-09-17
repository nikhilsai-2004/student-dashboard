'use client';

const Overview = ({ data }) => {
  const averageScore = Math.round(data.reduce((acc, s) => acc + s.assessment_score, 0) / data.length);
  const averageAttention = Math.round(data.reduce((acc, s) => acc + s.attention, 0) / data.length);
  const averageRetention = Math.round(data.reduce((acc, s) => acc + s.retention, 0) / data.length);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Average Score</h3>
        <p className="text-3xl font-bold text-blue-600">{averageScore}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Average Attention</h3>
        <p className="text-3xl font-bold text-green-600">{averageAttention}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Average Retention</h3>
        <p className="text-3xl font-bold text-purple-600">{averageRetention}%</p>
      </div>
    </section>
  );
};

export default Overview;