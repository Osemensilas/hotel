import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const images = [
  "/family-cottage.jpg",
  "/family-cottage2.jpg",
  "/family-cottage3.jpg",
  "/family-cottage4.jpg"
];

export default function FamilyCottage() {
  const [mainImg, setMainImg] = useState(0);

  return (
    <>
      <Head>
        <title>Family Cottage | The Palm Haven Hotel</title>
      </Head>
      <section className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/family-cottage.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        >
          Family Cottage
        </motion.h1>
      </section>
      <section className="w-screen min-h-screen bg-offWhite py-16 px-4 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src={images[mainImg]}
                alt="Family Cottage Main"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex gap-4 w-full justify-center">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Family Cottage ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${mainImg === idx ? "border-primary" : "border-transparent"}`}
                  onClick={() => setMainImg(idx)}
                />
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl text-accent font-bold mb-4">Family Cottage</h2>
            <p className="text-lg text-accent mb-6">
              Spacious and cozy, the Family Cottage is designed for larger groups, offering privacy and comfort. Enjoy multiple bedrooms, a generous living area, and all the amenities needed for a memorable family getaway.
            </p>
            <ul className="list-disc list-inside text-accent mb-6">
              <li>4 Rooms: multiple bedrooms and large living area</li>
              <li>Private outdoor space for family activities</li>
              <li>Modern bathrooms and amenities</li>
              <li>Complimentary breakfast</li>
              <li>High-speed Wi-Fi and smart TV</li>
              <li>24/7 room service</li>
            </ul>
            <button className="px-8 py-3 bg-primary text-offWhite rounded hover:bg-accent transition-all duration-300 w-max">
              Book This Cottage
            </button>
          </div>
        </div>
      </section>
    </>
  );
}