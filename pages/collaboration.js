import { useState } from 'react'

export default function Collaboration() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Option 1: Just show success message
        setSubmitted(true)

        // Option 2 (optional): Send to a mail service / Google Form
        // You can integrate EmailJS, Formspree, or Google Forms easily here
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] text-center">
                <h2 className="text-2xl font-semibold text-green-600 mb-2">✅ Thank you!</h2>
                <p className="text-gray-600">Your collaboration request has been received.</p>
            </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">🤝 Collaborate with Us</h2>
            <p className="text-gray-600 text-center mb-6">
                Interested in partnering, mentoring, or sharing ideas? Fill the form below:
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how you’d like to collaborate"
                    required
                    className="w-full border p-2 rounded h-28 focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
