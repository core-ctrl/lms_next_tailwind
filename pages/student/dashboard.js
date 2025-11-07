import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Link from 'next/link'

export default function StudentDashboard(){
  const { user, logout } = useAuth()
  const [courses, setCourses] = useState([])
  const [tests, setTests] = useState([])

  useEffect(()=>{
    const c = JSON.parse(localStorage.getItem('lms_courses')||'[]')
    const t = JSON.parse(localStorage.getItem('lms_tests')||'[]')
    setCourses(c); setTests(t)
  },[])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Student Dashboard</h2>
        <div className="flex gap-2 items-center">
          <span className="text-slate-600">Hello, {user?.name}</span>
          <button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded">Logout</button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Courses ({courses.length})</h3>
          <ul className="space-y-3">
            {courses.map(c=> (
              <li key={c.id} className="border p-3 rounded">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="text-slate-600">{c.description}</p>
                <div className="mt-2 flex gap-2">
                  <Link href={`/course/${c.id}`} className="px-3 py-1 bg-indigo-600 text-white rounded">Open</Link>
                </div>
                {c.resources && c.resources.length>0 && (
                  <div className="mt-3">
                    <h5 className="font-semibold">Resources</h5>
                    <ul className="space-y-2">
                      {c.resources.map((r,i)=>(
                        <li key={i} className="text-slate-700">
                          {r.type === 'youtube' && <a href={r.src} target="_blank" rel="noreferrer" className="text-indigo-600">YouTube: {r.src}</a>}
                          {r.type === 'mp4' && <a href={r.src} target="_blank" rel="noreferrer" className="text-indigo-600">Video: {r.name}</a>}
                          {r.type === 'pdf' && <a href={r.src} target="_blank" rel="noreferrer" className="text-indigo-600">PDF: {r.name}</a>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Tests ({tests.length})</h3>
          <ul className="space-y-2">
            {tests.map(t=> (
              <li key={t.id} className="border p-3 rounded">
                <h4 className="font-semibold">{t.title}</h4>
                <p className="text-slate-600">{t.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
