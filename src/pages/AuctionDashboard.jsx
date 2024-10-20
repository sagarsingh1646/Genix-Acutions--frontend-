import React, { useEffect, useState } from 'react';
import Auction from '../components/Auction';
import Navbar from '../components/Navbar';
import { useRecoilState } from "recoil";
import { authState } from '../recoil/authState';

const AuctionDashboard = () => {
    const [auctions, setAuctions] = useState([]);
    const [isLogged, setIsLogged] = useRecoilState(authState);
    const [userName, setUserName] = useState(''); // State for user name

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch('http://13.201.80.101:3002/api/v1/auctions');
                const data = await response.json();
                setAuctions(data);
            } catch (error) {
                console.error('Error fetching auction data:', error);
            }
        };

        const fetchUserDetails = async () => {
            const authToken = localStorage.getItem('authToken');
            try {
                const response = await fetch('http://13.201.80.101:3002/api/v1/users/me', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${authToken}`, // Pass the token in Authorization header
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUserName(userData.firstName); // Update state with user's first name
                } else {
                    console.error('Failed to fetch user details.');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchAuctions();
        fetchUserDetails(); // Fetch user details after auctions
    }, []);

    return (
        <div>
            <Navbar isLogged={isLogged} colour={"pink"} />
            <div className="min-h-screen tablet:mt-24">
                <div className="mx-auto py-10 desktop:px-60 tablet:px-36">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        Welcome <span className="text-blue-600">{userName}!</span>
                    </h1>
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
                </div>
            </div>
        </div>
    );
};

export default AuctionDashboard;
