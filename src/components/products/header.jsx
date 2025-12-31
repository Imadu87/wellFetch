import React from "react";
import Products from "./products";

export default function ProductsHeader() {
  return (
    <header className="w-full flex flex-col items-center justify-center py-5  mb-8 gap-12">
      {/* header */}
      <div className="flex flex-col gap-7 items-center justify-center px-4 md:px-6 lg:px-0">
        <h1 className="font-poppins font-bold leading-1 tracking-[0] text-center text-[28px] md:text-[36px] lg:text-[48px] text-[#D8A85B]">
          Our Products
        </h1>
        <p className="font-poppins text-[16px]  2xl:text-[20px] tracking-[0] text-center">
          From allergy relief to tummy tamers, explore our range of
          vet-formulated soft chews designed
          <br className="hidden md:block" /> to keep your dog happy and healthy.
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
          {/* SEARCH BAR */}
          <div className="flex items-center flex-[3] bg-gray-200 rounded-3xl px-4 py-3 gap-3">
            <svg
              className="w-5 h-5 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* FILTER  */}
          <div className="flex flex-[1] items-center gap-2">
            <select
              className="
          flex-1
          h-11 sm:h-12
          bg-black
          text-white
          rounded-full
          px-4
          text-sm sm:text-base
          font-medium
          outline-none
          cursor-pointer
        "
            >
              <option>Latest</option>
              <option>Popular</option>
            </select>

            {/* ICON BUTTON (SMALL) */}
            <button
              className="
          w-11 h-11 sm:w-12 sm:h-12
          bg-black
          rounded-full
          flex items-center justify-center
          flex-shrink-0
          hover:bg-gray-800
          transition-colors
        "
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Left slider */}
                <line
                  x1="4"
                  y1="4"
                  x2="4"
                  y2="14"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="4" cy="17" r="2" fill="currentColor" />

                {/* Middle slider */}
                <line
                  x1="12"
                  y1="3"
                  x2="12"
                  y2="11"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="14" r="2" fill="currentColor" />

                {/* Right slider */}
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
          </div>
        </div>
      </div>

      {/* products  */}
      <Products />

      {/* pagination  */}
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {/* Previous Button */}
        <button className="flex gap-2 items-center p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors group">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>{" "}
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {/* Page 1 - Active */}
          <button
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center transition-colors"
            style={{ backgroundColor: "#0000000F", color: "#000" }}
          >
            1
          </button>

          {/* Page 2 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            2
          </button>

          {/* Page 3 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            3
          </button>

          {/* Dots */}
          <span className="text-gray-400 text-lg font-light">...</span>

          {/* Page 8 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            8
          </button>

          {/* Page 9 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            9
          </button>

          {/* Page 10 */}
          <button className="w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
            10
          </button>
        </div>

        {/* Next Button */}
        <button className="flex gap-2 p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors group">
          <span>Next</span>

          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
