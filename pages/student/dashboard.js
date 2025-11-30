import Sidebar from "@/components/layout/Sidebar";
import courses from "@/data/courses.json";
import tests from "@/data/tests.json";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function StudentDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex bg-gray-50">

      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.name || "Student"} 👋</h1>
        <p className="text-gray-600 mt-1">Here’s your learning summary</p>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Enrolled Courses</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Completed Tests</h3>
            <p className="text-3xl font-bold mt-2">{tests.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Total Certificates</h3>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>
        </div>

        {/* Recent Courses */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Recent Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">{course.title}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                Continue →
              </button>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
