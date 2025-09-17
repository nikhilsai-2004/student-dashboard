'use client';

const Insights = () => {
  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Key Findings & Insights</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        <li><strong>Retention and Comprehension</strong> are the strongest predictors of assessment scores.</li>
        <li>There is a noticeable positive correlation between a student's <strong>attention level</strong> and their final score.</li>
        <li>Students can be broadly grouped into learning personas, helping to identify those who may need more support in specific cognitive areas.</li>
      </ul>
    </section>
  );
};

export default Insights;