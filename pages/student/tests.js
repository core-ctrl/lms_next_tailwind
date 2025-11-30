import Link from "next/link";
import tests from "@/data/tests.json";

export default function Tests() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Tests</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tests.map((t) => (
                    <div key={t.id} className="p-6 bg-white shadow rounded-xl">
                        <h2 className="text-xl font-semibold">{t.title}</h2>

                        <p className="text-gray-600 mt-2">
                            {t.type === "mcq" ? "MCQ Test" : "External URL Test"}
                        </p>

                        <Link
                            href={`/student/take-test?id=${t.id}`}
                            className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded"
                        >
                            Start Test →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
