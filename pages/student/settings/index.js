import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function SettingsHome() {
    const { user } = useAuth();

    return (
        <div className="max-w-3xl mx-auto p-8 mt-10 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">Account Settings</h1>

            <div className="grid gap-4">
                <Link href="/student/settings/profile" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <h2 className="text-xl font-semibold dark:text-white">Edit Profile</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Update your name, email, and profile picture.</p>
                </Link>

                <Link href="/student/settings/password" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <h2 className="text-xl font-semibold dark:text-white">Change Password</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Update your account security.</p>
                </Link>

                <Link href="/student/settings/notifications" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <h2 className="text-xl font-semibold dark:text-white">Notification Settings</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Control what updates you receive.</p>
                </Link>

                <Link href="/student/settings/delete" className="block p-4 rounded-xl bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800">
                    <h2 className="text-xl font-semibold text-red-600 dark:text-red-300">Delete Account</h2>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">Permanently remove your account.</p>
                </Link>
            </div>
        </div>
    );
}
