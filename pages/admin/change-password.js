import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AdminChangePassword() {
  const { adminPassword, updateAdminPassword } = useAuth();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [msg, setMsg] = useState("");

  function update(e) {
    e.preventDefault();
    setMsg("");

    if (oldPass !== adminPassword) {
      return setMsg("❌ Old password incorrect");
    }
    if (newPass.length < 8) {
      return setMsg("❌ Password must be ≥ 8 characters");
    }
    if (newPass !== confirmPass) {
      return setMsg("❌ Passwords do not match");
    }

    updateAdminPassword(newPass);
    setMsg("✅ Password updated!");
  }

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Admin Change Password
      </h1>

      <form onSubmit={update} className="space-y-4">
        <input type="password" placeholder="Old Password"
          onChange={e => setOldPass(e.target.value)}
          className="w-full p-2 border rounded" />

        <input type="password" placeholder="New Password"
          onChange={e => setNewPass(e.target.value)}
          className="w-full p-2 border rounded" />

        <input type="password" placeholder="Confirm Password"
          onChange={e => setConfirmPass(e.target.value)}
          className="w-full p-2 border rounded" />

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Update
        </button>

        {msg && <p className="text-center mt-2">{msg}</p>}
      </form>
    </div>
  );
}
