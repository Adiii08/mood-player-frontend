import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Songs from "./pages/Songs";
import About from "./pages/About";
import Detector from "./pages/Detector";
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/about" element={<About />} />
        <Route path="/detector" element={<Detector />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
