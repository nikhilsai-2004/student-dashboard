'use client';
import { useState, useMemo } from 'react';

const StudentTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  return (
    <section className="bg-black p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-black-700">Student Details</h3>
      <input
        type="text"
        placeholder="Search by student name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Class</th>
              <th className="p-2">Score</th>
              <th className="p-2">Retention</th>
              <th className="p-2">Attention</th>
              <th className="p-2">Focus</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, 10).map((student) => ( // Show first 10 results
              <tr key={student.student_id} className="border-b">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.class}</td>
                <td className="p-2 font-bold">{student.assessment_score}</td>
                <td className="p-2">{student.retention}</td>
                <td className="p-2">{student.attention}</td>
                <td className="p-2">{student.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentTable;