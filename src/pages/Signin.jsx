import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Illustration from "../assets/Iogin-illustration.png";
import SocialSignUp from "../components/SocialSignup";
import { useSignIn } from "../hooks/useSignin";
import { getToken } from "firebase/messaging";
import {
  listenForMessagages,
  messaging,
  registerServiceWorker,
} from "../utils/firebase";
import axios from "axios";

const SignIn = () => {
  const { signIn, errors } = useSignIn();
  const [formData, setFormData] = useState({
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
    const success = await signIn(formData);
    if (success) {
      // try {
      //   registration = await navigator.serviceWorker.register(
      //     "firebase-messaging-sw.js"
      //   );
      //   console.log("Service Worker registered successfully:", registration);
      // } catch (error) {
      //   console.error("Service Worker registration failed:", error);
      // }
      navigate("/auctions");
            // Request notification permission after the service worker is registered
            await requestNotificationPermission();

            // Start listening for messages
            listenForMessagages();
    }
  };

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        // Register the service worker first
        // await registerServiceWorker();
        // Proceed to get the FCM token
        // await requestFcmToken();
        await requestFcmToken();
      } else {
        console.log("Notification permission denied.");
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  // Function to request FCM token
  const requestFcmToken = async () => {
    try {  
 

        const FCMtoken = await getToken(messaging, {
          vapidKey:
            "BFE1pMBeoqxsfVwhnBeoK5glXC8JEL8PQZ9jhyqdkwa_yh6fZaVk2cgSlV-O3GiLnPL_xWKZOwjTNP9IybHhKMo",
        });

      console.log("FCM Token1:", FCMtoken);
      if (FCMtoken) {
        console.log("FCM Token:", FCMtoken);

        await saveTokenToBackend(FCMtoken);
      } else {
        console.log(
          "No FCM token available. Request permission to generate one."
        );
      }
    } catch (error) {
      console.error("Error getting FCM token:", error);
    }
  };

  // Function to send the token to your backend
  const saveTokenToBackend = async (token) => {
    try {
      const response = await axios.post(
        "https://whisperoo.in/api/v1/auth/save-fcm-token",
        {
          token,
          email: formData.email,
        }
      );

      if (response.status === 200) {
        console.log("Token saved successfully");
      } else {
        console.log("Failed to save token");
      }
    } catch (error) {
      console.error("Error saving token to backend:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLogged={false} colour="white" />
      <div className="flex flex-1 justify-center items-start   tablet:mt-20 desktop:mt-32 tablet:mx-32 tablet:gap-10 desktop:mx-48 desktop:gap-40">
        <div className="w-[440px] p-6 bg-white rounded-lg mt-20">
          <h2
            className="text-[22px] font-bold leading-[30.05px] text-left mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Login
          </h2>
          <p
            className="text-[14px] font-normal leading-4 text-left mb-7"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Welcome back. Enter your credentials to access your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              Continue
            </button>
            {errors.apiError && (
              <p className="text-red-500 text-sm mt-2">{errors.apiError}</p>
            )}
          </form>
          <div className="flex flex-row items-center mt-4">
            <span className="flex-grow border-t"></span>
            <span className="mx-4">or sign in with</span>
            <span className="flex-grow border-t"></span>
          </div>
          <SocialSignUp />
          <p className="text-center text-sm text-gray-500">
            Don’t have an Account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign up here
            </Link>
          </p>
        </div>
        <div className="hidden lg:block flex-1 desktop:ml-15">
          <img
            src={Illustration}
            alt="Illustration"
            className="w-[929px] h-[566px] lg:w-[929px] tablet:h-[30rem] tablet:mt-16 desktop:h-[556px] desktop:pt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
