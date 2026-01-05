import React from "react";
import ReviewCard from "./reviewCard";

export default function Review({ reviews }) {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-10 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-4xl font-bold">Rating & Reviews</h2>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Filter & Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-sm md:text-base lg:text-2xl font-bold">
              All Reviews:
            </h2>
            <span className="text-base text-gray-600">(451)</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="p-2 md:p-2.5 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
              aria-label="Filter reviews"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <line
                  x1="4"
                  y1="4"
                  x2="4"
                  y2="14"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="4" cy="17" r="2" fill="currentColor" />
                <line
                  x1="12"
                  y1="3"
                  x2="12"
                  y2="11"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="14" r="2" fill="currentColor" />
                <line
                  x1="20"
                  y1="6"
                  x2="20"
                  y2="16"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="19" r="2" fill="currentColor" />
              </svg>
            </button>

            <select className="px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-red-50 text-sm md:text-base outline-none hover:bg-red-100 transition-colors">
              <option>Latest</option>
              <option>Oldest</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
            </select>

            <button className="px-4 md:px-6 py-2 md:py-2.5 rounded-xl bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors whitespace-nowrap">
              Write Review
            </button>
          </div>
        </div>

        {/* Review Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <ReviewCard />
        </div> */}

        {!reviews || reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="flex justify-center pt-4">
          <button className="px-8 py-3 rounded-3xl border border-gray-300 bg-[#D8A85B] transition-colors font-medium text-sm md:text-base text-white">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
