import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Link from 'next/link'

export default function AdminDashboard(){
  const { user, logout } = useAuth()
  const [courses, setCourses] = useState([])
  const [tests, setTests] = useState([])

  useEffect(()=>{
    try{
      const c = JSON.parse(localStorage.getItem('lms_courses')||'[]')
      const t = JSON.parse(localStorage.getItem('lms_tests')||'[]')
      setCourses(c); setTests(t)
    }catch(e){}
  },[])

  function refresh(){ // reload from storage
    const c = JSON.parse(localStorage.getItem('lms_courses')||'[]')
    const t = JSON.parse(localStorage.getItem('lms_tests')||'[]')
    setCourses(c); setTests(t)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <div className="flex gap-2 items-center">
          <span className="text-slate-600">Admin: {user?.email}</span>
          <button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded">Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Courses ({courses.length})</h3>
          <Link href="/admin/create-course" className="px-3 py-1 bg-indigo-600 text-white rounded">Create Course</Link>
          <ul className="mt-3 space-y-2">
            {courses.map(c=> <li key={c.id} className="text-slate-700">{c.title}</li>)}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Tests ({tests.length})</h3>
          <Link href="/admin/create-test" className="px-3 py-1 bg-indigo-600 text-white rounded">Create Test</Link>
          <ul className="mt-3 space-y-2">
            {tests.map(t=> <li key={t.id} className="text-slate-700">{t.title}</li>)}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Admin Settings</h3>
          <Link href="/admin/change-password" className="px-3 py-1 border rounded">Change Password</Link>
          <div className="mt-3">
            <button onClick={refresh} className="px-3 py-1 bg-slate-200 rounded">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  )
}
