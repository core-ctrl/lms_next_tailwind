export default function Tabs({ tabs, active, onChange }) {
    return (
        <div className="flex gap-3 border-b pb-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`px-4 py-2 rounded-t-lg ${active === tab
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
