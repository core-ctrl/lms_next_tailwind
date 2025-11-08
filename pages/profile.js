import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

export default function Profile() {
    const router = useRouter()
    const { user, setUser, logout } = useAuth()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('/default-avatar.png')

    // Load saved profile
    useEffect(() => {
        if (user) {
            setName(user.name || '')
            const savedPic = localStorage.getItem(`profile_pic_${user.email}`)
            if (savedPic) setProfilePic(savedPic)
        }
    }, [user])

    // Handle profile picture upload
    const handlePicChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePic(reader.result)
                if (user?.email)
                    localStorage.setItem(`profile_pic_${user.email}`, reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    // Handle profile updates
    const handleUpdate = (e) => {
        e.preventDefault()
        const updatedUser = { ...user, name }
        setUser(updatedUser)
        localStorage.setItem('lms_user', JSON.stringify(updatedUser))

        if (password.trim()) {
            localStorage.setItem(`password_${user.email}`, password)
            alert('Password updated successfully!')
        }

        alert('Profile updated!')
    }

    // Handle logout
    const handleLogout = () => {
        logout()
        router.push('/login')
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-600 dark:text-gray-300">
                    Please log in to view your profile.
                </p>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-8 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-400 text-center">
                My Profile
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 items-center">
                {/* Profile Picture */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                        <Image
                            src={profilePic}
                            alt="Profile Picture"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    </div>
                    <label className="cursor-pointer px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                        Change Photo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePicChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Profile Info */}
                <form
                    onSubmit={handleUpdate}
                    className="flex-1 flex flex-col gap-4 w-full"
                >
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={user.email}
                            disabled
                            className="w-full border rounded p-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Change Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-medium"
                    >
                        Save Changes
                    </button>
                </form>
            </div>

            {/* Logout Button */}
            <div className="text-center mt-8">
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
