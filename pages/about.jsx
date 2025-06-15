import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | The Palm Haven Hotel</title>
      </Head>
      <section
        className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/about.jpg')" }} // Replace with your image path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 
        className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        >
          About Us
        </motion.h1>
      </section>
      <section className="w-screen min-h-screen flex items-center justify-center bg-offWhite py-16 px-4">
        <div className="w-full max-w-4xl bg-transparent rounded-lg shadow-lg p-10">
          <h2 className="text-3xl text-accent font-bold mb-6">Welcome to The Palm Haven Hotel</h2>
          <p className="text-lg text-accent mb-6">
            The Palm Haven Hotel is your sanctuary of luxury and comfort in the heart of Lagos. Our mission is to provide every guest with an exceptional experience, blending world-class hospitality with the warmth of home.
          </p>
          <p className="text-base text-accent mb-4">
            From our elegantly appointed rooms and suites to our relaxing spa, gourmet restaurant, and tranquil gardens, every detail is designed to make your stay memorable. Whether you are visiting for business or leisure, our dedicated team is committed to exceeding your expectations.
          </p>
          <p className="text-base text-accent mb-4">
            We pride ourselves on our attention to detail, personalized service, and a passion for creating unforgettable moments. Discover the art of hospitality at The Palm Haven Hotel.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-accent">
              <li>Exceptional Service</li>
              <li>Comfort & Luxury</li>
              <li>Attention to Detail</li>
              <li>Warmth & Hospitality</li>
              <li>Guest Satisfaction</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}