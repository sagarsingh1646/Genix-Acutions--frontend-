import React from "react";
import { Link } from "react-router-dom";
import VectorLogo from "../assets/Vector.png";
import DownArrow from "../assets/down-arrow1.png";
import LanguageIcon from "../assets/language-Icon.png";
import ProfilePhoto from "../assets/profile-photo.png";

const Navbar = ({ isLogged, colour }) => {
  const bgColor = colour === "pink" ? "bg-customPink" : "bg-white";
  const textColor = colour === "pink" ? "text-black" : "text-gray-800";
  const border = colour !== "pink" ? "border-b" : "border-b-0";
  const token = localStorage.getItem('authToken'); 
  const isAuthenticated = !!token; 

  return (
    <nav className={`fixed top-0 w-full z-50 ${bgColor} ${border} px-4 md:px-32 py-4`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={VectorLogo} alt="Genix Auctions Logo" className="h-8" />
          <span className="text-xl font-semibold">Genix Auctions</span>
        </Link>

        {/* Right Side - Navigation and Buttons */}
        {colour === "pink" && (
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <ul className={`flex space-x-4 ${textColor}`}>
              <li>
                <Link
                  to="/auctions"
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
                  <img src={DownArrow} alt="Arrow Down" />
                </Link>
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
                  <span>Bidding</span>
                  <img src={DownArrow} alt="Arrow Down" />
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
                  <img src={DownArrow} alt="Arrow Down" />
                </a>
              </li>
            </ul>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <img src={LanguageIcon} alt="language" className="h-5" />
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
                <img src={DownArrow} alt="Arrow Down" />
              </a>
            </div>

            {/* Login and Get Started Buttons */}
            {!isAuthenticated && (
              <>
                <Link
                  to="/signin"
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
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-white rounded"
                  style={{
                    background: "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span className="text-base font-medium leading-[20.83px] text-center">
                    Get Started
                  </span>
                </Link>
              </>
            )}

            {/* Profile Photo for Logged-In Users */}
            {isAuthenticated && (
              <div className="flex items-center">
                <img src={ProfilePhoto} alt="Profile" className="w-10 h-10 rounded-full" />
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
