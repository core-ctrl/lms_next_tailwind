import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({ isAdmin }) {
    const router = useRouter();

    const studentLinks = [
        { href: "/student/dashboard", label: "Dashboard" },
        { href: "/student/explore", label: "Explore Courses" },
        { href: "/student/course-enrolled", label: "Enrolled Courses" },
        { href: "/student/tests", label: "Tests" },
        { href: "/student/collaboration", label: "Collaboration" },
        { href: "/student/profile", label: "Profile" },
        { href: "/student/settings", label: "Settings" },
    ];

    const adminLinks = [
        { href: "/admin/dashboard", label: "Admin Dashboard" },
        { href: "/admin/create-course", label: "Create Course" },
        { href: "/admin/create-test", label: "Create Test" },
        { href: "/admin/manage-users", label: "Manage Users" },
        { href: "/admin/change-password", label: "Change Password" },
    ];

    const links = isAdmin ? adminLinks : studentLinks;

    return (
        <aside className="w-64 bg-white shadow-xl border-r min-h-screen p-6 hidden md:block">
            <h2 className="text-xl font-bold mb-6">{isAdmin ? "Admin Panel" : "Student Panel"}</h2>

            <nav className="flex flex-col gap-2">
                {links.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`px-4 py-2 rounded-lg hover:bg-blue-100 ${router.pathname === item.href ? "bg-blue-200 font-medium" : "text-gray-700"
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
