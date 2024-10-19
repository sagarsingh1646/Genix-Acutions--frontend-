import React, { useEffect, useState } from "react";
import girlImage from "../assets/excited-girl.png";
import floatingMessage from "../assets/floating-message.png";
import profilePhoto from "../assets/profile-photo.png";
import Auction from "./Auction";
import Footer from "./Footer";
import Spiral from "../assets/Spiral-1.png"
import Rectangle1 from "../assets/Rectangle-12.png"
import Rectangle2 from "../assets/Rectangle-13.png"
import Rectangle3 from "../assets/Rectangle-14.png"
import SecureIicon from "../assets/Secure-Icon.png"

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
    <div className="bg-white tablet:pt-16 desktop:pt-12">
      {" "}
      {/* White background for entire section */}
      <div className="flex flex-col md:flex-row justify-between desktop:items-center tablet:px-28 desktop:px-56">
        {/* Left Section: Text */}
        <div className="text-left mb-48 ">
          <div className="font-inter text-left tablet:text-5xl desktop:text-6xl leading-tight font-normal">
            <span>Your Gateway</span>
            <br />
            <span>to Extraordinary</span>
            <br />
            <span>Finds</span>
          </div>
          <div className="mt-4 dekstop:mr-24 text-lg text-[#0F0C29] leading-tight">
            <span className="">
              Unlock deals, bid smart, and seize the moment
            </span>
            <br />
            <span>with our online bidding bonanza!</span>
          </div>
          <button className="mt-6 inline-flex items-center bg-gradient-to-r from-[#1D4ED8] to-[#5AD7FE] text-white font-normal text-[16px] leading-[20.83px] rounded-full tablet:px-6 desktop:px-8 py-4">
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
        <div className="relative tablet:bottom-[6rem] tablet:right-[8rem] desktop:bottom-[2rem] desktop:right-[12rem]">
          <img
            src={girlImage}
            alt="Girl with phone"
            className="relative z-10 tablet:w-[65rem] desktop:w-[920px] desktop:h-[620px]"
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
          {/* <div className="flex absolute lg:top-[10rem] lg:right-[42rem] w-7 h-4">
            <div className="relative">
              <div class=" tablet:w-64 desktop:w-64 desktop:h-32 bg-[#5C28D4] rounded-tl-full "></div>
            </div>
            <div className="relative">
              <div class="w-64 h-32 bg-white rounded-tl-full rounded-bl-full"></div>
              <div class="absolute top-0 w-64 h-32 bg-[#5C28D4] rounded-br-full "></div>
            </div>
          </div> */}

          {/* Decorative Shapes */}
          {/* <div className="absolute z-0 top-4 right-0 w-[300px] h-[300px] bg-blue-500 rounded-full"></div>
          <div className="absolute z-0 bottom-16 left-0 w-[200px] h-[200px] bg-pink-500 rounded-full"></div> */}
        </div>
        <div className="absolute tablet:top-[26rem] tablet:right-[45rem] desktop:top-[28rem] desktop:right-[55rem]">
            <img src={Spiral} alt="Spiral"
                className="tablet:w-[12rem] desktop:w-[15rem] "
            />
        </div>
        <div className="absolute tablet:top-[22rem] tablet:right-[15rem] desktop:top-[26rem] desktop:right-[27rem]">
            <img src={Rectangle1} alt="Rectangle1"
                className="tablet:w-[16rem] desktop:w-[16rem] "
            />
        </div>
        <div className="absolute tablet:top-[10rem] tablet:right-[30rem] desktop:top-[15rem] desktop:right-[42rem]">
            <img src={Rectangle2} alt="Rectangle2"
                className="tablet:h-[16rem] desktop:h-[16rem] "
            />
        </div>
        <div className="absolute tablet:top-[10rem] tablet:right-[35rem] desktop:top-[14rem] desktop:right-[47rem]">
            <img src={Rectangle3} alt="Rectangle3"
                className="tablet:w-[16rem] desktop:w-[18rem] "
            />
        </div>
        <div className="absolute tablet:top-[7rem] tablet:right-[32rem] desktop:top-[10rem] desktop:right-[43rem]">
            <img src={SecureIicon} alt="SecureIicon"
                className="tablet:w-[5rem] desktop:w-[7rem] "
            />
        </div>
      </div>
      {/* Explore Auction Section */}
      <div className="absolute tablet:top-[38rem] desktop:top-[43rem] tablet:px-28 desktop:px-60">
        <h2 className="text-4xl font-bold mb-4">
          <span>Explore </span>
          <span className="text-blue-600">Auctions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 tablet:gap-3 desktop:gap-12">
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
