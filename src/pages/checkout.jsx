import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [billingData, setBillingData] = useState({
    firstName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Data:", billingData);
  };
  return (
    <section className="w-full flex flex-col gap-4 md:gap-10 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-4 md:py-10">
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
        <Link
          to="/cart"
          className="text-[#00000099] hover:text-gray-900 transition-colors text-[16px] md:text-[18px]"
        >
          Cart
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
        <span className="text-[16px] md:text-[18px] font-medium">Checkout</span>
      </div>

      {/* Checkout Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
        {/* Billing Details */}
        <div className="flex-1 border border-[#0000001A] rounded-lg p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Billing Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={billingData.firstName}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                Country
              </label>
              <select
                name="country"
                value={billingData.country}
                onChange={handleChange}
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Select Country</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                Street Address*
              </label>
              <input
                type="text"
                name="streetAddress"
                value={billingData.streetAddress}
                onChange={handleChange}
                placeholder="Street no."
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all"
                required
              />
            </div>

            {/* Apartment, Floor (Optional) */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                Apartment, floor, etc.{" "}
                <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                name="apartment"
                value={billingData.apartment}
                onChange={handleChange}
                placeholder="Apartment/floor"
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all"
              />
            </div>

            {/* Town/City */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                Town/City*
              </label>
              <input
                type="text"
                name="city"
                value={billingData.city}
                onChange={handleChange}
                placeholder="Enter City"
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                value={billingData.phone}
                onChange={handleChange}
                placeholder="+1234567890"
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={billingData.email}
                onChange={handleChange}
                placeholder="contact@gmail.com"
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all"
                required
              />
            </div>

            {/* Save Info Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                name="saveInfo"
                id="saveInfo"
                checked={billingData.saveInfo}
                onChange={handleChange}
                className="w-5 h-5 accent-[#D8A85B] cursor-pointer rounded"
              />
              <label
                htmlFor="saveInfo"
                className="text-sm md:text-base text-gray-700 cursor-pointer"
              >
                Save this information for faster check-out next time
              </label>
            </div>

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold py-3 md:py-4 rounded-lg transition-colors mt-6 md:mt-8"
            >
              Continue to Payment
            </button> */}
          </form>
        </div>

        {/* Summary Details */}
        <div className="w-full lg:w-96 border border-[#0000001A] rounded-lg p-4 md:p-6 h-fit">
          <div className="flex flex-col gap-4 md:gap-5">
            <h3 className="font-bold text-xl md:text-2xl">Order Summary</h3>

            {/* Order Details */}
            <div className="flex flex-col gap-3 border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">
                  Subtotal
                </span>
                <span className="font-semibold text-sm md:text-base">$565</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-sm md:text-base">Discount (-20%)</span>
                <span className="font-semibold text-sm md:text-base text-[#FF3333]">
                  -$113
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">
                  Delivery Fee
                </span>
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
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  🏷️
                </span>
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

            {/* bank or cash on delivery */}
           

            <div className="flex flex-col gap-4">
              {/* Bank Transfer Option */}
              <div className="flex items-center gap-2 mb-4 justify-between">
                <div className="flex gap-2 items-center" >
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    className="w-4 h-4 text-black focus:ring-black"
                  />
                  <label
                    htmlFor="bank"
                    className="text-gray-700 font-medium flex items-center gap-2"
                  >
                    Bank Transfer
                  </label>
                </div>

                {/* Example icons */}
                <div className="flex">
                  <img
                    src="/hero/card.png"
                    alt="MasterCard"
                    className="w--[92px] h-6"
                  />
                </div>
              </div>

              {/* Cash on Delivery Option */}
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  className="w-4 h-4 text-black focus:ring-black"
                />
                <label htmlFor="cash" className="text-gray-700 font-medium">
                  Cash on Delivery
                </label>
              </div>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout">
              <button className="w-full bg-black text-white font-bold py-3 md:py-4 rounded-2xl transition-colors flex items-center justify-center gap-2">
                Place Order
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
