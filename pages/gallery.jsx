import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/lobby.jpg",
  "/suite.jpg",
  "/pool.jpg",
  "/resturant.jpg",
  "/spa.jpg",
  "/garden.jpg",
  // Add more image paths as needed
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
    <section
      className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/tour.jpg')" }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.h1 className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 2}}
      >
        Take a Tour
      </motion.h1>
    </section>
    <section className="w-screen min-h-screen bg-offWhite py-16 px-10">
      <h2 className="text-4xl text-accent mb-10 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, idx) => (
          <div
            key={src}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelected(idx)}
          >
            <img src={src} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-3xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img src={images[selected]} alt="Enlarged" className="w-full max-h-[80vh] object-contain rounded-lg" />
            <button
              className="absolute top-4 right-4 text-3xl text-offWhite bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
}