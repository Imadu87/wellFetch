import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full flex justify-center">
      <div
        className="w-full bg-no-repeat bg-cover bg-center flex flex-col gap-12 pt-10 px-4 md:px-10 lg:px-40 pb-6"
        style={{
          backgroundImage: "url('/footer/bg.png')",
        }}
      >
        {/* Inner white section */}
        <div className="w-full bg-white rounded-2xl flex flex-col gap-12 p-6 md:p-10">
          {/* Flex container for all 3 sections */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 1st Section: Logo + Text */}
            <div className="flex flex-col w-full lg:w-[416px] gap-4">
              <img
                src="/footer/Logo.png"
                alt="Logo"
                className="w-[180px] lg:w-[218.78px]"
              />
              <p className="font-poppins font-normal text-[14px] leading-[140%] text-black">
                Premium, vet-formulated supplements for{" "}
                <br className="hidden sm:block" />
                dogs. Keeping tails wagging since 2025.
              </p>
            </div>

            {/* 2nd Section: Quick Links & Help */}
            <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-auto">
              {/* Quick Links */}
              <div className="flex flex-col gap-7">
                <h4 className="font-poppins font-medium text-[10px] leading-[140%] uppercase text-[#4A4A4A] tracking-[4%]">
                  Quick Links
                </h4>
                <div className="flex flex-col gap-1">
                  {[
                    "Home",
                    "Shop",
                    "Allergy Chews",
                    "Probiotic Chews",
                    "Blogs",
                  ].map((link, idx) => (
                    <p
                      key={idx}
                      className="font-poppins font-normal text-[16px] leading-[140%] capitalize"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>

              {/* Help */}
              <div className="flex flex-col gap-7">
                <h4 className="font-poppins font-medium text-[10px] leading-[140%] uppercase text-[#4A4A4A] tracking-[4%]">
                  Help
                </h4>
                <div className="flex flex-col gap-1">
                  {["Manage Subscription", "Contact Us"].map((link, idx) => (
                    <p
                      key={idx}
                      className="font-poppins font-normal text-[16px] leading-[140%] capitalize"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* 3rd Section: Request a call + contact info */}
            <div className="flex flex-col gap-4 lg:ml-auto items-start lg:items-end text-left lg:text-right">
              <button
                className="font-poppins font-semibold text-[14px] leading-[140%] text-white"
                style={{
                  width: "132px",
                  height: "36px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#000000",
                }}
              >
                Request a call
              </button>
              <div className="flex flex-col max-w-[216px] gap-1 text-left lg:text-right">
                <p className="font-poppins font-normal text-[12px] leading-[130%] text-black">
                  +1 (999) 999-99-99
                </p>
                <p className="font-poppins font-normal text-[12px] leading-[130%] text-black">
                  info@wellfetch.com
                </p>
                <p className="font-poppins font-normal text-[12px] leading-[130%] text-black">
                  Pet Store Ltd, 123 High Street <br /> Manchester, M1 2AB
                  United Kingdom
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Icon */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-2">
            <div></div>
            <div className="flex gap-2">
              {["amazon", "whatsapp", "facebook"].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center"
                >
                  <img
                    src={`/footer/${icon}.png`}
                    alt={icon}
                    className="w-[40px] h-[40px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower CTA section */}
        <div className="w-full max-w-[1360px] flex flex-col lg:flex-row gap-6 px-4">
          <h1 className="w-full lg:max-w-[672px] font-poppins font-bold text-[24px] sm:text-[28px] lg:text-[36px] leading-[100%] tracking-[-0.02em] text-white">
            Get 10% off your first order plus <br />
            expert dog health tips.
          </h1>

          {/* Form */}
          <form className="w-full lg:max-w-[672px] flex flex-col gap-2">
            <p className="font-poppins font-medium text-[14px] leading-[100%] text-white">
              Join the pack
            </p>

            {/* Input Field */}
            <div className="w-full h-[56px] flex items-center justify-between pt-2 pb-2 pl-4 pr-4 sm:pr-6 border border-white/30 rounded-[12px]">
              <div className="flex flex-col gap-1">
                <span className="font-poppins font-medium text-[10px] leading-[140%] tracking-[0.04em] uppercase text-white/50">
                  Your email
                </span>
                <input
                  type="email"
                  placeholder="@gmail.com"
                  className="flex-1 h-[22px] bg-transparent outline-none font-poppins font-normal text-[16px] leading-[140%] text-white placeholder:text-white/70"
                />
              </div>
              <FaArrowRight className="text-white flex-shrink-0" />
            </div>
          </form>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-white px-4">
          <p className="font-poppins font-normal text-[12px] leading-[140%] tracking-[0%]">
            © 2025 — Copyright
          </p>
          <p className="font-poppins font-normal text-[12px] leading-[140%] tracking-[0%]">
            Privacy
          </p>
        </div>
      </div>
    </section>
  );
}
