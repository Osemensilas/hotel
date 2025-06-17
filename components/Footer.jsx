import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Footer = () => {

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
                let url = "http://localhost/backends/hotel/message.php";

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
        <footer className="w-screen bg-primary text-offWhite py-12 px-10 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            {/* Left: Hotel Info & Socials */}
            <div className="flex-1 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">The Palm Haven Hotel</h2>
                <p className="mb-4">© {new Date().getFullYear()} The Palm Haven Hotel. All rights reserved.</p>
                <div className="flex items-center gap-4 mb-4">
                <a href="https://x.com/thepalmhaven" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fa fa-twitter text-2xl hover:text-accent"></i>
                </a>
                <a href="https://wa.me/14182218627" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <i className="fa fa-whatsapp text-2xl hover:text-accent"></i>
                </a>
                </div>
                <div className="flex items-center gap-4">
                    <i className="fa fa-phone"></i>
                    <span>+1 (548) 800-4031</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                    <i className="fa fa-envelope"></i>
                    <span>info@palmhavenhotel.com</span>
                </div>
            </div>
            {/* Center: Navigation */}
            <div className="flex-1 mb-8 md:mb-0 flex flex-col gap-2">
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/gallery" className="hover:underline">Gallery</Link>
                <Link href="/suite-and-cottage" className="hover:underline">Suite & Cottage</Link>
                <Link href="/about" className="hover:underline">About Us</Link>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>
            {/* Right: Contact Form */}
            <div className="flex-1">
                <h3 className="font-semibold mb-4">Get Intouch</h3>
                <div className={`my-2 w-full text-center py-2 h-max bg-red-500 rounded text-accent text-base
                    ${contactError ? 'block' : 'hidden'}`}>
                    {contactError}
                </div>
                <form
                className="flex flex-col gap-3"
                onSubmit={formSubmitted}
                >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChanged}
                    placeholder="Your Name"
                    className="px-4 py-2 rounded border border-accent text-black"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChanged}
                    placeholder="Your Email"
                    className="px-4 py-2 rounded border border-accent text-black"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChanged}
                    placeholder="Your Message"
                    className="px-4 py-2 rounded border border-accent text-black"
                    rows={3}
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-offBlack text-accent rounded"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;