import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router'

export default function ChangePassword(){
  const { user, changeAdminPassword } = useAuth()
  const [pass, setPass] = useState('')
  const router = useRouter()

  function submit(e){
    e.preventDefault()
    if(!pass) return alert('Enter new password')
    const res = changeAdminPassword(pass)
    if(res.ok){ alert('Password changed'); router.push('/admin/dashboard') }
    else alert('Could not change')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Change Admin Password</h2>
      <form onSubmit={submit} className="space-y-3">
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="New password" className="w-full p-2 border rounded" />
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Change Password</button>
      </form>
    </div>
  )
}
