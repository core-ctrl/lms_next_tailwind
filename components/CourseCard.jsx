import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <p className="text-slate-600 mt-2">{course.description}</p>

      <div className="mt-4 flex gap-2">
        <Link href={`/course/${course.id}`} className="px-3 py-1 bg-indigo-600 text-white rounded">View</Link>
        <button className="px-3 py-1 border rounded text-sm">Preview</button>
      </div>
    </div>
  )
}
