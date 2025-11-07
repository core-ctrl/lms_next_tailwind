import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CourseDetail() {
  const router = useRouter()
  const { id } = router.query
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('lms_courses') || '[]')
    if (id) {
      const foundCourse = courses.find(c => String(c.id) === String(id))
      setCourse(foundCourse)
    }
  }, [id])

  // ✅ Helper function to handle all YouTube link types
  function convertYouTubeUrl(url) {
    try {
      if (url.includes('watch?v=')) {
        return url.replace('watch?v=', 'embed/')
      } else if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]
        return `https://www.youtube.com/embed/${id}`
      } else {
        return url
      }
    } catch {
      return url
    }
  }

  if (!course) return <div>Course not found.</div>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
      <p className="text-slate-600 mb-4">{course.description}</p>

      {course.resources && course.resources.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <div className="space-y-4">
            {course.resources.map((r, i) => (
              <div key={i} className="bg-white p-3 rounded shadow">
                {/* ✅ YouTube Embed */}
                {r.type === 'youtube' && (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      width="560"
                      height="315"
                      src={convertYouTubeUrl(r.src)}
                      title="YouTube video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* ✅ MP4 Video Player */}
                {r.type === 'mp4' && (
                  <video controls className="w-full">
                    <source src={r.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* ✅ PDF Resource */}
                {r.type === 'pdf' && (
                  <a
                    href={r.src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 underline"
                  >
                    Open PDF
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
