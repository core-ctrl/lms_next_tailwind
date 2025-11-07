import { useState } from 'react'
import { useRouter } from 'next/router'   // ✅ import added

export default function CreateTest() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const router = useRouter()              // ✅ initialize router

  async function submit(e) {
    e.preventDefault()
    const tests = JSON.parse(localStorage.getItem('lms_tests') || '[]')
    const id = tests.length ? Math.max(...tests.map(t => t.id)) + 1 : 1
    tests.push({ id, title, description: desc })
    localStorage.setItem('lms_tests', JSON.stringify(tests))
    router.push('/admin/dashboard')       // ✅ now works fine
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create Test</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">
          Create Test
        </button>
      </form>
    </div>
  )
}
