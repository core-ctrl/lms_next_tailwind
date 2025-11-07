import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

// default admin stored in localStorage under 'lms_admin'
const DEFAULT_ADMIN = { email: 'admin@lms.com', password: 'admin123' }

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(()=>{
    // load auth
    try{
      const raw = localStorage.getItem('lms_auth')
      if(raw){
        const a = JSON.parse(raw)
        setUser(a.user)
        setRole(a.role)
      }
      // ensure admin creds exist
      const adm = localStorage.getItem('lms_admin')
      if(!adm) localStorage.setItem('lms_admin', JSON.stringify(DEFAULT_ADMIN))
    }catch(e){}
  },[])

  function loginStudent(payload){
    const auth = { role: 'student', user: payload }
    setUser(payload)
    setRole('student')
    localStorage.setItem('lms_auth', JSON.stringify(auth))
  }

  function loginAdmin(email, password){
    try{
      const adm = JSON.parse(localStorage.getItem('lms_admin') || JSON.stringify(DEFAULT_ADMIN))
      if(email === adm.email && password === adm.password){
        const auth = { role: 'admin', user: { email } }
        setUser({ email })
        setRole('admin')
        localStorage.setItem('lms_auth', JSON.stringify(auth))
        return { ok: true }
      }else{
        return { ok: false, message: 'Invalid credentials' }
      }
    }catch(e){
      return { ok: false, message: 'Error reading admin data' }
    }
  }

  function logout(){
    setUser(null); setRole(null)
    localStorage.removeItem('lms_auth')
  }

  function changeAdminPassword(newPass){
    try{
      const adm = JSON.parse(localStorage.getItem('lms_admin') || JSON.stringify(DEFAULT_ADMIN))
      adm.password = newPass
      localStorage.setItem('lms_admin', JSON.stringify(adm))
      return { ok: true }
    }catch(e){
      return { ok: false }
    }
  }

  return (
    <AuthContext.Provider value={{ user, role, loginStudent, loginAdmin, logout, changeAdminPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
