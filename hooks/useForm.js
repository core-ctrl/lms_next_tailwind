import { useState } from "react";

export const useForm = (initial) => {
    const [form, setForm] = useState(initial);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return { form, handleChange, setForm };
};
