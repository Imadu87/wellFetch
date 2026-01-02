import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Account() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full flex flex-col gap-6 px-4 sm:px-6 lg:px-10 xl:px-16 py-6 mt-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-400">›</span>
        <span className="font-medium">My Account</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden w-fit border border-gray-300 rounded-lg px-4 py-2 text-sm"
      >
        ☰ Account Menu
      </button>

      {/* Overlay (mobile only) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <div className="flex gap-6">
        {/* LEFT SIDEBAR */}
        <aside
          className={`
            fixed md:static top-0 left-0 h-full md:h-auto
            w-3/4 sm:w-1/2 md:w-1/4
            bg-white z-50
            border border-gray-200 rounded-lg
            p-5
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          {/* Close button (mobile) */}
          <div className="flex justify-end md:hidden mb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl font-bold"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {/* Account */}
            <div>
              <h2 className="font-semibold mb-2">Manage My Account</h2>
              <ul className="flex flex-col gap-2 pl-3 text-sm">
                <li>
                  <NavLink to="profile" className={({ isActive }) =>
                    isActive
                      ? "text-[#D8A85B]"
                      : "text-gray-600"
                  }>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="address" className={({ isActive }) =>
                    isActive
                      ? "text-[#D8A85B]"
                      : "text-gray-600"
                  }>
                    Address Book
                  </NavLink>
                </li>
                <li>
                  <NavLink to="payment" className={({ isActive }) =>
                    isActive
                      ? "text-[#D8A85B]"
                      : "text-gray-600"
                  }>
                    Payment Options
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Subscriptions */}
            <div>
              <h2 className="font-semibold mb-2">My Subscriptions</h2>
              <ul className="flex flex-col gap-2 pl-3 text-sm">
                <li>
                  <Link to="/account" className="text-gray-600">
                    Active
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="text-gray-600">
                    Paused
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <Outlet />
      </div>
    </section>
  );
}
