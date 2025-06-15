import Head from "next/head";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | The Palm Haven Hotel</title>
      </Head>
      <section
        className="w-screen h-[60vh] flex items-end justify-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.jpg')" }} // Replace with your image path
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 
        className="text-5xl md:text-6xl font-bold text-accent mb-10 relative z-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        >
            Contact Us
        </motion.h1>
        </section>
      <section className="w-screen min-h-screen flex items-center justify-center bg-offWhite py-16 px-4">
        <div className="w-full max-w-5xl bg-transparent rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left: Hotel Details */}
          <div className="w-full md:w-1/2 bg-transparent text-offWhite flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6">
              The Palm Haven Hotel<br />
              123 Palm Avenue, Victoria Island<br />
              Lagos, Nigeria
            </p>
            <div className="mb-4 flex items-center">
              <i className="fa fa-phone mr-2"></i>
              <span>+2349054060454</span>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fa fa-envelope mr-2"></i>
              <span>info@palmhavenhotel.com</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa fa-facebook-f text-2xl hover:text-accent"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa fa-twitter text-2xl hover:text-accent"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa fa-instagram text-2xl hover:text-accent"></i>
              </a>
              <a href="https://wa.me/2349054060454" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa fa-whatsapp text-2xl hover:text-accent"></i>
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl text-accent font-bold mb-4 text-center md:text-left">Get in Touch</h2>
            <p className="text-base text-accent mb-8 text-center md:text-left">
              We'd love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.
            </p>
            <form
              className="flex flex-col gap-5"
              onSubmit={e => {
                e.preventDefault();
                // Add your contact form logic here (API call, toast, etc.)
                alert("Thank you for reaching out! We'll get back to you soon.");
              }}
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                className="px-4 py-3 rounded border border-accent text-black"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="px-4 py-3 rounded border border-accent text-black"
              />
              <textarea
                required
                placeholder="Your Message"
                className="px-4 py-3 rounded border border-accent text-black"
                rows={5}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-offWhite rounded hover:bg-accent transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}