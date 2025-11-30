import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/layout/ui/Card";
import defaultCourses from "@/data/courses.json";

export default function Explore() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        // Ensure code runs ONLY in browser
        if (typeof window === "undefined") return;

        const user = JSON.parse(localStorage.getItem("user"));

        // If no user → redirect
        if (!user) {
            window.location.href = "/login";
            return;
        }

        // Mark auth as valid
        setAuthChecked(true);

        // Load admin-created courses
        const created = JSON.parse(localStorage.getItem("courses") || "[]");

        // Merge static + dynamic
        setCourses([...defaultCourses, ...created]);

        // Show skeleton then content
        setTimeout(() => setLoading(false), 500);
    }, []);

    // ------------------------
    // PREVENT UI RENDER UNTIL AUTH CHECK FINISHES
    // ------------------------
    if (!authChecked) return null;

    // ------------------------
    // SKELETON LOADING
    // ------------------------
    if (loading) {
        return (
            <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
                <Sidebar />
                <main className="flex-1 p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow animate-pulse"
                        >
                            <div className="h-36 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4"></div>
                            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                            <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
                        </div>
                    ))}
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition">
            <Sidebar />

            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold dark:text-white">Explore Courses</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Find the best courses to boost your skills.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                    {courses.map((course) => (
                        <Card key={course.id} className="p-5">

                            {/* Thumbnail */}
                            <div className="h-36 rounded-xl overflow-hidden shadow bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                {course.thumbnail ? (
                                    <img
                                        src={course.thumbnail}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-5xl">📘</span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold mt-3 dark:text-white">
                                {course.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                                {course.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {course.tags?.slice(0, 3).map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>

                            {/* Indicators */}
                            <div className="flex gap-4 mt-3 text-sm dark:text-gray-300">
                                {course.video && <span>🎬 Video Included</span>}
                                {course.testURL && <span>📝 Test Available</span>}
                            </div>

                            {/* Buttons */}
                            <div className="mt-5 flex justify-between">
                                <Link
                                    href={`/course/${course.id}`}
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Details →
                                </Link>

                                <Link
                                    href={`/course/register?id=${course.id}`}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm shadow hover:bg-blue-700"
                                >
                                    Enroll
                                </Link>
                            </div>

                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
