import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="w-full flex justify-center">
      {/* Container */}
      <div
        className="w-full flex flex-col relative bg-[#AB345C] px-4 sm:px-10 lg:px-24 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24"
        style={{
          backgroundImage: "url('/banner/Paws.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Bottom left image */}
        <img
          src="/banner/Dog.png"
          alt="Left Decoration"
          className="absolute bottom-0 left-0 w-[35%] sm:w-[28%] md:w-[22%] lg:w-[20%] max-h-[85%] object-contain pointer-events-none"/>

        {/* Content container */}
        <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center px-4 sm:px-10 md:px-16">
          {/* Headline */}
          <h1 className="text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] sm:leading-[1.0] md:leading-[1.0] tracking-[-0.4px] sm:tracking-[-0.7px] md:tracking-[-0.83px] font-normal font-abeezee text-[#D8A85B]">
            Daily wellness,
            <br />
            <span>delivered</span>{" "}
            <span className="italic text-white">monthly.</span>
          </h1>

          {/* Subtext */}
          <p className="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] sm:leading-[24px] md:leading-[28px] font-poppins text-white max-w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px]">
            <span>Premium, science-backed supplements for your dog.</span>
            <br />
            <span>Subscribe today and save 15% on every order.</span>
          </p>

          {/* Shop Now Button */}
          <button className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-2 sm:py-3 h-[40px] sm:h-[48px] bg-white rounded-[73px] mt-5 sm:mt-6 md:mt-8">
            <span className="text-[#AA335B] font-poppins font-medium text-[14px] sm:text-[16px] md:text-[18px]">
              Shop Now
            </span>
            <div className="w-5 sm:w-6 md:w-6 h-5 sm:h-6 md:h-6 text-[#D8A85B] flex items-center justify-center rounded-full">
              <FaArrowRight className="w-2.5 sm:w-3 md:w-3 h-2.5 sm:h-3 md:h-3" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
