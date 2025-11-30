import { useState } from "react";
import { useRouter } from "next/router";

import FormCard from "../components/layout/ui/FormCard";
import TextInput from "../components/layout/ui/Input";
import PrimaryButton from "../components/layout/ui/PrimaryButton";

import { useAuth } from "../context/AuthContext";


export default function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const { registerStudent } = useAuth();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) return alert("Name is required");
        if (password.length < 8) return alert("Password must be at least 8 characters");

        const success = registerStudent(name, password);

        if (!success) {
            alert("Registration failed");
            return;
        }

        alert("Registration Successful!");
        router.push("/login");
    };

    return (
        <FormCard>
            <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-500 mb-6">Join LMS Hub and start learning</p>

            <form onSubmit={handleSubmit} className="space-y-4">

                <TextInput
                    label="Full Name"
                    value={name}
                    onChange={setName}      // ✔ CORRECT
                />

                <TextInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}  // ✔ CORRECT
                />

                <PrimaryButton text="Sign Up" />
            </form>

        </FormCard>
    );
}
