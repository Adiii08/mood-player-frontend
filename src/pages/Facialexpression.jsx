import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

export default function FaceExpressionDetector() {
  const videoRef = useRef();

  const [expression, setExpression] = useState("");
  const [songs, setSongs] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  // Load Models
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    startVideo();
  };

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  };

  useEffect(() => {
    loadModels();
  }, []);

  // Detect Mood
  const detectMood = async () => {
    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (!detection) {
      setExpression("No face detected");
      return;
    }

    const mood = Object.entries(detection.expressions).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

    setExpression(mood);
    fetchSongs(mood);
  };

  // Fetch songs
  const fetchSongs = async (mood) => {
    try {
      const res = await fetch(`https://mood-player-backend.onrender.com/${mood}`);
      const data = await res.json();
      setSongs(data.songs || []);
      setPlayingIndex(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-br from-indigo-100 via-white to-purple-100 
        flex flex-col items-center
        px-4 py-10
      "
    >

      {/* HEADER */}
      <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        Mood Music AI 🎵
      </h1>

      <p className="text-lg text-gray-600 max-w-xl text-center mb-10">
        Let AI detect your facial expression and recommend Hindi songs that match your mood.
      </p>

      {/* WEBCAM CARD */}
      <div
        className="
          w-full max-w-lg p-6 
          bg-white/80 backdrop-blur-xl 
          rounded-3xl shadow-2xl border border-white/40
        "
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full rounded-2xl shadow-lg"
        />
      </div>

      {/* Detect Button */}
      <button
        onClick={detectMood}
        className="
          mt-8 px-10 py-4 rounded-2xl
          bg-gradient-to-r from-indigo-600 to-purple-500 
          text-white text-lg font-semibold shadow-xl
          hover:shadow-2xl hover:scale-[1.03] active:scale-95
          transition-all
        "
      >
        Detect Mood & Suggest Songs
      </button>

      {/* Mood Display */}
      <h2 className="mt-6 text-3xl font-bold tracking-wide">
        Mood:{" "}
        <span className="text-purple-600 capitalize">
          {expression || "Please Scan"}
        </span>
      </h2>

      {/* SONGS SECTION */}
      {songs.length > 0 && (
        <div className="w-full max-w-6xl mt-16">

          <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
            Recommended Songs
          </h2>

          <div
            className="
              flex gap-8 overflow-x-auto no-scrollbar 
              px-4 py-6 snap-x snap-mandatory
            "
          >
            {songs.map((s, i) => (
              <div
                key={i}
                className="
                  min-w-[300px] bg-white/90 backdrop-blur-xl
                  rounded-3xl p-5 shadow-xl border border-white
                  hover:shadow-2xl hover:-translate-y-1 
                  transition-all snap-start
                "
              >
                {/* Thumbnail or video */}
                {playingIndex !== i ? (
                  <img
                    src={`https://img.youtube.com/vi/${s.videoId}/hqdefault.jpg`}
                    className="rounded-2xl w-full h-48 object-cover shadow-md"
                  />
                ) : (
                  <iframe
                    className="rounded-2xl w-full h-48"
                    src={`https://www.youtube.com/embed/${s.videoId}?autoplay=1`}
                    allowFullScreen
                  ></iframe>
                )}

                {/* Song Title */}
                <h3 className="mt-3 font-bold text-lg text-gray-800 line-clamp-2">
                  {s.title}
                </h3>

                {/* Play Button */}
                <button
                  onClick={() =>
                    setPlayingIndex(playingIndex === i ? null : i)
                  }
                  className="
                    mt-4 w-full py-2 rounded-xl 
                    bg-gradient-to-r from-indigo-600 to-purple-500
                    text-white font-semibold shadow-md
                    hover:scale-[1.02] active:scale-95 transition-all
                  "
                >
                  {playingIndex === i ? "⏸ Stop" : "▶ Play"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
