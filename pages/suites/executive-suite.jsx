import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const images = [
  "/executive-suite.jpg",
  "/executive-suite2.jpg",
  "/executive-suite3.jpg",
  "/executive-suite4.jpg"
];

export default function ExecutiveSuite() {
  const [mainImg, setMainImg] = useState(0);
 
  return (
    <>
      <Head>
        <title>Executive Suite | The Palm Haven Hotel</title>
      </Head>
      <section className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/executive-suite.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        >
          Executive Suite
        </motion.h1>
      </section>
      <section className="w-screen min-h-screen bg-offWhite py-16 px-4 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src={images[mainImg]}
                alt="Executive Suite Main"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex gap-4 w-full justify-center">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Executive Suite ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${mainImg === idx ? "border-primary" : "border-transparent"}`}
                  onClick={() => setMainImg(idx)}
                />
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl text-accent font-bold mb-4">Executive Suite</h2>
            <p className="text-lg text-accent mb-6">
              The Executive Suite is designed for discerning guests who appreciate comfort and style. Enjoy a spacious bedroom, a modern living area, and elegant décor. Perfect for business or leisure, this suite offers all the amenities you need for a productive and relaxing stay.
            </p>
            <ul className="list-disc list-inside text-accent mb-6">
              <li>2 Rooms: bedroom and living area</li>
              <li>Modern bathroom with premium fittings</li>
              <li>Work desk and high-speed Wi-Fi</li>
              <li>Smart TV and entertainment system</li>
              <li>Complimentary breakfast</li>
              <li>24/7 room service</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}