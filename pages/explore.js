import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCourses } from '../store/slices/coursesSlice'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function Explore() {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses.items)
    const { role } = useAuth()

    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('All')
    const [filtered, setFiltered] = useState([])

    // ✅ Load from LocalStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('lms_courses') || '[]')
        dispatch(setCourses(stored))
    }, [dispatch])

    // ✅ Filter logic
    useEffect(() => {
        let results = courses
        if (category !== 'All') {
            results = results.filter(
                (c) => c.category?.toLowerCase() === category.toLowerCase()
            )
        }
        if (searchTerm.trim()) {
            results = results.filter(
                (c) =>
                    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        setFiltered(results)
    }, [courses, category, searchTerm])

    const uniqueCategories = ['All', ...new Set(courses.map((c) => c.category || 'Uncategorized'))]

    // ✅ Delete Handler (Admin only)
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this course?')) {
            const updated = courses.filter((c) => c.id !== id)
            dispatch(setCourses(updated))
            localStorage.setItem('lms_courses', JSON.stringify(updated))
            alert('Course deleted successfully!')
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
                Explore Courses
            </h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2 border p-2 rounded"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 rounded"
                >
                    {uniqueCategories.map((cat, i) => (
                        <option key={i} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Course Grid */}
            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white border rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-xl font-semibold mb-2 text-indigo-700">
                                    {course.title}
                                </h2>
                                <p className="text-gray-600 mb-3">{course.description}</p>
                                <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
                                    {course.category || 'Uncategorized'}
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-between items-center">
                                <Link
                                    href={`/course/${course.id}`}
                                    className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
                                >
                                    View
                                </Link>

                                {role === 'admin' && (
                                    <button
                                        onClick={() => handleDelete(course.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No courses found. Try adjusting your filters.
                </p>
            )}
        </div>
    )
}
