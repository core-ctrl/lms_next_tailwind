export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10 p-6 text-center rounded-t-2xl">
            <h2 className="text-lg font-semibold mb-2">Have any queries?</h2>
            <p className="text-gray-300">
                📧 Mail us at:
                <a
                    href="mailto:lms.support@example.com"
                    className="text-indigo-400 underline ml-1"
                >
                    lms.support@example.com
                </a>
            </p>
            <p className="text-sm text-gray-400 mt-3">
                We’ll get back to you within 24 hours.
            </p>
        </footer>
    )
}
