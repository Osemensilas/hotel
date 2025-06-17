import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const suites = [
  {
    name: "Royal Suite",
    image: "/royal-suite.png",
    rooms: 3,
    description: "Experience luxury in our Royal Suite, featuring a spacious living area, king-size bed, and a private balcony with stunning views.",
    link: "/suites/royal-suite"
  },
  {
    name: "Executive Suite",
    image: "/executive-suite.png",
    rooms: 2,
    description: "Perfect for business or leisure, the Executive Suite offers comfort, style, and modern amenities.",
    link: "/suites/executive-suite"
  },
  {
    name: "Standard Suite",
    image: "/standard-suite.jpg",
    rooms: 2,
    description: "Our Standard Suite offers a perfect blend of comfort and functionality, featuring a cozy bedroom, modern amenities, and a relaxing ambiance for both business and leisure travelers.",
    link: "/suites/standard-suite"
  },
  {
    name: "Garden Cottage",
    image: "/garden-cottage.jpg",
    rooms: 2,
    description: "Nestled in our tranquil gardens, this cottage is ideal for a peaceful getaway with family or friends.",
    link: "/cottages/garden-cottage"
  },
  {
    name: "Palm Grove Cottage",
    image: "/palm-grove-cottage.jpg",
    rooms: 2,
    description: "Surrounded by lush palm trees, the Palm Grove Cottage offers a serene retreat with modern comforts, a private veranda, and beautiful garden views—perfect for couples or small families seeking relaxation.",
    link: "/cottages/palm-grove-cottage"
  },
  {
    name: "Family Cottage",
    image: "/family-cottage.jpg",
    rooms: 4,
    description: "Spacious and cozy, the Family Cottage is designed for larger groups, offering privacy and comfort.",
    link: "/cottages/family-cottage"
  }
];

export default function SuiteAndCottage() {
  return (
    <>
      <Head>
        <title>Suites & Cottages | The Palm Haven Hotel</title>
      </Head>
      <section
        className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/suite-hero.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        >
          Suites & Cottages
        </motion.h1>
      </section>
      <section className="w-screen min-h-screen bg-offWhite py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl text-accent font-bold mb-10">Our Suites & Cottages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {suites.map((suite, idx) => (
            <div key={idx} className="bg-transparent rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={suite.image} alt={suite.name} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-primary mb-2">{suite.name}</h3>
                <p className="text-base text-accent mb-2">{suite.description}</p>
                <p className="text-sm text-gray-600 mb-4">Number of Rooms: <span className="font-bold">{suite.rooms}</span></p>
                <Link
                  href={suite.link}
                  className="mt-auto inline-block px-6 py-2 bg-primary text-offWhite rounded hover:bg-accent transition-all duration-300 text-center"
                >
                  View {suite.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}