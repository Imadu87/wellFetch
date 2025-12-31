import React from "react";

export default function Choose() {
  const items = [
    {
      id: 1,
      icon: "/choose/Vector_1.png",
      title: "EASE ALLERGIES",
      description: "Provides relief from environmental triggers.",
    },
    {
      id: 2,
      icon: "/choose/Vector_1.png",
      title: "BOOST IMMUNITY",
      description: "Supports a strong immune system naturally.",
    },
    {
      id: 3,
      icon: "/choose/Vector_1.png",
      title: "HEALTHY DIGESTION",
      description: "Promotes better nutrient absorption.",
    },
    {
      id: 4,
      icon: "/choose/Vector_1.png",
      title: "SHINY COAT",
      description: "Improves skin & coat health.",
    },
  ];

  return (
    <section className="w-full flex justify-center ">
      <div
        className="w-full flex flex-col lg:flex-row justify-center p-[40px] md:p-[60px] lg:p-[80px] items-center"
        style={{ minHeight: "633px" }}
      >
        {/* Left Section: Text + Items */}
        <div className="w-full flex flex-col gap-[28px]">
          {/* Top Section */}
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-abeezee font-normal text-[32px] md:text-[52px] leading-[96%] tracking-[-0.83px] text-[#D8A85B]">
              Why Choose Us?
            </h1>
            <p className="font-poppins font-normal text-[16px] leading-[100%] text-[#000000]">
              Your pet’s health and well-being are our top priority.
            </p>
          </div>

          {/* Bottom Section: 2x2 grid items */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[28px]">
            {items.map((item) => (
              <div key={item.id} className="flex gap-[18px] h-[82px] items-start">
                <div className="w-[24px] h-[24px] flex">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h2 className="font-poppins font-[600] text-[20px] leading-[100%] text-[#000000]">
                    {item.title}
                  </h2>
                  <p className="font-poppins font-[400] text-[16px] leading-[100%] text-[#9A9A9A]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[734px] flex justify-center lg:justify-end items-start mt-0">
          <img
            src="/choose/dogImg.png"
            alt="Section 2 Image"
            className="w-[516px] h-[473px] object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
