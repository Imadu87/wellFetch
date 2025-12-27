// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";

// const navItemClass = "lg:mr-2 xl:mr-4 hover:text-custom-blue";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="flex justify-between items-center w-10/12 m-auto py-2">
//         {/* Logo */}
//         <div className="flex justify-center items-center">
//           <img
//             src="/logos/logo.png"
//             alt="Logo"
//             className="w-[119.17px] h-[42.17px] object-contain"
//           />
//         </div>

//         {/* Desktop Navbar */}
//         <nav className="hidden lg:flex flex-grow justify-center gap-2 lg:gap-3 text-xs md:text-sm lg:text-base">
//           <a href="#" className={`${navItemClass} text-[#D8A85B]`}>
//             Home
//           </a>
//           <a href="#" className={navItemClass}>
//             About
//           </a>
//           <a href="#" className={navItemClass}>
//             Services
//           </a>
//           <a href="#" className={navItemClass}>
//             Contact
//           </a>
//         </nav>

//         {/* Desktop Actions */}
//         <div className="hidden lg:flex items-center gap-[20px]">
//           <button
//             className="
//             border hover:bg-custom-blue text-white  bg-[#AB345C] font-normal py-1 px-2 text-sm rounded-md shadow-md
//             "
//           >
//             SIGN IN
//           </button>

//           <button className="h-[40px] w-[40px] flex items-center justify-center">
//             <img
//               src="/icons/cart.png"
//               alt="Cart"
//               className="w-[24px] h-[24px]"
//             />
//           </button>
//         </div>

//         {/* Hamburger / Cross Icon (Mobile) */}
//         <button
//           className="lg:hidden fixed top-5 right-5 z-50 flex items-center justify-center h-[40px] w-[40px]"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? (
//             <IoMdClose className="w-[24px] h-[24px]" />
//           ) : (
//             <GiHamburgerMenu className="w-[24px] h-[24px]" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay with Smooth Animation */}
//       <div
//         className={`
//     fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-[28px]
//     transition-transform duration-300 ease-in-out
//     ${
//       menuOpen
//         ? "translate-y-0 opacity-100"
//         : "-translate-y-full opacity-0 pointer-events-none"
//     }
//   `}
//       >
//         <a
//           href="#"
//           className={`${navItemClass} text-[#D8A85B]`}
//           onClick={() => setMenuOpen(false)}
//         >
//           Home
//         </a>
//         <a href="#" className={navItemClass} onClick={() => setMenuOpen(false)}>
//           About
//         </a>
//         <a href="#" className={navItemClass} onClick={() => setMenuOpen(false)}>
//           Services
//         </a>
//         <a href="#" className={navItemClass} onClick={() => setMenuOpen(false)}>
//           Contact
//         </a>

//         <button
//           className="
//       h-[40px]
//       px-[24px]
//       bg-[#4C9E84]
//       text-white
//       font-poppins
//       font-semibold
//       text-[16px]
//       uppercase
//       rounded-[39px]
//       flex
//       items-center
//       justify-center
//       mt-[20px]
//     "
//           onClick={() => setMenuOpen(false)}
//         >
//           SIGN IN
//         </button>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  relative z-50 ">
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20">
        {/* CONTENT CONTAINER */}
        <div
          className="
        mx-auto
        w-full
        max-w-[100%]        /* mobile ke liye full width */
        sm:max-w-[640px]    /* small devices */
        md:max-w-[768px]    /* medium devices / tablets */
        lg:max-w-[1024px]   /* laptops */
        xl:max-w-[1280px]   /* large desktops */
        2xl:max-w-[1600px]  /* extra large desktops */
        3xl:max-w-[1800px]  /* ultra large screens */
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
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base">
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
            bg-[#AB345C]
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
