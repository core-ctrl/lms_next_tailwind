import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="w-full shadow-sm border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur-md sticky top-0 z-50 transition">
            <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 select-none">
                    <div className="w-9 h-9 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
                        L
                    </div>
                    <span className="text-xl font-semibold dark:text-white">LMS Hub</span>
                </Link>

                {/* STUDENT LINKS */}
                {user && user.role === "student" && (
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-gray-200">
                        <Link href="/student/explore" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
                        <Link href="/student/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
                        <Link href="/student/collaboration" className="hover:text-blue-600 dark:hover:text-blue-400">Collaboration</Link>
                    </div>
                )}

                {/* ADMIN LINKS */}
                {user && user.role === "admin" && (
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-gray-200">
                        <Link href="/admin/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
                        <Link href="/admin/create-course" className="hover:text-blue-600 dark:hover:text-blue-400">Create Course</Link>
                        <Link href="/admin/create-test" className="hover:text-blue-600 dark:hover:text-blue-400">Create Test</Link>
                    </div>
                )}

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">

                    {/* DARK MODE TOGGLE */}
                    <button
                        onClick={toggleTheme}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm dark:text-gray-200"
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>

                    {/* IF LOGGED IN */}
                    {user ? (
                        <div className="flex items-center gap-3">

                            {/* PROFILE PHOTO / INITIAL */}
                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold select-none">
                                {user.photo ? (
                                    <img src={user.photo} className="w-9 h-9 rounded-full object-cover" />
                                ) : (
                                    user.name?.charAt(0)?.toUpperCase() || "U"
                                )}
                            </div>

                            {/* USER NAME */}
                            <span className="hidden md:block text-sm font-medium dark:text-gray-200">
                                {user.name || user.email}
                            </span>

                            {/* LOGOUT */}
                            <button
                                onClick={logout}
                                className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        /* LOGGED OUT */
                        <div className="flex items-center gap-3">
                            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                                Login
                            </Link>
                            <Link href="/register" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg dark:text-white">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
