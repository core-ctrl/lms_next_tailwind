import fs from 'fs'
import path from 'path'

const dataFile = path.resolve('./data/courses.json')

function readData(){
  try{
    const raw = fs.readFileSync(dataFile)
    return JSON.parse(raw)
  }catch(e){
    return []
  }
}

function writeData(data){
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
}

export default function handler(req, res){
  if(req.method === 'GET'){
    const data = readData()
    return res.status(200).json(data)
  }
  if(req.method === 'POST'){
    const body = req.body
    const data = readData()
    const id = data.length ? Math.max(...data.map(c=>c.id)) + 1 : 1
    const newItem = { id, title: body.title || 'Untitled', description: body.description || '' }
    data.push(newItem)
    writeData(data)
    return res.status(201).json(newItem)
  }
  res.status(405).end()
}
