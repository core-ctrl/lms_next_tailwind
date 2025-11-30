import { useRouter } from "next/router";
import courses from "@/data/courses.json";

export default function CourseDetails() {
  const router = useRouter();
  const { id } = router.query;

  const course = courses.find((c) => c.id === id);

  if (!course) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>

      <div className="bg-white mt-8 p-8 rounded-xl shadow space-y-3">
        {course.tags?.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-100 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => router.push(`/course/register?id=${course.id}`)}
        className="btn-primary mt-8"
      >
        Register for this Course
      </button>

    </div>
  );
}
