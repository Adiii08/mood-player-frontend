import { useState } from "react";
import { Link } from "react-router-dom";
import { Music, Home, Sparkles, Music2, Info, ScanFace } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-6 py-5 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
          <Music className="w-6 h-6" />
        </div>
        <Link to="/" className="text-xl font-bold text-gray-900">MoodMusic</Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <Link to="/" className="flex items-center gap-2 hover:text-indigo-600">
          <Home className="w-5 h-5" /> Home
        </Link>

        <Link to="/features" className="flex items-center gap-2 hover:text-indigo-600">
          <Sparkles className="w-5 h-5" /> Features
        </Link>

        <Link to="/songs" className="flex items-center gap-2 hover:text-indigo-600">
          <Music2 className="w-5 h-5" /> Songs
        </Link>

        <Link to="/about" className="flex items-center gap-2 hover:text-indigo-600">
          <Info className="w-5 h-5" /> About
        </Link>

        <Link
          to="/detector"
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700"
        >
          <ScanFace className="w-5 h-5" /> Get Started
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden text-gray-700 font-medium">

          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <Home className="w-5 h-5" /> Home
          </Link>

          <Link to="/features" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Features
          </Link>

          <Link to="/songs" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <Music2 className="w-5 h-5" /> Songs
          </Link>

          <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <Info className="w-5 h-5" /> About
          </Link>

          <Link
            to="/detector"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-white shadow"
          >
            <ScanFace className="w-5 h-5" /> Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
