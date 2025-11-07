import fs from 'fs'
import path from 'path'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { filename, contentBase64 } = req.body || {}
  if(!filename || !contentBase64) return res.status(400).json({ error: 'Missing data' })
  const dest = path.resolve('./public/uploads/'+filename)
  try{
    const buffer = Buffer.from(contentBase64, 'base64')
    fs.writeFileSync(dest, buffer)
    return res.status(200).json({ ok: true, url: '/uploads/'+filename })
  }catch(e){
    return res.status(500).json({ error: 'Could not write file', detail: String(e) })
  }
}
