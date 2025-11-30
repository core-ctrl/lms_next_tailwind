import { useRouter } from "next/router";
import tests from "@/data/tests.json";
import { useState } from "react";

export default function TakeTest() {
    const router = useRouter();
    const { id } = router.query;
    const test = tests.find((t) => t.id === id);

    const [answers, setAnswers] = useState([]);

    if (!test) return <p className="p-6">Loading...</p>;

    if (test.type === "url") {
        if (typeof window !== "undefined") {
            window.location.href = test.url;
        }
        return null;
    }

    function submitMCQ() {
        let score = 0;

        test.questions.forEach((q, idx) => {
            if (answers[idx] == q.answer) score++;
        });

        alert(`Your Score: ${score} / ${test.questions.length}`);

        router.push("/student/tests");
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">{test.title}</h1>

            {test.questions.map((q, idx) => (
                <div key={idx} className="border p-4 rounded mb-6">
                    <p className="font-medium">{q.q}</p>

                    {q.options.map((opt, i) => (
                        <label key={i} className="block mt-2">
                            <input
                                type="radio"
                                name={`q-${idx}`}
                                onChange={() => {
                                    const newA = [...answers];
                                    newA[idx] = i;
                                    setAnswers(newA);
                                }}
                            />{" "}
                            {opt}
                        </label>
                    ))}
                </div>
            ))}

            <button
                onClick={submitMCQ}
                className="w-full p-3 bg-blue-600 text-white rounded"
            >
                Submit Test
            </button>
        </div>
    );
}
