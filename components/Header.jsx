import Link from "next/link";
import Booking from "./Booking";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formVisible, setFormVisible] = useState("w-screen h-screen px-2 fixed top-0 left-0 z-20 form-hide");

    const seeForm = () => {
        setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 form-hide active");
    };

    const cancelForm = () => {
        setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 form-hide");
    };

    const handleHamburger = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeAll = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <header
                id="header"
                className={`w-screen fixed z-20 px-4 sm:px-8 md:px-16 lg:px-20 transition-all duration-300
                    ${menuOpen ? "h-screen bg-white" : "h-[80px] lg:h-[120px]"}
                `}
            >
                <nav className={`relative h-full w-full items-center z-30 justify-between border-b border-grey
                    ${menuOpen ? "flex-col" : "flex"}
                    `}>
                    {/* Hamburger Icon */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-primary focus:outline-none relative w-8 h-8"
                            onClick={handleHamburger}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                // Times (X) icon with transition
                                <span className={`relative w-8 h-8 block
                                ${menuOpen ? "aboslute top-[20px] left-[80vw]" : ""}
                                `}>
                                    <span
                                        className="absolute left-0 top-1/2 w-8 h-1 bg-primary rounded transform transition-all duration-300 rotate-45 -translate-y-1/2"
                                    ></span>
                                    <span
                                        className="absolute left-0 top-1/2 w-8 h-1 bg-primary rounded transform transition-all duration-300 -rotate-45 -translate-y-1/2"
                                    ></span>
                                </span>
                            ) : (
                                // Hamburger icon with transition
                                <span className="relative w-8 h-8 block">
                                    <span
                                        className="absolute left-0 top-2 w-8 h-1 bg-primary rounded transform transition-all duration-300"
                                    ></span>
                                    <span
                                        className="absolute left-0 top-4 w-8 h-1 bg-primary rounded transform transition-all duration-300"
                                    ></span>
                                    <span
                                        className="absolute left-0 top-6 w-8 h-1 bg-primary rounded transform transition-all duration-300"
                                    ></span>
                                </span>
                            )}
                        </button>
                    </div>
                    {/* Desktop Nav */}
                    <div className={`w-2/5 h-max ${menuOpen ? "block w-max" : "hidden"} lg:block`}>
                        <ul className={`h-full w-full flex flex-col lg:flex-row 
                            ${menuOpen ? "items-start" : "items-center"}
                            `}>
                            <li className={`h-max w-max flex items-center mr-5 text-accent
                                ${menuOpen ? "mb-4" : ""}
                                `}>
                                <i className="fa fa-phone mr-2"></i>
                                <p>+2349054060454</p>
                            </li>
                            <li onClick={closeAll} className={`mr-5 ${menuOpen ? "mb-4" : ""}`}>
                                <Link href="/gallery" className="header-link h-max w-max flex items-center">
                                    <i className="fa fa-camera mr-2"></i>
                                    Gallery
                                </Link>
                            </li>
                            <li onClick={closeAll} className={`mr-5 ${menuOpen ? "mb-4" : ""}`}>
                                <Link className="header-link" href="/suite-and-cottage">Suite & Cottage</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-1/5 h-max ${menuOpen ? "hidden" : "hidden"} items-center justify-center lg:flex`}>
                        <Link onClick={closeAll} href={"/"} className="h-max w-max">
                            <h1 className="text-3xl text-center text-primary">The Palm Haven Hotel</h1>
                        </Link>
                    </div>
                    <div className={`w-max lg:w-2/5 h-max ${menuOpen ? "flex flex-col w-max" : "hidden"} items-center justify-end lg:flex`}>
                        <ul className={`h-max flex flex-col lg:flex-row 
                            ${menuOpen ? "items-start w-full" : "items-center w-max"}
                            `}>
                            <li onClick={closeAll} className={`mr-5 ${menuOpen ? "mb-4" : ""}`}>
                                <Link className="header-link" href="/about">About Us</Link>
                            </li>
                            <li onClick={closeAll} className={`mr-5 ${menuOpen ? "mb-4" : ""}`}>
                                <Link className="header-link" href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <div className={`ml-0 lg:ml-20 mt-4 lg:mt-0
                            ${menuOpen ? "absolute left-0 top-[80vh] w-full h-max" : ""}
                            `}>
                            <button onClick={seeForm} className={`py-2 px-10 border border-primary bg-transparent hover:bg-primary text-primary hover:text-neutralDark rounded transition-all duration-300 ease-in-out
                                ${menuOpen ? "w-full bg-neutralDark border-none" : ""}
                                `}>Book Now</button>
                        </div>
                    </div>
                </nav>
            </header>
            <section id="booking" className={formVisible}>
                <div className="w-full flex items-center justify-end z-30" style={{ height: '60px' }}>
                    <div onClick={cancelForm} className="relative cursor-pointer z-30" style={{ width: '40px', height: '40px' }}>
                        <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                        <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center z-30" style={{ height: 'calc(100vh - 60px)' }}>
                    <Booking />
                </div>
            </section>
        </>
    );
};

export default Header;