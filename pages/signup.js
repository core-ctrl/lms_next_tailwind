import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const { registerStudent } = useAuth();
    const router = useRouter();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // password requirements
    const validatePassword = (pw) => {
        if (pw.length < 8) return "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(pw)) return "Password must contain 1 uppercase letter.";
        if (!/[0-9]/.test(pw)) return "Password must contain 1 number.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!name.trim()) return setError("Name is required.");

        const passError = validatePassword(password);
        if (passError) return setError(passError);

        const success = registerStudent(name, password);
        if (success) {
            router.push("/login");
        } else {
            setError("Registration failed.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

                <h1 className="text-2xl font-bold mb-6">Student Sign Up</h1>

                {error && <p className="text-red-600 mb-3">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                    />

                    <input
                        type="password"
                        placeholder="Password (min 8 chars, 1 uppercase, 1 number)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-sm">
                    Already have an account?
                    <a href="/login" className="text-indigo-600 ml-1">Login</a>
                </p>
            </div>
        </div>
    );
}
