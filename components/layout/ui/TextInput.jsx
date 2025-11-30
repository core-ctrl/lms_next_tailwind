export default function TextInput({ label, type = "text", value, onChange }) {
    return (
        <div className="relative my-3">
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                className="peer w-full p-3 border rounded-xl outline-none bg-white dark:bg-gray-700 dark:text-white"
            />

            <label className="
                absolute left-4 top-3 text-gray-500 dark:text-gray-300 
                transition-all pointer-events-none
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600
                peer-valid:-top-3 peer-valid:text-sm
            ">
                {label}
            </label>
        </div>
    );
}
