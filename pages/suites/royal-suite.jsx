import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const images = [
  "/royal-suite.jpg",
  "/royal-suite2.jpg",
  "/royal-suite3.jpg",
  "/royal-suite4.jpg"
];

export default function RoyalSuite() {
  const [mainImg, setMainImg] = useState(0);

  return (
    <>
      <Head>
        <title>Royal Suite | The Palm Haven Hotel</title>
      </Head>
      <section className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/royal-suite.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        >
          Royal Suite
        </motion.h1>
      </section>
      <section className="w-screen min-h-screen bg-offWhite py-16 px-4 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src={images[mainImg]}
                alt="Royal Suite Main"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex gap-4 w-full justify-center">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Royal Suite ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${mainImg === idx ? "border-primary" : "border-transparent"}`}
                  onClick={() => setMainImg(idx)}
                />
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl text-accent font-bold mb-4">Royal Suite</h2>
            <p className="text-lg text-accent mb-6">
              Experience the height of luxury in our Royal Suite. This exquisite suite features a spacious living area, a king-size bed, elegant furnishings, and a private balcony with breathtaking views. Enjoy exclusive amenities, a lavish bathroom, and personalized service designed to make your stay truly unforgettable.
            </p>
            <ul className="list-disc list-inside text-accent mb-6">
              <li>3 Rooms including master bedroom and living area</li>
              <li>Private balcony with stunning views</li>
              <li>Luxurious bathroom with jacuzzi</li>
              <li>High-speed Wi-Fi and smart TV</li>
              <li>Complimentary breakfast and refreshments</li>
              <li>24/7 room service</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}