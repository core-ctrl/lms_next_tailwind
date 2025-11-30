import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function PasswordSettings() {
    const { changePassword } = useAuth();

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [msg, setMsg] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (newPass.length < 8) {
            setMsg("❌ New password must be at least 8 characters");
            return;
        }

        const ok = changePassword(oldPass, newPass);

        setMsg(ok ? "✅ Password updated!" : "❌ Old password incorrect");
    };

    return (
        <div className="max-w-xl mx-auto p-8 mt-10 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-6 dark:text-white">Change Password</h1>

            <form onSubmit={submit} className="space-y-5">
                <input
                    type="password"
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                    placeholder="Old Password"
                    className="w-full p-3 border rounded-xl dark:bg-gray-800 dark:text-white"
                />

                <input
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="New Password (min 8 chars)"
                    className="w-full p-3 border rounded-xl dark:bg-gray-800 dark:text-white"
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                    Update Password
                </button>

                {msg && <p className="text-center text-blue-600 mt-2">{msg}</p>}
            </form>
        </div>
    );
}
