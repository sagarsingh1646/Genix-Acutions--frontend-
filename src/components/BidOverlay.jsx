import React, { useEffect, useState } from "react";
import axios from "axios";

const BidOverlay = ({
  auctionId,
  isOpen,
  onClose,
  auctionTitle,
  minimumBid,
  currentBid,
  timeRemaining,
}) => {
  const [bidAmount, setBidAmount] = useState("");
  const [message, setMessage] = useState(null); // For success or error messages
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [time, setTime] = useState("");

  const calculateTimeRemaining = () => {
    const now = new Date();
    const end = new Date(timeRemaining);
    const totalSeconds = Math.floor((end - now) / 1000);

    if (totalSeconds <= 0) {
      setTime("Auction Ended");
      return;
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    setTime(
      `${days} day${days !== 1 ? "s" : ""} ${hours} hr${
        hours !== 1 ? "s" : ""
      } ${minutes} min${minutes !== 1 ? "s" : ""}`
    );
  };
  useEffect(() => {
    calculateTimeRemaining(); // Calculate initially
    const intervalId = setInterval(calculateTimeRemaining, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem("authToken"); // Retrieve the token from local storage

    try {
      const response = await axios.post(
        "http://13.201.80.101:3002/api/v1/bids",
        {
          auctionId,
          bidAmount: bidAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Add the Bearer token to the headers
          },
        }
      );

      if (response.status === 201) {
        // Success
        setMessage("Bid submitted successfully!");
        setMessageType("success");
      }
    } catch (error) {
      // Error handling
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(error.response.data.message); // Display error message from API
      } else {
        setMessage("An error occurred. Please try again.");
      }
      setMessageType("error");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-sm w-1/3 relative">
          <button className="absolute top-2 right-2 p-1" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-lg font-semibold mb-4">
            Submit Bid |<span> </span>
            <span className="font-normal">{auctionTitle}</span>
          </h2>

          {/* Display the message */}
          {message && (
            <div
              className={`p-2 mb-4 text-center rounded ${
                messageType === "success"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

          <div className="flex flex-row items-center">
            <span className="flex-grow border-t border-gray-200"></span>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Maximum Bid Input */}
            <label className="block mb-4 mt-6">
              Maximum Bid:
              <div className="flex items-center mt-2">
                <span className="bg-gray-200 p-2 rounded-l text-gray-600">
                  $
                </span>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="border p-2 w-full rounded-r"
                  required
                  min={minimumBid}
                />
              </div>
            </label>

            {/* Bid information */}
            <div className="text-sm">
              <div className="flex justify-between">
                <span>Minimum Bid</span>
                <span className="font-bold">${minimumBid}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Current Bid</span>
                <span className="font-bold">${currentBid}</span>
              </div>
              <div className="flex mt-1">
                <span>Ends in : </span>
                <span>{time}</span>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1D4ED8] to-[#5AD7FE] text-white py-2 px-6 rounded-sm shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default BidOverlay;
