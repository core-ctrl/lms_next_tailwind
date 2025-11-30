import { useAuth } from "@/context/AuthContext";

export default function DeleteAccount() {
    const { deleteAccount } = useAuth();

    const confirmDelete = () => {
        if (confirm("Are you sure? This action cannot be undone.")) {
            deleteAccount();
        }
    };

    return (
        <div className="max-w-xl mx-auto p-8 mt-10 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h1 className="text-2xl font-bold text-red-600 mb-6">Delete Account</h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Once deleted, your account cannot be recovered.
            </p>

            <button
                onClick={confirmDelete}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl"
            >
                Permanently Delete My Account
            </button>
        </div>
    );
}
