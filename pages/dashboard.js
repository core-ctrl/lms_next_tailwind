import { useAuth } from '../context/AuthContext'
import Link from 'next/link'

export default function Dashboard(){
  const { user, logout } = useAuth()

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex gap-2 items-center">
          <span className="text-slate-600">Hello, {user?.name || 'Guest'}</span>
          <button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded">Logout</button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Your Enrollments</h3>
          <p className="text-slate-600">(This demo stores enrollments in Local Storage.)</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Profile</h3>
          <p className="text-slate-600">Name: {user?.name}</p>
        </div>
      </section>

      <div className="mt-6">
        <Link href="/"><a className="text-indigo-600">Back to courses</a></Link>
      </div>
    </div>
  )
}
