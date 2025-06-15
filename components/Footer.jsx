import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <footer className="w-screen bg-primary text-offWhite py-12 px-10 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            {/* Left: Hotel Info & Socials */}
            <div className="flex-1 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">The Palm Haven Hotel</h2>
                <p className="mb-4">© {new Date().getFullYear()} The Palm Haven Hotel. All rights reserved.</p>
                <div className="flex items-center gap-4 mb-4">
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
                <div className="flex items-center gap-4">
                <i className="fa fa-phone"></i>
                <span>+2349054060454</span>
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
                <Link href="/#about" className="hover:underline">About</Link>
                <Link href="/#gallery" className="hover:underline">Gallery</Link>
                <Link href="/#reviews" className="hover:underline">Reviews</Link>
                <Link href="/#booking" className="hover:underline">Book Now</Link>
            </div>
            {/* Right: Contact Form */}
            <div className="flex-1">
                <h3 className="font-semibold mb-4">Contact Us</h3>
                <form
                className="flex flex-col gap-3"
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
                    className="px-4 py-2 rounded border border-accent text-black"
                />
                <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="px-4 py-2 rounded border border-accent text-black"
                />
                <textarea
                    required
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