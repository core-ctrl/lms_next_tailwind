export default function WebinarHero({ title, subtitle }) {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-2xl shadow">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-3 text-lg opacity-90">{subtitle}</p>
        </div>
    );
}
