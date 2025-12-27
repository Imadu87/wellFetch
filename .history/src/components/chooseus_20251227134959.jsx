import React from "react";

export default function Choose() {
  return (
    <section className="w-full flex justify-center ">
      <div
        className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] p-[40px] md:p-[60px] lg:p-[80px] items-center"
        style={{ minHeight: "633px" }}
      >
        {/* Left Section: Text + Items */}
        <div className="w-full lg:w-[734px] flex flex-col gap-[28px]">
          {/* Top Section */}
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-abeezee font-[400] text-[32px] md:text-[52px] leading-[96%] tracking-[-0.83px] text-[#D8A85B]">
              Why Choose Us?
            </h1>
            <p className="font-poppins font-[400] text-[16px] leading-[100%] text-[#000000]">
              Your pet’s health and well-being are our top priority.
            </p>
          </div>

          {/* Bottom Section: 2x2 grid items */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[28px]">
            {/* Item 1 */}
            <div className="flex gap-[18px] h-[82px] items-start">
              <div className="w-[24px] h-[24px] flex">
                <img
                  src="/choose/Vector_1.png"
                  alt="Icon 1"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h2 className="font-poppins font-[600] text-[20px] leading-[100%] text-[#000000]">
                  EASE ALLERGIES
                </h2>
                <p className="font-poppins font-[400] text-[16px] leading-[100%] text-[#9A9A9A]">
                  Provides relief from environmental triggers.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-[18px] h-[82px] items-start">
              <div className="w-[24px] h-[24px] flex">
                <img
                  src="/choose/Vector_1.png"
                  alt="Icon 2"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h2 className="font-poppins font-[600] text-[20px] leading-[100%] text-[#000000]">
                  BOOST IMMUNITY
                </h2>
                <p className="font-poppins font-[400] text-[16px] leading-[100%] text-[#9A9A9A]">
                  Supports a strong immune system naturally.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-[18px] h-[82px] items-start">
              <div className="w-[24px] h-[24px] flex">
                <img
                  src="/choose/Vector_1.png"
                  alt="Icon 3"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h2 className="font-poppins font-[600] text-[20px] leading-[100%] text-[#000000]">
                  HEALTHY DIGESTION
                </h2>
                <p className="font-poppins font-[400] text-[16px] leading-[100%] text-[#9A9A9A]">
                  Promotes better nutrient absorption.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-[18px] h-[82px] items-start">
              <div className="w-[24px] h-[24px] flex">
                <img
                  src="/choose/Vector_1.png"
                  alt="Icon 4"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h2 className="font-poppins font-[600] text-[20px] leading-[100%] text-[#000000]">
                  SHINY COAT
                </h2>
                <p className="font-poppins font-[400] text-[16px] leading-[100%] text-[#9A9A9A]">
                  Improves skin & coat health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[734px] flex justify-center lg:justify-end items-start mt-0">
          <img
            src="/choose/dogImg.png"
            alt="Section 2 Image"
            className="w-[516px] h-[473px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
