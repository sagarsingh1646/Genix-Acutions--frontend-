// src/components/Navbar.jsx

import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-customPink px-4 md:px-32 py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Side - Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="src\assets\Vector.png" // Update with actual path to your logo
                        alt="Genix Auctions Logo"
                        className="h-8"
                    />
                    <span className="text-xl font-semibold">Genix Auctions</span>
                </div>

                {/* Right Side - Navigation and Buttons */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Navigation Links */}
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                // className="text-black"
                                className="flex items-center space-x-1"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    lineHeight: "20.83px",
                                    textAlign: "left",
                                }}
                            >
                                <span>Auctions</span>
                                <img
                                    src="src\assets\down-arrow1.png" // Update with the correct path
                                    alt="Arrow Down"
                                    // className="w-2.5 h-3"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                // className="text-black"
                                className="flex items-center space-x-1"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "20.83px",
                                    textAlign: "left",
                                }}
                            >
                                <span>Bidding</span>
                                <img
                                    src="src\assets\down-arrow1.png" // Update with the correct path
                                    alt="Arrow Down"
                                    // className="w-2.5 h-3"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-1"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "20.83px",
                                    textAlign: "left",
                                }}
                            >
                                <span>About Us</span>
                                <img
                                    src="src\assets\down-arrow1.png" // Update with the correct path
                                    alt="Arrow Down"
                                    // className="w-2.5 h-3"
                                />
                            </a>
                        </li>
                    </ul>

                    {/* Notifications, Language Selector */}
                    <div className="flex items-center space-x-2">
                        <img src="src\assets\language-Icon.png" alt="language" className="h-5" />
                        <a
                            href="#"
                            className="flex items-center space-x-1"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "20.83px",
                                textAlign: "left",
                            }}
                        >
                                <span>English</span>
                                <img
                                    src="src\assets\down-arrow1.png" // Update with the correct path
                                    alt="Arrow Down"
                                    // className="w-2.5 h-3"
                                />
                        </a>
                    </div>

                    {/* Login Button */}
                    <a
                        href="#"
                        className="text-[#1D4ED8] font-medium"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "20.83px",
                            textAlign: "center",
                        }}
                    >
                        Login
                    </a>

                    {/* Get Started Button */}
                    <a
                        href="#"
                        className="px-4 py-2 text-white rounded"
                        style={{
                            background: "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        <span className="text-base font-medium leading-[20.83px] text-center">
                            Get Started
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
