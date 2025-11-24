import { Sparkles, Brain, Music2, ShieldCheck, PlayCircle, Smartphone } from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-20 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">
        App <span className="bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">Features</span>
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">

        {/* Feature 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Brain className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">AI-Powered Mood Detection</h2>
          <p className="text-gray-600">
            Detects emotions like happiness, sadness, anger, calmness, and more using face-api.js — all inside your browser.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Music2 className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Mood-Based Song Suggestions</h2>
          <p className="text-gray-600">
            Once your mood is recognized, you get tailored Hindi songs that match your emotional vibe instantly.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Fast & Private</h2>
          <p className="text-gray-600">
            All processing happens locally on your device — no uploads, no storage, complete privacy.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <PlayCircle className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Inline YouTube Player</h2>
          <p className="text-gray-600">
            Enjoy songs directly inside the page with a smooth thumbnail-to-video player experience.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Dynamic Mood Scanning</h2>
          <p className="text-gray-600">
            Scan again anytime — recommendations refresh based on your current mood.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Smartphone className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Responsive Modern UI</h2>
          <p className="text-gray-600">
            Fully responsive React + TailwindCSS UI for smooth browsing on any device.
          </p>
        </div>

      </div>
    </div>
  );
}
