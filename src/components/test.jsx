import React from "react";
import Card from "../utils/card";
import Arrow from "../utils/arow";
import New from "../utils/new";

export default function Test() {
  return (
    <section className="w-full flex justify-center">
      <div
        className="w-full max-w-[1440px] min-h-[520px] md:min-h-[771px] bg-no-repeat bg-cover bg-center relative bg-[#24263C] pt-16 sm:pt-20 md:pt-[80px]
      pb-16 sm:pb-20 md:pb-[80px]"
        style={{
          backgroundImage: "url('/testimonials/Paws.png')",
        }}
      >
        {/* overlay for opacity */}
        <div className="absolute inset-0 bg-[#24263C]/35" />
        <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20">
          {/* Text Section */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1280px] flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-0">
              {/* Heading */}
              <h2 className="font-abeezee font-normal text-[28px] sm:text-[40px] md:text-[52px] leading-[1.1] md:leading-[96%] tracking-[-0.4px] md:tracking-[-0.83px] text-center text-white">
                Testimonials
              </h2>

              {/* Paragraph */}
              <p className="max-w-[1280px] font-poppins font-normal text-[14px] sm:text-[16px] md:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[28px] text-center text-[#FFFFFF]">
                See real experiences and feedback from our clients as they share
                <br className="hidden sm:block" /> how our products has helped
                them
              </p>
            </div>
          </div>

          {/* Card Section  */}
          {/* Cards Parent Container */}
          <div className="w-full px-4 sm:px-6 lg:px-0 flex justify-center">
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-[31px]">
              {/* Single Testimonial Card */}
              {/* <Card /> */}
              <New />
            </div>
          </div>

          {/* arrow  */}
            <Arrow />
        </div>
      </div>
    </section>
  );
}
