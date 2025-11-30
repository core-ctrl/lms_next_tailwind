import Sidebar from "@/components/layout/Sidebar";

export default function Collaboration() {
    return (
        <div className="min-h-screen flex bg-gray-50">

            <Sidebar />

            <main className="flex-1 p-8">

                <h1 className="text-3xl font-bold">Collaboration Form</h1>
                <p className="text-gray-600 mt-1">Submit project ideas or request help.</p>

                <div className="bg-white p-8 rounded-xl shadow mt-8 max-w-xl">

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-lg"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded-lg"
                        />

                        <textarea
                            placeholder="Describe your project..."
                            className="w-full p-3 border rounded-lg h-32"
                        />

                        <button
                            type="submit"
                            className="px-5 py-3 bg-blue-600 text-white rounded-lg"
                        >
                            Submit Request
                        </button>
                    </form>

                </div>

            </main>

        </div>
    );
}
