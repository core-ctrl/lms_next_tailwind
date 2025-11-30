export default function Footer() {
    return (
        <footer className="w-full border-t mt-10 bg-white/80 backdrop-blur">
            <div className="max-w-7xl mx-auto px-5 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} LMS Hub — All rights reserved.
            </div>
        </footer>
    );
}
