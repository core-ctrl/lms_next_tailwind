import FormCard from "../components/ui/FormCard.jsx";
import TextInput from "../components/ui/Input.jsx";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
import { useAuth } from "../context/AuthContext";


export default function RegisterCourse() {
    const router = useRouter();
    const { id } = router.query;

    const { user } = useAuth();
    const [course, setCourse] = useState(null);

    // Protect route → redirect if not logged in
    useEffect(() => {
        if (!user) {
            router.push("/login");
            return;
        }

        const c = courses.find((x) => x.id === id);
        setCourse(c);
    }, [id, user]);

    if (!course) return <p className="p-10">Loading...</p>;

    const handleRegister = () => {
        const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

        // Prevent duplicate registration
        if (!enrolled.includes(course.id)) {
            enrolled.push(course.id);
            localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
        }

        alert("🎉 Successfully Registered!");
        router.push("/student/course-enrolled");
    };

    return (
        <div className="max-w-3xl mx-auto p-8">

            {/* HEADER */}
            <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>

            {/* TAGS */}
            <div className="flex gap-2 mb-6 flex-wrap">
                {course.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* CARD */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                    Confirm Your Registration
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    You are about to register for <b>{course.title}</b>.
                    After confirmation, this course will appear in your:
                    <span className="font-semibold text-blue-600"> Enrolled Courses</span>.
                </p>

                <button
                    onClick={handleRegister}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    Register Now
                </button>

                <button
                    onClick={() => router.back()}
                    className="w-full mt-3 py-3 text-gray-600 dark:text-gray-300 hover:text-black"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
