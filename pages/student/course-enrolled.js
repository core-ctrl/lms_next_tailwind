import Sidebar from "@/components/layout/Sidebar";
import courses from "@/data/courses.json";

export default function EnrolledCourses() {
    return (
        <div className="min-h-screen flex bg-gray-50">

            <Sidebar />

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Your Enrolled Courses</h1>
                <p className="text-gray-600 mt-1">Courses you have registered for.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {courses.slice(0, 2).map((course) => (
                        <div
                            key={course.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-bold">{course.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{course.description}</p>

                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                                Continue Learning →
                            </button>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
}
