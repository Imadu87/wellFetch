import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  relative z-50 ">
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 3xl:px-32">
        {/* CONTENT CONTAINER */}
        <div
          className="
        mx-auto
        w-full
      
        flex items-center justify-between
        py-3
      "
        >
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/logos/logo.png"
              alt="Logo"
              className="h-10 sm:h-12 md:h-14"
            />
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-4 lg:gap-6 xl:gap-8">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-[#4C9E84] text-white px-4 py-2 rounded-3xl text-sm sm:text-base">
              Sign In
            </button>
            <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <img src="/icons/cart.png" alt="Cart" className="w-6 sm:w-8" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose size={26} /> : <GiHamburgerMenu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-white z-40
          flex flex-col items-center justify-center gap-6
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-lg"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        {/* MOBILE BUTTON (ADDED) */}
        <button
          className="
            mt-6
            px-6 py-3
            bg-[#4C9E84]
            text-white
            rounded-full
            text-sm
            font-semibold
          "
          onClick={() => setMenuOpen(false)}
        >
          SIGN IN
        </button>
      </div>
    </header>
  );
}
