import React from "react";
import Navbar from "../components/Navbar"; 
import Illustration from "../assets/success-illustration.png"; 
import SmallShapes from "../assets/Confetti-Badge.png"; 
import { useNavigate } from 'react-router-dom';

const SignupSuccess = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/signin'); 
      };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar isLogged={false} colour="white" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        {/* Title */}
        <h1
          className="text-left font-extrabold leading-[54.64px] mb-4"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "40px",
          }}
        >
          Uncover Deals, Unleash Excitement:{" "}
          <span className="text-blue-600 hover:underline">
            Dive into Our Auctions Today!
          </span>
        </h1>

        {/* Success Message */}
        <p
          className="text-left text-2xl font-normal leading-[48px] mb-4"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          SIGNED UP SUCCESSFULLY!
        </p>

        {/* Illustration */}
        <img
          src={Illustration}
          alt="Success Illustration"
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mb-8"
        />

        {/* Login Button */}
        <button onClick={handleLoginClick} className="bg-gradient-to-r  from-blue-600 to-blue-400 text-white px-16 py-3 rounded-sm hover:from-blue-700 hover:to-blue-500">
          Login now
        </button>
      </div>

      {/* Small Shapes - Decorative */}
      <div className="absolute top-0 right-0 mt-20 mr-20">
        <img
          src={SmallShapes}
          alt="Decorative shapes"
          className="w-[80px] h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 mb-20 ml-20">
        <img
          src={SmallShapes}
          alt="Decorative shapes"
          className="w-[50px] h-auto"
        />
      </div>
    </div>
  );
};

export default SignupSuccess;
