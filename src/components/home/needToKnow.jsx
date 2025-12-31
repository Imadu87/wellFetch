import React from "react";

export default function NeedToKnow() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full  flex flex-col gap-6 px-4 sm:px-8 md:px-20 py-16 bg-[#F6F6F6]">
        {/* header */}
        <div className="flex flex-col gap-6 mx-auto text-center">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="font-abeezee font-normal text-[28px] sm:text-[36px] md:text-[52px] leading-[1.2] md:leading-[1.1] tracking-[-0.5px] md:tracking-[-0.83px]">
              Everything You Need to <br />
              Know About Us
            </h1>
            <p className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#4A4A4A]">
              We’ve gathered the most common questions to help you <br />
              understand how Wellfetch works
            </p>
          </div>

          {/* FAQ Table */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Top row */}
            <div className="flex justify-between items-start gap-4 p-4 md:p-6 rounded-xl border-2 border-[#FC0000] bg-[#AA335B] shadow-[0px_4px_32px_0px_#9013FE66]">
              {/* Text */}
              <div className="flex-1 flex flex-col items-start gap-2">
                <p className="font-poppins font-bold text-[18px] sm:text-[20px] text-[#D8A85B]">
                  What are enzyme blends, and why are they included?
                </p>
                <p className="font-poppins text-start font-[400] text-[16px] sm:text-[18px] text-white">
                  Enzyme blends help break down proteins, fats, and
                  carbohydrates, making it easier for your dog to digest food
                  and absorb nutrients effectively.
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 flex items-start mt-0">
                <img
                  src="/needs/minus-circle.png"
                  alt="Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex justify-between items-start p-4 md:p-6 rounded-xl border border-[#C9C9C9] bg-white">
              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="font-poppins font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-black">
                  Are the ingredients in this product natural?
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <img
                  src="/needs/plus-circle.png"
                  alt="Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>

            {/* Additional rows */}
            <div className="flex justify-between items-start p-4 md:p-6 rounded-xl border border-[#C9C9C9] bg-white">
              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="font-poppins font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-black">
                  Are the ingredients in this product natural?
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <img
                  src="/needs/plus-circle.png"
                  alt="Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>

            <div className="flex justify-between items-start p-4 md:p-6 rounded-xl border border-[#C9C9C9] bg-white">
              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="font-poppins font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-black">
                  Are the ingredients in this product natural?
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <img
                  src="/needs/plus-circle.png"
                  alt="Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>

            <div className="flex justify-between items-start p-4 md:p-6 rounded-xl border border-[#C9C9C9] bg-white">
              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="font-poppins font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-black">
                  Are the ingredients in this product natural?
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <img
                  src="/needs/plus-circle.png"
                  alt="Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
