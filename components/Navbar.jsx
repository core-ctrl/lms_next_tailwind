import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function Navbar(){
  const { user, role } = useAuth()
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold">LMS</Link>
          <Link href="/" className="text-slate-600 hover:text-slate-900">Courses</Link>
          {role === 'admin' ? (
            <Link href="/admin/dashboard" className="text-slate-600 hover:text-slate-900">Dashboard</Link>
          ) : (
            <Link href="/student/dashboard" className="text-slate-600 hover:text-slate-900">Dashboard</Link>
          )}
        </div>
        <div>
          {user ? (
            <span className="text-slate-700">Hi, {user.name || user.email}</span>
          ) : (
            <Link href="/login" className="px-3 py-1 bg-indigo-600 text-white rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
