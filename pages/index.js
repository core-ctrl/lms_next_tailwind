import Link from 'next/link'
import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react'

export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    const c = JSON.parse(localStorage.getItem('lms_courses')||'[]')
    setCourses(c)
  },[])

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">LMS - Next.js + Tailwind</h1>
        <p className="text-slate-600">A sample fully-functional LMS frontend for your SDP project.</p>
      </header>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Courses</h2>
          <Link href="/create" className="px-3 py-1 bg-indigo-600 text-white rounded">Create Course</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>
    </div>
  )
}
