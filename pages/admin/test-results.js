export default function AdminTestResults() {
    const results = JSON.parse(localStorage.getItem("mcqResults") || "[]");

    const attempts = results.length;
    const avg =
        results.reduce((sum, r) => sum + r.score, 0) /
        (attempts || 1);

    const pass = results.filter((r) => r.score >= r.total / 2).length;

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-3xl font-bold dark:text-white">Test Statistics</h1>

            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                    <p className="text-gray-500">Total Attempts</p>
                    <h2 className="text-2xl font-bold dark:text-white">{attempts}</h2>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                    <p className="text-gray-500">Average Score</p>
                    <h2 className="text-2xl font-bold dark:text-white">{avg.toFixed(2)}</h2>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                    <p className="text-gray-500">Pass Rate</p>
                    <h2 className="text-2xl font-bold dark:text-white">
                        {((pass / (attempts || 1)) * 100).toFixed(1)}%
                    </h2>
                </div>
            </div>

            <h2 className="text-xl font-bold dark:text-white mt-10 mb-4">
                All Test Attempts
            </h2>

            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="p-3">Student</th>
                        <th className="p-3">Test ID</th>
                        <th className="p-3">Score</th>
                        <th className="p-3">Date</th>
                    </tr>
                </thead>

                <tbody>
                    {results.map((r, i) => (
                        <tr key={i} className="border-b">
                            <td className="p-3">{r.student}</td>
                            <td className="p-3">{r.testId}</td>
                            <td className="p-3">{r.score} / {r.total}</td>
                            <td className="p-3">{new Date(r.time).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
