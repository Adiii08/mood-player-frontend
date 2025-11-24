import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col items-center justify-center px-6 py-20">

      {/* Big Hero Headphone Icon */}
      <div className="mb-10 p-6 rounded-full bg-white shadow-2xl border border-white/60">
        <Headphones className="w-24 h-24 text-indigo-600" />
      </div>

      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          MoodMusic AI
        </span>
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed mb-10">
        MoodMusic AI analyzes your facial expressions in real-time and instantly 
        recommends Hindi songs that match your current mood.
      </p>

      <Link
        to="/detector"
        className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95 transition-all"
      >
        Get Started →
      </Link>

    </div>
  );
}
