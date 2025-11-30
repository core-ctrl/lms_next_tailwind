import Link from "next/link";

export default function CourseCard({ course }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition">
            <div className="h-36 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                <span className="text-5xl">📘</span>
            </div>

            <h3 className="text-lg font-bold">{course.title}</h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{course.description}</p>

            <div className="mt-4 flex justify-between">
                <Link href={`/course/${course.id}`} className="text-blue-600 hover:underline">
                    Details →
                </Link>
                <Link
                    href={`/course/register?id=${course.id}`}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg"
                >
                    Enroll
                </Link>
            </div>
        </div>
    );
}
