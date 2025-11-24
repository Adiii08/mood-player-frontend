import { Music2, ListMusic, Heart, Star, Headphones } from "lucide-react";

export default function Songs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-20 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">
        Songs <span className="bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">Section</span>
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed mb-14">
        MoodMusic AI recommends songs based on your facial expressions.  
        Each mood triggers a curated collection of Hindi songs specially selected to match your emotions.
        Whether you're happy, sad, relaxed, or energetic — the right music comes to you instantly.
      </p>

      {/* Song Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Music2 className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Mood-Curated Playlists</h2>
          <p className="text-gray-600">
            Each emotion triggers a unique set of Hindi songs curated to match your exact mood.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <ListMusic className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Automatic Song Selection</h2>
          <p className="text-gray-600">
            No need to pick songs manually — the system auto-selects based on your emotional state.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Heart className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Emotion-Aligned Music</h2>
          <p className="text-gray-600">
            Calm songs for peace, energetic ones for excitement, and soothing tracks for sad moods.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Star className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Handpicked Hindi Songs</h2>
          <p className="text-gray-600">
            A well-curated library ensures top-quality songs across every mood category.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 backdrop-blur-xl hover:shadow-2xl transition-all">
          <Headphones className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Inline Music Player</h2>
          <p className="text-gray-600">
            Songs play directly on the detector page with a smooth thumbnail-to-player transition.
          </p>
        </div>

      </div>
    </div>
  );
}
