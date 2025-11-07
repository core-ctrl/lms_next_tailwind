import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let cancelled = false
    setLoading(true)
    axios.get(url).then(res=>{
      if(cancelled) return
      setData(res.data)
      setLoading(false)
    }).catch(err=>{
      if(cancelled) return
      setError(err)
      setLoading(false)
    })
    return ()=> cancelled = true
  },[url])

  return { data, loading, error }
}
