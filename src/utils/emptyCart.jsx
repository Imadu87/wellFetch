import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center mt-10 mb-10">
      {/* Image */}
      <img
        src="/empty.jpg" 
        alt="Empty Cart"
        className="w-48 md:w-64 opacity-80"
      />

      {/* Text */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Your cart is empty
      </h2>
      <p className="text-gray-500 text-sm md:text-base max-w-md">
        Looks like you haven’t added anything to your cart yet. Start shopping
        to see products here.
      </p>

      {/* Button */}
      <Link to="/shop">
        <button className="mt-4 px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
          Go to Shop
        </button>
      </Link>
    </section>
  );
}
