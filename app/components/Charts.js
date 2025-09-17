'use client';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const Charts = ({ data }) => {
  const avgScoresByClass = data.reduce((acc, student) => {
    if (!acc[student.class]) {
      acc[student.class] = { totalScore: 0, count: 0 };
    }
    acc[student.class].totalScore += student.assessment_score;
    acc[student.class].count += 1;
    return acc;
  }, {});

  const barChartData = Object.keys(avgScoresByClass).map(className => ({
    name: className,
    'Average Score': (avgScoresByClass[className].totalScore / avgScoresByClass[className].count).toFixed(2),
  }));

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-4 rounded-lg shadow h-96">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Attention vs. Assessment Score</h3>
        <ResponsiveContainer>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="attention" name="Attention" unit="%" />
            <YAxis type="number" dataKey="assessment_score" name="Score" unit="%" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Students" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
       <div className="bg-white p-4 rounded-lg shadow h-96">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Average Score by Class</h3>
         <ResponsiveContainer>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Average Score" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Charts;