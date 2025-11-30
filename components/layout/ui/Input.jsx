export default function TextInput({ label, value, onChange, type = "text" }) {
    return (
        <div className="mb-4">
            <label className="block mb-1 font-medium dark:text-white">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
        </div>
    );
}
