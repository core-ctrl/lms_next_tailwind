import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Profile() {
    const { user, updateStudentProfile } = useAuth();

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [photo, setPhoto] = useState(null);
    const [msg, setMsg] = useState("");

    function save(e) {
        e.preventDefault();

        const photoURL = photo
            ? URL.createObjectURL(photo)
            : user?.photo || "";

        updateStudentProfile({ name, email, photo: photoURL });

        setMsg("Profile updated successfully!");
    }

    return (
        <div className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow mt-10">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Edit Profile</h1>

            <form onSubmit={save} className="space-y-5">

                {/* Name */}
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-xl"
                />

                {/* Email */}
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 border rounded-xl"
                />

                {/* Upload Photo */}
                <input
                    type="file"
                    onChange={e => setPhoto(e.target.files[0])}
                    className="w-full p-3 border rounded-xl"
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
                    Save Changes
                </button>

                {msg && <p className="text-center text-green-600 pt-2">{msg}</p>}
            </form>
        </div>
    );
}
