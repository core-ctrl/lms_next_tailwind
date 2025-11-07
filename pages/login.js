import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const [mode, setMode] = useState('student') // student or admin
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loginStudent, loginAdmin } = useAuth()
  const router = useRouter()

  async function submit(e){
    e.preventDefault()
    if(mode === 'student'){
      if(!name) return alert('Enter name')
      loginStudent({ name })
      router.push('/student/dashboard')
    }else{
      const res = loginAdmin(email, password)
      if(res.ok) router.push('/admin/dashboard')
      else alert(res.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <div className="mb-4 flex gap-2">
        <button onClick={()=>setMode('student')} className={mode==='student'? 'px-3 py-1 bg-indigo-600 text-white rounded' : 'px-3 py-1 border rounded'}>Student</button>
        <button onClick={()=>setMode('admin')} className={mode==='admin'? 'px-3 py-1 bg-indigo-600 text-white rounded' : 'px-3 py-1 border rounded'}>Admin</button>
      </div>

      <form onSubmit={submit} className="space-y-4">
        {mode==='student' ? (
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full p-2 border rounded" />
        ) : (
          <div className="space-y-2">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Admin email" className="w-full p-2 border rounded" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
          </div>
        )}

        <div className="flex gap-2">
          <button className="px-3 py-1 bg-indigo-600 text-white rounded">Login</button>
        </div>
      </form>
    </div>
  )
}
