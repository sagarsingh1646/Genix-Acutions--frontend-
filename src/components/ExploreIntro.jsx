import React from 'react';
import girlImage from '../assets/excited-girl.png'; // Make sure to replace with actual path
// import speechBubbleImage from './path-to-speech-bubble-image'; // Replace with speech bubble image path
// import arrowIcon from './path-to-arrow-icon'; // Replace with arrow icon if needed

const ExploreIntro = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-40 py-16">
            {/* Left Section: Text */}
            <div className="text-left max-w-lg">
                <div className="font-inter text-left text-6xl leading-tight font-normal">
                    <span>Your Gateway</span>
                    <br />
                    <span>to Extraordinary</span>
                    <br />
                    <span>Finds</span>
                </div>
                <div className='mt-4 mr-24 text-lg  text-[#0F0C29] leading-tight'>
                    <span className="">
                        Unlock deals, bid smart, and seize the moment
                    </span>
                    <br />
                    <span>
                        with our online bidding bonanza!
                    </span>
                </div>
                <button className="mt-6 inline-flex items-center bg-gradient-to-r from-[#1D4ED8] to-[#5AD7FE] text-white font-normal text-[16px] leading-[20.83px] rounded-full px-8 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">  {/* Added mr-2 here */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                    Watch Video
                </button>

            </div>


            {/* Right Section: Image and Speech Bubbles */}
            <div className="relative z-10 mt-12 md:mt-0 md:w-1/2">
                {/* <img src={girlImage} alt="Girl with phone" className="relative z-10" /> */}
                <img
                    src={girlImage}
                    alt="Girl with phone"
                    className="relative z-10 w-[320px] h-[420px]"
                />

                {/* Speech Bubble 1 */}
                <div className="absolute top-0 right-20 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2 z-20">
                    <img src="" alt="User avatar" className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-gray-700">Overall Fantastic!</span>
                </div>

                {/* Speech Bubble 2 */}
                <div className="absolute bottom-0 left-12 bg-purple-500 text-white shadow-lg rounded-lg p-4 flex items-center space-x-2 z-20">
                    <img src="" alt="User avatar" className="w-8 h-8 rounded-full" />
                    <span className="text-sm">Seamless, lightweight! Loving this site.</span>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute z-0 top-4 right-0 w-[300px] h-[300px] bg-blue-500 rounded-full"></div>
                <div className="absolute z-0 bottom-16 left-0 w-[200px] h-[200px] bg-pink-500 rounded-full"></div>
            </div>
        </div>
    );
};

export default ExploreIntro;
