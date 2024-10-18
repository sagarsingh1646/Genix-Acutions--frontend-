import React from 'react';

const Product = ({
    startingBid,
    currentBid,
    endDate,
    productTitle,
    productImage,
    showBidButton
}) => {
    return (
        <div className="max-w-xs rounded-lg shadow-lg border p-4">
            <div className="relative">
                <img src={productImage} alt={productTitle} className="w-full h-48 object-cover rounded-sm" />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
                    {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.75a6.75 6.75 0 11-9 9 6.75 6.75 0 019-9zm1.5 7.5h6m-3-3v6"
            />
          </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </button>
            </div>

            <div className="p-4">
                <span className="inline-block text-xs text-white font-semibold bg-[#21A67A] py-[4.5px] px-[12px] rounded-md opacity-100">
                    Live Auction
                </span>

                {/* Product Title */}
                <h2 className="mt-2 font-manrope text-base font-semibold leading-[21.86px] text-left">
                    {productTitle}
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
                    <p className="text-gray-500">Ends in :  </p>
                    <p className="text-base">{endDate}</p>
                </div>

                {showBidButton && (
                    <button className="mt-4 w-full bg-gradient-to-r from-[#1D4ED8] to-[#5AD7FE] text-white py-2 rounded-lg">
                        Bid now &nbsp; →
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
