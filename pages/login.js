import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import FormCard from "../components/layout/ui/FormCard";
import TextInput from "../components/layout/ui/Input";
import PrimaryButton from "../components/layout/ui/PrimaryButton";

import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { loginStudent, loginAdmin } = useAuth();

  const [mode, setMode] = useState("student");
  const [loading, setLoading] = useState(true);

  // Student fields
  const [name, setName] = useState("");
  const [studentPass, setStudentPass] = useState("");
  const [showStudentPass, setShowStudentPass] = useState(false);

  // Admin fields
  const [email, setEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [showAdminPass, setShowAdminPass] = useState(false);

  const [error, setError] = useState("");

  // Skeleton loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // -----------------------------------
    // STUDENT LOGIN
    // -----------------------------------
    if (mode === "student") {
      if (!name.trim() || !studentPass.trim()) {
        setError("Enter name and password.");
        return;
      }

      if (studentPass.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }

      const result = loginStudent(name, studentPass); // result = {ok: true/false}

      if (!result.ok) {
        setError(result.message || "Incorrect name or password.");
        return;
      }

      return router.push("/student/dashboard");
    }

    // -----------------------------------
    // ADMIN LOGIN
    // -----------------------------------
    if (!email || !adminPass) {
      setError("Enter admin email and password.");
      return;
    }

    const result = loginAdmin(email, adminPass);

    if (!result.ok) {
      setError("Incorrect admin credentials.");
      return;
    }

    router.push("/admin/dashboard");
  };

  // -------------------------
  // SKELETON UI
  // -------------------------
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>

          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <FormCard>
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
      <p className="text-gray-500 mb-6">Continue your learning journey</p>

      {/* MODE SWITCH */}
      <div className="relative flex bg-gray-200 dark:bg-gray-700 rounded-xl p-1 mb-6">
        <div
          className={`absolute h-full w-1/2 bg-indigo-600 rounded-xl transition-transform duration-300 
          ${mode === "student" ? "translate-x-0" : "translate-x-full"}`}
        ></div>

        <button
          onClick={() => setMode("student")}
          className={`relative z-10 w-1/2 py-2 font-medium ${mode === "student" ? "text-white" : "text-gray-700 dark:text-gray-200"
            }`}
        >
          Student
        </button>

        <button
          onClick={() => setMode("admin")}
          className={`relative z-10 w-1/2 py-2 font-medium ${mode === "admin" ? "text-white" : "text-gray-700 dark:text-gray-200"
            }`}
        >
          Admin
        </button>
      </div>

      {/* ERROR */}
      {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* STUDENT FORM */}
        {mode === "student" && (
          <>
            <div className="relative">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer w-full border p-3 rounded-xl dark:bg-gray-700 dark:text-white"
              />
              <label className="absolute left-3 top-3 text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-gray-300">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type={showStudentPass ? "text" : "password"}
                value={studentPass}
                onChange={(e) => setStudentPass(e.target.value)}
                className="peer w-full border p-3 rounded-xl dark:bg-gray-700 dark:text-white"
              />
              <label className="absolute left-3 top-3 text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-gray-300">
                Password
              </label>

              <span
                onClick={() => setShowStudentPass(!showStudentPass)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-gray-300"
              >
                {showStudentPass ? "👁️" : "🙈"}
              </span>
            </div>
          </>
        )}

        {/* ADMIN FORM */}
        {mode === "admin" && (
          <>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full border p-3 rounded-xl dark:bg-gray-700 dark:text-white"
              />
              <label className="absolute left-3 top-3 text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-gray-300">
                Admin Email
              </label>
            </div>

            <div className="relative">
              <input
                type={showAdminPass ? "text" : "password"}
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                className="peer w-full border p-3 rounded-xl dark:bg-gray-700 dark:text-white"
              />
              <label className="absolute left-3 top-3 text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-600 dark:text-gray-300">
                Admin Password
              </label>

              <span
                onClick={() => setShowAdminPass(!showAdminPass)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-gray-300"
              >
                {showAdminPass ? "👁️" : "🙈"}
              </span>
            </div>
          </>
        )}

        <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">
          Login
        </button>
      </form>

      {mode === "student" && (
        <p className="mt-5 text-sm text-center">
          Don’t have an account?
          <a href="/register" className="text-indigo-600 ml-1 font-medium">
            Sign Up
          </a>
        </p>
      )}
    </FormCard>
  );
}
