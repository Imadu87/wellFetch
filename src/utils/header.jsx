import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { logout } from "../redux/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact us", path: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-white top-0 z-100">
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 3xl:px-32">
        {/* CONTENT CONTAINER */}
        <div className="mx-auto w-full flex items-center justify-between py-3">
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logos/logo.png"
                alt="Logo"
                className="h-10 sm:h-12 md:h-14"
              />
            </Link>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 uppercase md:text-sm lg:text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#D8A85B] hover:text-[#D8A85B]"
                  : "text-gray-800 hover:text-[#D8A85B]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-[#D8A85B] hover:text-[#D8A85B]"
                  : "text-gray-800 hover:text-[#D8A85B]"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#D8A85B] hover:text-[#D8A85B]"
                  : "text-gray-800 hover:text-[#D8A85B]"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#D8A85B] hover:text-[#D8A85B]"
                  : "text-gray-800 hover:text-[#D8A85B]"
              }
            >
              Contact us
            </NavLink>
          </nav>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-4 relative">
            {!isAuthenticated ? (
              /* NOT LOGGED IN */
              <Link to="/login">
                <button className="bg-[#4C9E84] text-white px-4 py-2 rounded-3xl text-sm sm:text-base">
                  Sign In
                </button>
              </Link>
            ) : (
              /* LOGGED IN */
              <div className="relative group">
                {/* USER ICON */}
                <FaRegUser className="w-6 h-6 cursor-pointer text-gray-800" />

                {/* DROPDOWN */}
                <div
                  className="
          absolute right-0 mt-2 w-40
          bg-white border border-gray-200
          rounded-lg shadow-lg
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200
        "
                >
                  <Link
                    to="/account/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => dispatch(logout())}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* CART */}
            <Link to="/cart">
              <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                <img src="/icons/cart.png" alt="Cart" className="w-6  h-6" />
              </button>
            </Link>
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
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-[#D8A85B] hover:text-[#D8A85B]"
                : "text-gray-800 hover:text-[#D8A85B]"
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        {/* MOBILE BUTTON (ADDED) */}
        {!isAuthenticated ? (
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="mt-6 px-6 py-3 bg-[#4C9E84] text-white rounded-full">
              SIGN IN
            </button>
          </Link>
        ) : (
          <>
            <Link to="/account/profile" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
            <button
              onClick={() => {
                dispatch(logout());
                setMenuOpen(false);
              }}
              className="text-red-600"
            >
              Logout
            </button>
          </>
        )}

        <Link to="/cart">
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
            <img src="/icons/cart.png" alt="Cart" className="w-4 sm:w-6" />
          </button>
        </Link>
      </div>
    </header>
  );
}
