export default function TestCard({ test }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{test.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{test.description}</p>

            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                Start Test →
            </button>
        </div>
    );
}
