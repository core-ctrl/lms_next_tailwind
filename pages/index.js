import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Learn. Grow. Excel with
            <span className="text-blue-600"> LMS Hub</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            A modern Learning Management System built for students and educators.
            Discover top-quality courses, attempt tests, collaborate with peers, and track your learning progress — all in one place.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>

            <Link
              href="/student/explore"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-xl shadow hover:bg-gray-100 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-10 rounded-3xl shadow-lg 
                        flex items-center justify-center">
          <img
            src="/images/hero-illustration.svg"
            alt="LMS Illustration"
            className="w-72 md:w-96 drop-shadow-xl"
          />
        </div>
      </section>

      {/* --- REMOVED FEATURED COURSES SECTION --- */}
      {/* Students will now see courses ONLY in their pages after login */}

    </div>
  );
}
