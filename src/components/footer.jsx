import { Music, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow">
            <Music className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">MoodMusic</h1>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="/features" className="hover:text-indigo-600">Features</a>
          <a href="/songs" className="hover:text-indigo-600">Songs</a>
          <a href="/about" className="hover:text-indigo-600">About</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/Adiii08" className="text-gray-700 hover:text-indigo-600">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/_adiiihere/?hl=en" className="text-gray-700 hover:text-indigo-600">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/adityabeura/" className="text-gray-700 hover:text-indigo-600">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} MoodMusic AI • Built with ❤️ and AI  
      </div>
    </footer>
  );
}
