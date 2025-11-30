export default function Badge({ children }) {
    return (
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            {children}
        </span>
    );
}
