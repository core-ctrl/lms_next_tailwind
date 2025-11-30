import Sidebar from "@/components/layout/Sidebar";

export default function ManageUsers() {
    const users = [
        { name: "Harshi", email: "harshi@example.com", role: "Student" },
        { name: "person2", email: "person2@example.com", role: "Student" },
        { name: "Admin", email: "admin@example.com", role: "Admin" }
    ];

    return (
        <div className="min-h-screen flex bg-gray-50">

            <Sidebar isAdmin />

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Manage Users</h1>

                <table className="w-full bg-white mt-6 shadow rounded-xl overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, i) => (
                            <tr key={i} className="border-b">
                                <td className="p-3">{u.name}</td>
                                <td className="p-3">{u.email}</td>
                                <td className="p-3">{u.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </main>
        </div>
    );
}
