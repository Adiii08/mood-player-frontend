import { Brain, Music2, Camera, ShieldCheck, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-20 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">
        About <span className="bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">MoodMusic AI</span>
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed mb-14">
        MoodMusic AI is an emotion-aware music recommendation platform designed to bring music that matches your vibe.
        Using advanced AI and real-time facial expression analysis, the system identifies your mood and instantly
        suggests curated Hindi songs that align with how you feel. Everything is fast, private, and runs directly in your browser.
      </p>

      {/* About Details Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Camera className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Facial Expression Detection</h2>
          <p className="text-gray-600">
            Uses face-api.js to analyze your live webcam feed and understand emotions including happiness, sadness, anger, calmness, and more.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Brain className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">AI Model Processing</h2>
          <p className="text-gray-600">
            All mood detection happens locally on your device using lightweight AI models — fast, secure, and private.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Music2 className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Music Recommendation Engine</h2>
          <p className="text-gray-600">
            Fetches mood-matched Hindi songs and allows you to play them directly inside the app with a smooth inline YouTube player.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Fully Private</h2>
          <p className="text-gray-600">
            No video or mood data is ever uploaded — everything runs in-browser, ensuring complete user privacy.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Smooth & Modern UI</h2>
          <p className="text-gray-600">
            Built with React and TailwindCSS for a beautiful, responsive, and seamless experience on mobile and desktop.
          </p>
        </div>

      </div>

    </div>
  );
}
