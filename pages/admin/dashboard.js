import Sidebar from "@/components/layout/Sidebar";
import courses from "@/data/courses.json";
import tests from "@/data/tests.json";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      <Sidebar isAdmin />

      <main className="flex-1 p-8">

        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage courses, tests, and users</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg">Total Courses</h2>
            <p className="text-4xl font-bold mt-3">{courses.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg">Total Tests</h2>
            <p className="text-4xl font-bold mt-3">{tests.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg">Registered Users</h2>
            <p className="text-4xl font-bold mt-3">12</p>
          </div>
        </div>

      </main>
    </div>
  );
}
