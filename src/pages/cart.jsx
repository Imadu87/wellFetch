import React from "react";
import { Link, Links } from "react-router-dom";

export default function Cart() {
  return (
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
        <span className="text-[16px] md:text-[18px] font-medium">Cart</span>
      </div>

      {/* Cart Content */}
      <div className="flex gap-6 lg:gap-10 flex-col lg:flex-row">
        {/* Left Side - Cart Items */}
        <div className="flex-1 border border-[#0000001A] rounded-lg p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-5 md:gap-7 lg:gap-10">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Your Cart
            </h2>
            {/* image and details */}
            <div className="flex gap-4 md:gap-6 lg:gap-8">
              <div className="flex">
                <img
                  src="/products/product_1.png"
                  alt="Product"
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                  {/* left side details */}
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                      Allergy Soft Chews
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                      Quantity: 2
                    </p>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                      Net wt: 300g
                    </p>
                  </div>
                  <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
                    $565
                  </h2>
                </div>

                  {/* right side remove button and quantity increase */}
                  <div className="flex flex-col items-center justify-between gap-4 ml-4">
                    <button className="text-red-500 hover:text-red-700 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                      <button className="text-gray-600 hover:text-gray-900 font-bold text-lg">-</button>
                      <span className="text-sm md:text-base font-semibold min-w-[24px] text-center">6</span>
                      <button className="text-gray-600 hover:text-gray-900 font-bold text-lg">+</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-96 border border-[#0000001A] rounded-lg p-4 md:p-6 h-fit">
          <div className="flex flex-col gap-4 md:gap-5">
            <h3 className="font-bold text-xl md:text-2xl">Order Summary</h3>
            
            {/* Order Details */}
            <div className="flex flex-col gap-3 border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">Subtotal</span>
                <span className="font-semibold text-sm md:text-base">$565</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-sm md:text-base">Discount (-20%)</span>
                <span className="font-semibold text-sm md:text-base text-[#FF3333]">-$113</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">Delivery Fee</span>
                <span className="font-semibold text-sm md:text-base">$20</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-2">
              <span className="font-bold text-lg md:text-xl">Total</span>
              <span className="font-bold text-lg md:text-xl">$472</span>
            </div>

            {/* Promo Code */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🏷️</span>
                <input
                  type="text"
                  placeholder="Promo code"
                  className="w-full pl-10 pr-3 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B]"
                />
              </div>
              <button className="bg-black text-white font-semibold px-4 md:px-5 py-2.5 md:py-3 rounded-2xl transition-colors text-sm md:text-base">
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout">
            <button className="w-full bg-black text-white font-bold py-3 md:py-4 rounded-2xl transition-colors flex items-center justify-center gap-2">
              Go to Checkout
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
