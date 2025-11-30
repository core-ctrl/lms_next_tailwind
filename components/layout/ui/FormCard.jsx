export default function FormCard({ title, subtitle, children }) {
    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
            <h1 className="text-2xl font-bold mb-2 dark:text-white">{title}</h1>
            {subtitle && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">{subtitle}</p>
            )}
            {children}
        </div>
    );
}
