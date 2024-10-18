import React, { useEffect, useState } from 'react';
import Auction from '../components/Auction';

const AuctionDashboard = () => {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/v1/auctions');
                const data = await response.json();
                setAuctions(data);
            } catch (error) {
                console.error('Error fetching auction data:', error);
            }
        };

        fetchAuctions();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="mx-auto py-10 px-60">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Welcome <span className="text-blue-600">Olivia!</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {auctions.map((auction) => (
                        <Auction
                            key={auction._id}
                            auctionTitle={auction.title}
                            auctionImage="src/assets/sony-headphone.png" // Adjust as needed
                            startingBid={auction.startingBid}
                            currentBid={auction.currentBid}
                            endDate={auction.endDate}
                            showBidButton={true}
                            auctionId={auction._id}
                            showBorder={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuctionDashboard;
