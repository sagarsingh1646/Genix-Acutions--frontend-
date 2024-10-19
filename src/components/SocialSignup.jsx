import React from "react";
import Google from "../assets/google-logo.png";
import Facebook from "../assets/facebook-logo.png";
import Apple from "../assets/apple-logo.png";

const SocialSignUp = () => {
  return (
    <div className="my-6 text-center text-sm text-gray-500">
      <div className="flex justify-center mt-4 space-x-2">
        <button className="flex p-2 px-5 border border-gray-300 rounded-lg">
          <img src={Google} alt="Google" className="mr-2 w-5 h-5" />
          Google
        </button>
        <button className="flex p-2 px-6 border border-gray-300 rounded-lg">
          <img src={Apple} alt="Apple" className="mr-2 w-5 h-5" />
          Apple
        </button>
        <button className="flex p-2 px-6 border border-gray-300 rounded-lg">
          <img src={Facebook} alt="Facebook" className="mr-2 w-5 h-5" />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialSignUp;
