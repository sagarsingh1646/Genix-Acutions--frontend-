import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Auction = ({
    auctionId,
    startingBid,
    currentBid,
    endDate,
    auctionTitle,
    auctionImage,
    showBidButton,
    showBorder 
}) => {
    const [timeRemaining, setTimeRemaining] = useState('');
    console.log("aucID", auctionId);

    const calculateTimeRemaining = () => {
        const now = new Date();
        const end = new Date(endDate);
        const totalSeconds = Math.floor((end - now) / 1000);

        if (totalSeconds <= 0) {
            setTimeRemaining('Auction Ended');
            return;
        }

        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        setTimeRemaining(`${days} day${days !== 1 ? 's' : ''} ${hours} hr${hours !== 1 ? 's' : ''} ${minutes} min${minutes !== 1 ? 's' : ''}`);
    };

    useEffect(() => {
        calculateTimeRemaining(); // Calculate initially
        const intervalId = setInterval(calculateTimeRemaining, 60000); // Update every minute

        return () => clearInterval(intervalId); 
    }, [endDate]);

    return (
        <div className={`max-w-xs rounded-lg p-4 ${showBorder ? 'border shadow-sm' : ''}`}>
            <div className="relative">
                <img src={auctionImage} alt={auctionTitle} className="w-full h-48 object-cover rounded-sm" />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>

            <div className="p-1">
                <span className="inline-block text-xs text-white font-semibold bg-[#21A67A] py-[4.5px] px-[12px] rounded-md opacity-100">
                    Live Auction
                </span>

                <h2 className="mt-2 font-manrope text-base font-semibold leading-[21.86px] text-left">
                    {auctionTitle}
                </h2>

                <div className="mt-4 font-manrope flex justify-between">
                    <p className="text-gray-500">Minimum Bid</p>
                    <p className="text-xl font-bold">${startingBid}</p>
                </div>

                <div className="mt-2 font-manrope flex justify-between">
                    <p className="text-gray-500">Current Bid</p>
                    <p className="text-xl font-bold">${currentBid}</p>
                </div>

                <div className="mt-2 font-manrope flex">
                    <p className="text-gray-500">Ends in :</p>
                    <p className="text-base">{timeRemaining}</p>
                </div>

                {showBidButton && (
                    <Link to={`/auctions/${auctionId}`}>
                        <button className="mt-4 w-full bg-gradient-to-r from-[#DB2721] to-[#5AD7FE] text-white py-2 rounded-lg">
                            Bid now &nbsp; →
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Auction;
