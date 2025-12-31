import React from "react";
import { Link } from "react-router-dom";
import Review from "./review";
import Products from "../home/products";

export default function ProductDetails() {
  return (
    <>
      {/* Main Content */}
      <section className="w-full flex flex-col gap-4 md:gap-8 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-4 md:py-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
          <Link
            to="/shop"
            className="text-[#00000099] hover:text-gray-900 transition-colors text-[16px] md:text-[18px]"
          >
            Shop
          </Link>
          <span className="text-gray-400">
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
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
          </span>
          <span className="text-[16px] md:text-[18px] font-medium">
            Allergy Soft Chews
          </span>
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-center gap-5 md:gap-10">
          <div className="w-full flex flex-col md:flex-row items-start  justify-between gap-3 md:gap-4 lg:gap-5">
            {/* images */}
            <div className="flex items-center gap-7 md:gap-15">
              {/* sub images */}
              <div className="hidden md:flex flex-col gap-3 lg:gap-3.5 h-64 sm:h-80 lg:h-96 justify-between">
                {["1", "2", "3"].map((i) => (
                  <img
                    key={i}
                    src={"/products/product_1.png"}
                    alt="main"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 aspect-square object-cover rounded-xl border cursor-pointer border-gray-400 transition"
                  />
                ))}
              </div>
              {/* main image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src="/products/product_1.png"
                  alt="main"
                  className="w-full h-full object-cover object-center rounded-xl border border-gray-400"
                />
              </div>
            </div>

            {/* details */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full md:flex-1">
              {/* details name etc */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                {/* price stars */}
                <div className="flex flex-col items-start md:items-start gap-3 md:gap-4 lg:gap-5">
                  {/* name stars price */}
                  <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                    <h1 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      Allergy Soft Chews
                    </h1>
                    <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <span className="text-lg sm:text-xl md:text-2xl">
                          ⭐⭐⭐⭐⭐
                        </span>
                        <span className="text-xs sm:text-sm md:text-base text-gray-600">
                          4.5 / 5
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* price */}
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                      <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                        $100
                      </span>
                      <span className="line-through text-gray-400 text-xl md:text-2xl xl:text-3xl font-bold">
                        $139
                      </span>
                    </div>
                    <div
                      className="rounded-xl px-2 py-1 md:px-3 md:py-1.5"
                      style={{ backgroundColor: "#FF33331A" }}
                    >
                      <span className="text-[#FF3333] text-xs sm:text-sm md:text-base font-semibold">
                        -20%
                      </span>
                    </div>
                  </div>

                  {/* description */}
                  <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8">
                    <p className="font-poppins text-sm 2xl:text-xl text-[#00000099]">
                      Our scientifically formulated Allergy Soft Chews are
                      designed to help dogs struggling with seasonal allergies.
                      Packed with Omega-3s and Colostrum, they support a healthy
                      immune system and maintain normal histamine levels.
                    </p>
                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                      <h1 className="font-poppins text-xl md:text-2xl ">
                        Key Ingredients
                      </h1>
                      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                        {["Salmon Oil", "Enzymes", "Fibres", "Protein"].map(
                          (item) => (
                            <span
                              key={item}
                              className="px-3 py-1 rounded-full bg-[#D8A85B] text-sm"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* buttons */}
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 rounded-2xl bg-[#D8A85B1A] p-4 md:p-6 w-full">
                  {/* Subscribe & Save Option */}
                  <div className="flex flex-row items-start sm:items-center justify-between gap-4 md:gap-6 rounded-xl border border-[#FF3333] px-4 sm:px-5 py-4 md:p-5">
                    <div className="flex items-start sm:items-center gap-3 md:gap-4 flex-1">
                      <input
                        type="radio"
                        name="purchase-option"
                        value="subscribe"
                        defaultChecked
                        className="w-5 h-5 md:w-6 md:h-6 mt-1 sm:mt-0 shrink-0 accent-[#FF3333]"
                      />
                      <div className="flex-1">
                        <span className="font-poppins font-semibold text-sm md:text-base block">
                          Subscribe & Save 15%
                        </span>
                        <p className="text-[#4A4A4A] text-xs md:text-sm">
                          Delivered every 30 days. Cancel anytime
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:gap-3 shrink-0">
                      <span className="text-base md:text-lg font-semibold text-[#FF3333]">
                        $85
                      </span>
                      <span className="line-through text-base md:text-lg text-[#4A4A4A]">
                        $100
                      </span>
                    </div>
                  </div>

                  {/* One-Time Purchase Option */}
                  <div className="flex flex-row items-start sm:items-center justify-between gap-4 md:gap-6 rounded-xl border border-[#FF3333] px-4 sm:px-5 py-4 md:p-5">
                    <div className="flex items-start sm:items-center gap-3 md:gap-4 flex-1">
                      <input
                        type="radio"
                        name="purchase-option"
                        value="one-time"
                        className="w-5 h-5 md:w-6 md:h-6 mt-1 sm:mt-0 shrink-0 accent-[#FF3333]"
                      />
                      <div className="flex-1">
                        <span className="font-poppins font-semibold text-sm md:text-base block">
                          One-Time Purchase
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 shrink-0">
                      <span className="text-base md:text-lg font-semibold text-black">
                        $139
                      </span>
                    </div>
                  </div>
                </div>

                
              </div>
              {/* Subscription */}
              <div>
                {/* Quantity and Buttons */}
                <div className="flex flex-row gap-3 md:gap-4 w-full">
                  <div className="flex items-center gap-4 border border-gray-300 rounded-full px-4 py-2 md:py-3 shrink-0">
                    <button className="text-lg md:text-xl font-bold text-gray-600 hover:text-gray-900 transition">
                      −
                    </button>
                    <span className="text-base md:text-lg font-semibold min-w-[30px] text-center">
                      1
                    </span>
                    <button className="text-lg md:text-xl font-bold text-gray-600 hover:text-gray-900 transition">
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-[#000000] text-white font-semibold py-2.5 md:py-3 rounded-full  transition text-sm md:text-base">
                    Start Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review */}
        <Review />
        {/* products */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            You may also like
          </h2>
            <Products />
        </div>
      </section>
    </>
  );
}