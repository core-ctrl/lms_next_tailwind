import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function Tests() {
    const { role } = useAuth()
    const [tests, setTests] = useState([])

    // ✅ Load from LocalStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('lms_tests') || '[]')
        setTests(stored)
    }, [])

    // ✅ Delete (Admin only)
    const handleDelete = (id) => {
        if (confirm('Delete this test?')) {
            const updated = tests.filter((t) => t.id !== id)
            setTests(updated)
            localStorage.setItem('lms_tests', JSON.stringify(updated))
            alert('Test deleted successfully!')
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Tests</h1>

            {tests.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tests.map((t) => (
                        <div key={t.id} className="bg-white p-4 rounded shadow border flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-indigo-700 mb-2">{t.title}</h2>
                                <p className="text-gray-600 mb-3">{t.description}</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <Link
                                    href={`/test/${t.id}`}
                                    className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
                                >
                                    View
                                </Link>

                                {role === 'admin' && (
                                    <button
                                        onClick={() => handleDelete(t.id)}
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
                <p className="text-center text-gray-500 mt-10">No tests available.</p>
            )}
        </div>
    )
}
