import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load session on refresh
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Save login session
  const saveSession = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  // --------------------------
  // STUDENT REGISTER
  // --------------------------
  const registerStudent = (name, password) => {
    if (!name || !password) {
      return { ok: false, message: "All fields are required" };
    }

    // Strong password rule
    const rule = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!rule.test(password)) {
      return {
        ok: false,
        message: "Password must be 8+ chars, 1 uppercase, 1 number.",
      };
    }

    const newStudent = {
      name,
      password,
      role: "student",
    };

    // Save student account separately
    localStorage.setItem("studentAccount", JSON.stringify(newStudent));

    return { ok: true };
  };

  // --------------------------
  // STUDENT LOGIN
  // --------------------------
  const loginStudent = (name, password) => {
    const saved = JSON.parse(localStorage.getItem("studentAccount"));

    if (!saved) {
      return { ok: false, message: "No student found. Please sign up." };
    }

    if (saved.name !== name || saved.password !== password) {
      return { ok: false, message: "Incorrect name or password." };
    }

    // Save session
    saveSession(saved);
    return { ok: true };
  };

  // --------------------------
  // ADMIN LOGIN
  // --------------------------
  const loginAdmin = (email, password) => {
    if (email === "admin@lms.com" && password === "Admin123") {
      const admin = { email, role: "admin" };
      saveSession(admin);
      return { ok: true };
    }
    return { ok: false, message: "Invalid admin credentials." };
  };

  // --------------------------
  // LOGOUT
  // --------------------------
  const logout = () => {
    localStorage.removeItem("user"); // CLEAR ONLY ACTIVE SESSION
    setUser(null);

    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerStudent,
        loginStudent,
        loginAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export const useAuth = () => useContext(AuthContext);
