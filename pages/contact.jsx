import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [contactError, setContactError] = useState('');
  const [formData, setFormData] = useState({
      'name': '',
      'email' : '',
      'message' : '',
  })

  const handleChanged = (e) => {
      const { name, value} = e.target;
      setFormData({...formData, [name]: value});
  }

  const formSubmitted = async (e) => {
      e.preventDefault();

      let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
      let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      let errorValue = false;
      if (!nameVal.test(formData.name)){
          setContactError('Please enter a valid name');
          errorValue = true;
      }else{
          setContactError('');

          if (!emailVal.test(formData.email)){
              setContactError('Please enter a valid email');
              errorValue = true;
          }else{
              setContactError('');
          }
      }

      if (!errorValue){
          try{
              let url = "https://backend.palmhavenhotel.com/message.php";

              const response = await axios.post(url, formData, {
                  headers: {
                      'Content-Type' : 'application/json'
                  },withCredentials: true,
              });
              console.log(response.data)
          }catch(error){
              console.log("Error submitting form:", error);
          }
      }
  }
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
            <h2 className="text-3xl font-bold mb-4 text-accent">Contact Information</h2>
            <p className="mb-6 text-accent">
              The Palm Haven Hotel<br />
              2008 North Rd Burnaby <br />
              British Columbia, Canada.
            </p>
            <div className="mb-4 flex items-center">
              <i className="fa fa-phone mr-2 text-primary"></i>
              <span className="text-accent">+1 (548) 800-4031</span>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fa fa-envelope mr-2 text-primary"></i>
              <span className="text-accent">info@palmhavenhotel.com</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://x.com/thepalmhaven" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa fa-twitter text-2xl text-primary"></i>
              </a>
              <a href="https://wa.me/14182218627" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa fa-whatsapp text-2xl text-primary"></i>
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl text-accent font-bold mb-4 text-center md:text-left">Get in Touch</h2>
            <p className="text-base text-accent mb-8 text-center md:text-left">
              We'd love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.
            </p>
            <div className={`my-2 w-full text-center py-2 h-max bg-red-500 rounded text-accent text-base
              ${contactError ? 'block' : 'hidden'}`}>
              {contactError}
            </div>
            <form
              className="flex flex-col gap-5"
              onSubmit={formSubmitted}
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-accent text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-accent text-black"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-accent text-black"
                rows={5}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-offWhite rounded transition-all duration-300"
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