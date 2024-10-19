import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; 
import Illustration from "../assets/signup-illustration.png";
import SocialSignUp from "../components/SocialSignup";
import { useSignUp } from "../hooks/useSignup";

const SignUp = () => {
  const { signUp, errors } = useSignUp();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signUp(formData);
    if (success) {
      navigate("/signup-success");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLogged={false} colour="white" />
      <div className="flex flex-1 justify-center items-start mt-10 px-4 lg:mx-48 lg:gap-40">
        <div className="w-full max-w-md p-6 bg-white rounded-lg lg:w-[440px]">
          <h2
            className="text-[22px] font-bold leading-[30.05px] text-left mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Sign up
          </h2>
          <p
            className="text-[14px] font-normal leading-4 text-left mb-7"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            New bidders, as soon as you have submitted your information you will
            be eligible to bid in the auction.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white p-2 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-500"
            >
              Submit
            </button>
            {errors.apiError && (
              <p className="text-red-500 text-sm mt-2">{errors.apiError}</p>
            )}
          </form>
          <div className="flex flex-row items-center mt-4">
            <span className="flex-grow border-t"></span>
            <span className="mx-4">or sign up with</span>
            <span className="flex-grow border-t"></span>
          </div>
          <SocialSignUp />
          <p className="text-center text-sm text-gray-500">
            Want to know more?{" "}
            <a href="#" className="text-blue-600">
              Auction rules
            </a>
          </p>
        </div>
        <div className="hidden lg:block flex-1 ml-20 mt-10">
          <img
            src={Illustration}
            alt="Illustration"
            className="w-full h-auto max-w-md lg:max-w-[620px] lg:h-[573px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
