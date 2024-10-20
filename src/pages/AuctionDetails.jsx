import React, { useEffect, useState } from "react";
import Auction from "../components/Auction"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewPerson1 from '../assets/review-person.png'
import LeftArrow from '../assets/left-arrow.png'
import StarImage from '../assets/star.png'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/authState";
import BidOverlay from "../components/BidOverlay";


const AuctionDetails = () => {
  const { auctionId } = useParams();
  const [auctionData, setAuctionData] = useState(null);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useRecoilState(authState)
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  console.log("isLogged from  auction details", isLogged)


  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await axios.get(
          `https://whisperoo.in/api/v1/auctions/${auctionId}`
        );
        setAuctionData(response.data);
        const bidResponse = await axios.get(
          `https://whisperoo.in/api/v1/bids/${auctionId}`
        );
        setBids(bidResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching auction details:", error);
        setLoading(false);
      }
    };
    fetchAuctionDetails();
  }, [auctionId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!auctionData) {
    return <div>Auction not found.</div>;
  }
  console.log("biddata", bids)
  // Sample review data
  const sampleReview = {
    userName: "Kristin Watson",
    userImage: `${ReviewPerson1}`,
    date: "October 18, 2024",
    rating: 5,
    comment: "These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm."
  };

  return (
    <>
      <div>
        <Navbar isLogged={isLogged} colour={"pink"}/>
      </div>
      <div id="main div" className="tablet:mx-24 desktop:mx-48 mt-32 flex gap-6">
        <div id="back button" className="">
        <button
      className="mb-10 desktop:mr-36 text-blueDark flex items-center"
      onClick={() => window.history.back()}
    >
      <img 
        src={LeftArrow}
        alt="Back Icon"
        className="mr-2 w-5 h-5"
      />
      Back to catalog
    </button>
        <div className="">
        <Auction
            startingBid={auctionData.startingBid}
            currentBid={auctionData.currentBid}
            endDate={auctionData.endDate}
            auctionTitle={auctionData.title}
            auctionImage={auctionData.imageLink}
            showBidButton={auctionData.showBidButton}
            auctionId={auctionData._id}
            showBorder={false}
          />
        </div>
        </div>
        <div id="sub-main-div" className="flex gap-6">
          <div>
            <div className="tablet:max-w-2xl desktop:max-w-4xl text-justify">
              <h3
                className="mb-4"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "21.86px",
                  textAlign: "left",
                }}
              >
                Description
              </h3>
              <p
                className="text-gray-600 mt-8 "
                style={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "21.86px",
                  textAlign: "left",
                }}
              >
                Immerse yourself in pristine sound quality with the Sony Black
                Headphones. Crafted for audiophiles and casual listeners alike,
                these headphones deliver an exceptional audio experience with
                deep, resonant bass and crystal-clear highs. The sleek black
                design complements any style, whether you're on the go or
                relaxing at home. Equipped with advanced noise-canceling
                technology, these headphones block out distractions so you can
                enjoy your music, podcasts, or calls without interference.
                Comfort is key with plush ear cushions that provide long-lasting
                comfort for extended listening sessions. Designed for
                convenience, these headphones feature easy-to-use controls for
                adjusting volume, skipping tracks, and taking calls on the go.
                Foldable and compact, they're perfect for travel and storage,
                ensuring you can take your music with you wherever you go.
                Whether you're commuting, working out, or simply unwinding, the
                Sony Black Headphones offer premium sound quality and comfort
                that elevate your listening experience to new heights.
              </p>
              <h3
                className="mb-4 mt-10"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "21.86px",
                  textAlign: "left",
                }}
              >
                Reviews
              </h3>
              <div key="1" className="">
                <div className="flex items-center mb-2">
                  <img
                    src={sampleReview.userImage}
                    alt={sampleReview.userName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex mb-2">
                    {Array(sampleReview.rating)
                      .fill()
                      .map((_, index) => (
                        <img
                          key={index}
                          src={StarImage}
                          alt="Star"
                          className="w-4 h-4" 
                        />
                      ))}
                  </div>
                </div>
                <div className="ml-14">
                  <p className="font-plus-jakarta text-base font-normal leading-[26px] text-left w-4/5">
                    {sampleReview.comment}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-[22px] text-left">
                    {sampleReview.userName}
                  </p>
                  <p className="font-plus-jakarta text-sm font-normal leading-[22px] text-left">
                    {sampleReview.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="bid-list" className="tablet:pl-10 desktop:pl-20 pr-25">
          <ul className="mt-14">
              {bids.map((bid) => (
                <li key={bid._id} className="mt-8  " style={{ fontFamily: "Manrope", fontSize: "16px", fontWeight: 400, lineHeight: "20px", textAlign: "left"}}>
                  {bid.bidder && bid.bidder._id === "" ? (
                    <strong>Your bid is ${bid.amount}</strong>
                  ) : (
                    `• ${bid.bidder ? bid.bidder.firstName : 'Anonymous'} bids $${bid.amount}`
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4">
            <Link to={`/auctions/${auctionId}`}>
                        <button onClick={() => setOverlayOpen(true)} className="mt-4 w-full bg-gradient-to-r from-[#1D4ED8] to-[#5AD7FE] text-white py-2 rounded-lg px-10">
                            Bid now &nbsp; →
                        </button>
                    </Link>
            </div>
            <BidOverlay auctionTitle={auctionData.title} timeRemaining={auctionData.endDate} currentBid={auctionData.currentBid} minimumBid={auctionData.startingBid} auctionId={auctionId} isOpen={isOverlayOpen} onClose={() => setOverlayOpen(false)} /> {/* Overlay component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionDetails;
