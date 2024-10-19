import React, { useEffect, useState } from "react";
import girlImage from "../assets/excited-girl.png";
import floatingMessage from "../assets/floating-message.png";
import profilePhoto from "../assets/profile-photo.png";
import Auction from "./Auction";
import Footer from "./Footer";

const ExploreIntro = () => {
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://13.201.80.101:3002/api/v1/auctions");
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error("Error fetching auction data:", error);
      }
    };

    fetchAuctions();
  }, []);
  return (
    <div className="bg-white pt-16">
      {" "}
      {/* White background for entire section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-40">
        {/* Left Section: Text */}
        <div className="text-left max-w-lg">
          <div className="font-inter text-left text-6xl leading-tight font-normal">
            <span>Your Gateway</span>
            <br />
            <span>to Extraordinary</span>
            <br />
            <span>Finds</span>
          </div>
          <div className="mt-4 mr-24 text-lg text-[#0F0C29] leading-tight">
            <span className="">
              Unlock deals, bid smart, and seize the moment
            </span>
            <br />
            <span>with our online bidding bonanza!</span>
          </div>
          <button className="mt-6 inline-flex items-center bg-gradient-to-r from-[#1D4ED8] to-[#5AD7FE] text-white font-normal text-[16px] leading-[20.83px] rounded-full px-8 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            Watch Video
          </button>
        </div>

        {/* Right Section: Image and Speech Bubbles */}
        <div className="absolute lg:bottom-[14rem] lg:right-[30rem]">
          <img
            src={girlImage}
            alt="Girl with phone"
            className="relative z-10 lg:w-[920px] lg:h-[620px]"
          />

          {/* Speech Bubble 1 */}
          {/* <div className="absolute top-0 right-20 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2 z-20">
            <img src="" alt="User avatar" className="w-8 h-8 rounded-full" />
            <span className="text-sm text-gray-700">Overall Fantastic!</span>
          </div> */}

          {/* Speech Bubble 2 */}
          <div className="absolute lg:bottom-36 lg:left-[10rem] bg-purple-500 text-white shadow-lg rounded-lg p-4 flex items-center space-x-2 z-20">
            <img
              src={profilePhoto}
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">
              Seamless, lightweight! Loving this site.
            </span>
          </div>
          <div className="flex absolute lg:top-[10rem] lg:right-[42rem] w-7 h-4">
            <div className="relative">
              <div class="w-64 h-32 bg-[#5C28D4] rounded-tl-full "></div>
            </div>
            <div className="relative">
              <div class="w-64 h-32 bg-white rounded-tl-full rounded-bl-full"></div>
              <div class="absolute top-0 w-64 h-32 bg-[#5C28D4] rounded-br-full "></div>
            </div>
          </div>

          {/* Decorative Shapes */}
          {/* <div className="absolute z-0 top-4 right-0 w-[300px] h-[300px] bg-blue-500 rounded-full"></div>
          <div className="absolute z-0 bottom-16 left-0 w-[200px] h-[200px] bg-pink-500 rounded-full"></div> */}
        </div>
      </div>
      {/* Explore Auction Section */}
      <div className="mt-48 px-40">
        <h2 className="text-4xl font-bold mb-4">
          <span>Explore </span>
          <span className="text-blue-600">Auctions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {auctions.map((auction) => (
            <Auction
              key={auction._id}
              auctionTitle={auction.title}
              auctionImage={auction.imageLink}
              startingBid={auction.startingBid}
              currentBid={auction.currentBid}
              endDate={auction.endDate}
              showBidButton={true}
              auctionId={auction._id}
              showBorder={true}
            />
          ))}
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ExploreIntro;
