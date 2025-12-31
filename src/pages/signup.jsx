import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      {/* HEADER WITH LOGO */}
      <header className="w-full bg-[#D8A85B] shadow-sm py-3 sm:py-4 md:py-5">
        <div className="px-4 sm:px-6 md:px-8 flex items-center justify-center">
          <img
            src="/logos/logo.png"
            alt="Wellfetch Logo"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
        </div>
      </header>

      {/* MAIN SIGNUP CONTAINER */}
      <main className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-8 lg:py-10 flex md:items-center md:justify-center min-h-screen md:min-h-[auto]">
        <div className="w-full md:max-w-md">
          {/* HEADING */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Hello,
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Welcome User!
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-normal">
              We are very happy to see you back!
            </p>
          </div>

          {/* SIGNUP FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* NAME INPUT */}
            <div>
              <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 sm:px-4 md:px-5 
                           py-2 sm:py-2.5 md:py-3
                           text-xs sm:text-sm md:text-base
                           border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-[#D8A85B] focus:border-transparent
                           transition-all duration-200
                           placeholder:text-gray-400"
                required
              />
            </div>

            {/* MOBILE NUMBER INPUT */}
            <div>
              <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-3 sm:px-4 md:px-5 
                           py-2 sm:py-2.5 md:py-3
                           text-xs sm:text-sm md:text-base
                           border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-[#D8A85B] focus:border-transparent
                           transition-all duration-200
                           placeholder:text-gray-400"
                required
              />
            </div>

            {/* EMAIL INPUT */}
            <div>
              <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className="w-full px-3 sm:px-4 md:px-5 
                           py-2 sm:py-2.5 md:py-3
                           text-xs sm:text-sm md:text-base
                           border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-[#D8A85B] focus:border-transparent
                           transition-all duration-200
                           placeholder:text-gray-400"
                required
              />
            </div>

            {/* PASSWORD INPUT */}
            <div>
              <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full px-3 sm:px-4 md:px-5 
                             py-2 sm:py-2.5 md:py-3
                             text-xs sm:text-sm md:text-base
                             border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-[#D8A85B] focus:border-transparent
                             transition-all duration-200
                             placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <AiOutlineEye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD INPUT */}
            <div>
              <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-3 sm:px-4 md:px-5 
                             py-2 sm:py-2.5 md:py-3
                             text-xs sm:text-sm md:text-base
                             border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-[#D8A85B] focus:border-transparent
                             transition-all duration-200
                             placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <AiOutlineEye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* SIGNUP BUTTON */}
            <Link to="/login">
            <button
              type="submit"
              className="w-full bg-[#D8A85B] hover:bg-[#c4945a] text-white
                        px-4 sm:px-6 md:px-8
                        py-2.5 sm:py-3 md:py-3.5
                        text-sm sm:text-base md:text-lg
                        font-semibold rounded-lg
                        transition-all duration-200 shadow-md hover:shadow-lg
                        active:scale-95"
            >
              Sign Up
            </button>
            </Link>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* SOCIAL SIGNUP BUTTONS */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2
                          px-3 sm:px-4 md:px-5
                          py-2 sm:py-2.5 md:py-3
                          border border-gray-300 rounded-lg
                          hover:bg-gray-50 transition-all duration-200"
              >
                <FcGoogle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium hidden sm:inline">
                  Google
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2
                          px-3 sm:px-4 md:px-5
                          py-2 sm:py-2.5 md:py-3
                          border border-gray-300 rounded-lg
                          hover:bg-gray-50 transition-all duration-200"
              >
                <BsMicrosoft className="w-4 h-4 sm:w-5 sm:h-5 text-[#0078D4]" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium hidden sm:inline">
                  Microsoft
                </span>
              </button>
            </div>
          </form>

          {/* LOGIN LINK */}
          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#D8A85B] hover:text-[#c4945a] font-semibold transition-colors duration-200"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
