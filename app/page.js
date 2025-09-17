import studentData from '../data/student_data_with_personas.json';
import Overview from './components/Overview';
import Charts from './components/Charts';
import StudentTable from './components/StudentTable';
import Insights from './components/Insights';

export default function Home() {
  return (
    <main className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Cognitive Skills & Student Performance Dashboard 📊
        </h1>
        <p className="text-gray-600 mt-1">
          An analysis of student skills and academic outcomes.
        </p>
      </header>

      <div className="space-y-8">
        <Overview data={studentData} />
        <Charts data={studentData} />
        <Insights />
        <StudentTable data={studentData} />
      </div>
    </main>
  );
}