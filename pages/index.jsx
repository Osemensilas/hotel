import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Booking from "../components/Booking";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";

const slides = [
  { id: 1, title: "The Palm Haven Hotel", image: "/hero1.jpg" },
  { id: 2, title: "The Palm Haven Hotel", image: "/hero2.jpg" },
  { id: 3, title: "The Palm Haven Hotel", image: "/hero3.jpg" },
];


export default function Home() {
  const [index, setIndex] = useState(0);
  const [formVisible, setFormVisible] = useState("w-screen h-screen px-2 fixed top-0 left-0 z-20 form-hide");
  const [subEmail, setSubEmail] = useState('');
  const [subError, setSubError] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const seeForm = () => {
    setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 form-hide active");
  }

  const cancelForm = () => {
    setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 form-hide");
  }

  const subscribe = async (e) => {
    e.preventDefault();

    let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (subEmail === ""){
      setSubError('Email required');
    }else{
      setSubEmail('');

      console.log(subEmail);

      if (!emailVal.test(subEmail)){
        setSubError('Invalid email address');
      }else{
        setSubError('');

        try{
          let url = "https://backend.palmhavenhotel.com/subscribe.php";

          const response = await axios.post(url, {'email': subEmail} , {
            headers: {
              'Content-Type': 'application/json',
            },withCredentials: true,
          })
          console.log(response.data);
        }catch(err){
          console.log("Error subscribing: ", err);
        }
      }
    }
  }

  return (
    <>
    <Head>
      <title>Home Page | The Palm Haven Hotel</title>
    </Head>
    <section id="home-hero" className="w-screen h-screen relative">
      <div className="absolute z-10 flex justify-between w-full px-4 top-1/2 -translate-y-1/2">
        <button onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}>‹</button>
        <button onClick={() => setIndex((prev) => (prev + 1) % slides.length)}>›</button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <motion.h2 
          className="text-5xl z-10 text-accent font-bold mb-10 text-center" 
          initial={{ x: -100 }} animate={{ x: 0 }} 
          transition={{ duration: 1 }}
          style={{paddingRight: '10px', paddingLeft: '10px'}}>
            {slides[index].title}
          </motion.h2>
          <motion.h3 
          className="text-xl text-center text-accent z-10 mb-20" 
          initial={{ x: -100 }} animate={{ x: 0 }} 
          transition={{ duration: 1.5 }}
          style={{paddingRight: '10px', paddingLeft: '10px'}}>
            Experience the Art of Hospitality, with Comfort Redefined and Moments Remembered
          </motion.h3>
          <motion.div className="z-10" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.8 }}>
            <button onClick={seeForm} className="px-10 py-2 border border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300 ease-in-out">
              Book Now
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
    <section id="booking" className={formVisible}>
        <div className="w-full flex items-center justify-end z-30" style={{height: '60px'}}>
          <div onClick={cancelForm} className="relative cursor-pointer z-30" style={{width: '40px', height: '40px'}}>
            <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center z-30" style={{height: 'calc(100vh - 60px)'}}>
          <Booking />
        </div>
      </section>
      <section id="about" className="w-screen h-screen flex sm:flex-row flex-col items-center">
        <div className="sm:w-2/5 w-full h-max pl-4 pr-4 sm:pl-10 sm:pr-0">
          <header className="w-full h-max pb-5 pt-10">
            <h2 className="text-4xl text-accent">Your Comfort Matters</h2>
          </header>
          <p className="text-base text-accent mb-5">
            Welcome to The Palm Haven Hotel, where luxury meets comfort and hospitality. 
            Experience exceptional service, elegant accommodations, and a tranquil atmosphere designed to make your stay truly memorable. Whether you are here for business or leisure, our dedicated team is committed to providing you with an unforgettable experience.
          </p>
        </div>
        <div className="w-full sm:w-3/5 h-full flex items-center justify-center bg-cover">
          <Image src="/home-about.jpg" alt="about image" className="h-[400px] sm:h-[450px] w-[95%] sm:w-[600px]" height={800} width={600} />
        </div>
      </section>
      <section id="gallery" className="w-screen h-max bg-offWhite py-16 px-10">
        <header className="mb-10">
          <h2 className="text-4xl text-accent mb-2">Gallery</h2>
          <p className="text-base text-accent">Discover the beauty and elegance of The Palm Haven Hotel.</p>
        </header>
        <div className="w-full h-max">
          <div className="w-full h-max flex">
            <div className="w-3/5 h-max">
              <img src="/lobby.jpg" alt="Lobby" className="w-full sm:h-[600px] h-[300px]" />
            </div>
            <div className="w-2/5 h-max flex flex-col">
              <img src="/suite.jpg" alt="Suite" className="w-full sm:h-[300px] h-[150px]"/>
              <img src="/pool.jpg" alt="Pool" className="w-full sm:h-[300px] h-[150px]"/>
            </div>
          </div>
          <div className="w-full h-max hidden sm:flex flex-row-reverse ">
            <div className="w-3/5 h-max">
              <img src="/resturant.jpg" alt="Restaurant" className="w-full" style={{height: '600px'}}/>
            </div>
            <div className="w-2/5 h-max flex flex-col">
              <img src="/spa.jpg" alt="Spa" className="w-full" style={{height: '300px'}}/>
              <img src="/garden.jpg" alt="Garden" className="w-full" style={{height: '300px'}}/>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="w-screen bg-white py-16 px-10">
        <header className="mb-10 text-center">
          <h2 className="text-4xl text-offBlack mb-2">What Our Guests Say</h2>
          <p className="text-base text-offBlack">Hear from guests who have experienced The Palm Haven Hotel.</p>
        </header>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
            <p className="text-lg text-gray-700 mb-4">
              “Absolutely wonderful stay! The staff were attentive and the rooms were spotless. I will definitely return.”
            </p>
            <div className="flex items-center">
              <span className="font-bold text-accent mr-2">— Sarah O.</span>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
          <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
            <p className="text-lg text-gray-700 mb-4">
              “The Palm Haven Hotel exceeded my expectations. The pool and spa were highlights of my trip!”
            </p>
            <div className="flex items-center">
              <span className="font-bold text-accent mr-2">— James K.</span>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
          <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
            <p className="text-lg text-gray-700 mb-4">
              “A perfect blend of luxury and comfort. The food at the restaurant was delicious and the service was top-notch.”
            </p>
            <div className="flex items-center">
              <span className="font-bold text-accent mr-2">— Linda M.</span>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" className="w-screen bg-offWhite py-16 px-10 flex flex-col items-center">
        <h2 className="text-3xl text-accent mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-base text-accent mb-8 text-center max-w-xl">
          Stay updated with the latest news, exclusive offers, and special events from The Palm Haven Hotel. Enter your email below to join our mailing list!
        </p>
        <div className={`my-2 w-[80%] sm:w-[40vw] text-center py-2 h-max bg-red-500 rounded text-accent text-base
          ${subError ? 'block' : 'hidden'}`}>
          {subError}
        </div>
        <form
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg"
          onSubmit={subscribe}
        >
          <input
            type="email"
            name="email"
            value={subEmail}
            onChange={(e) => setSubEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 outline-0 rounded border border-accent"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-offWhite rounded transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
