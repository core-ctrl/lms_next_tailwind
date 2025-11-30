import { useState, useEffect } from "react";

export default function NotificationsSettings() {
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [courseAlerts, setCourseAlerts] = useState(true);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("notifications"));
        if (saved) {
            setEmailAlerts(saved.emailAlerts);
            setCourseAlerts(saved.courseAlerts);
        }
    }, []);

    const save = () => {
        localStorage.setItem(
            "notifications",
            JSON.stringify({ emailAlerts, courseAlerts })
        );
        alert("Notification settings saved!");
    };

    return (
        <div className="max-w-xl mx-auto p-8 mt-10 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-6 dark:text-white">Notifications</h1>

            <div className="space-y-4">
                <label className="flex items-center gap-3 text-lg dark:text-white">
                    <input
                        type="checkbox"
                        checked={emailAlerts}
                        onChange={() => setEmailAlerts(!emailAlerts)}
                    />
                    Email Alerts
                </label>

                <label className="flex items-center gap-3 text-lg dark:text-white">
                    <input
                        type="checkbox"
                        checked={courseAlerts}
                        onChange={() => setCourseAlerts(!courseAlerts)}
                    />
                    Course Updates
                </label>

                <button
                    onClick={save}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 mt-4"
                >
                    Save Settings
                </button>
            </div>
        </div>
    );
}
