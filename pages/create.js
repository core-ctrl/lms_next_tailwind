import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'

export default function CreateCourse(){
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const { role } = useAuth()
  const router = useRouter()

  async function submit(e){
    e.preventDefault()
    if(role !== 'admin') return alert('Only admin can create courses from admin panel')
    const courses = JSON.parse(localStorage.getItem('lms_courses')||'[]')
    const id = courses.length ? Math.max(...courses.map(c=>c.id))+1 : 1
    courses.push({ id, title, description: desc, resources: [] })
    localStorage.setItem('lms_courses', JSON.stringify(courses))
    router.push('/admin/dashboard')
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create Course</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" />
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border rounded" />
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Save Course</button>
      </form>
    </div>
  )
}
