export default function PrimaryButton({ text }) {
    return (
        <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
            {text}
        </button>
    );
}
