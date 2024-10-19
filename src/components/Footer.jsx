import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Logo from "../assets/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white py-14">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img src={Logo} alt="Genix Auctions" className="h-8" />{" "}
            {/* Replace with your logo path */}
            <span className="text-xl font-semibold">Genix Auctions</span>
          </div>

          {/* Links */}
          <div className="flex space-x-10 mr-96 mb-6 md:mb-0">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="#" className="hover:underline">
                Products
              </a>
              <a href="#" className="hover:underline">
                About us
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="#" className="hover:underline">
                Auctions
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="#" className="hover:underline">
                Bidding
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center mt-10">
          <span className="flex-grow border-t border-gray-800"></span>
        </div>
        {/* Copyright Text */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          © Copyright 2024, All Rights Reserved by Genix
        </div>
      </div>
    </footer>
  );
};

export default Footer;
