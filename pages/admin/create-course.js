import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function CreateCourse(){
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [resources, setResources] = useState([]) // {type, src, name}
  const [file, setFile] = useState(null)
  const router = useRouter()

  function addYoutube(){ const url = prompt('Paste YouTube URL'); if(url) setResources(r=>[...r,{type:'youtube',src:url,name:'YouTube'}]) }
  function pickFile(e){ setFile(e.target.files[0]) }

  async function uploadFileToServer(file){
    const reader = new FileReader()
    return new Promise((resolve,reject)=>{
      reader.onload = async () => {
        const base = reader.result.split(',')[1]
        const resp = await axios.post('/api/upload', { filename: Date.now() + '_' + file.name, contentBase64: base })
        resolve(resp.data.url)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  async function submit(e){
    e.preventDefault()
    let resList = resources.slice()
    if(file){
      try{
        const url = await uploadFileToServer(file)
        const type = file.type.includes('video') ? 'mp4' : 'pdf'
        resList.push({ type, src: url, name: file.name })
      }catch(e){ alert('Upload failed'); return }
    }
    const courses = JSON.parse(localStorage.getItem('lms_courses')||'[]')
    const id = courses.length ? Math.max(...courses.map(c=>c.id))+1 : 1
    courses.push({ id, title, description: desc, resources: resList })
    localStorage.setItem('lms_courses', JSON.stringify(courses))
    router.push('/admin/dashboard')
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create Course</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" />
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <button type="button" onClick={addYoutube} className="px-3 py-1 border rounded">Add YouTube URL</button>
          <input type="file" onChange={pickFile} />
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-2 space-y-1">
            {resources.map((r,i)=>(<li key={i}>{r.name || r.src}</li>))}
          </ul>
        </div>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Create</button>
      </form>
    </div>
  )
}
