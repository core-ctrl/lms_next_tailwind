export default function TestResults() {
    const results = JSON.parse(localStorage.getItem("mcqResults") || "[]");

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold dark:text-white">Your Test Results</h1>

            {results.length === 0 ? (
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                    No tests completed yet.
                </p>
            ) : (
                <table className="w-full mt-6 text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Test</th>
                            <th className="p-3">Score</th>
                            <th className="p-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((r, i) => (
                            <tr key={i} className="border-b">
                                <td className="p-3">{r.testId}</td>
                                <td className="p-3">{r.score} / {r.total}</td>
                                <td className="p-3">{new Date(r.time).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
