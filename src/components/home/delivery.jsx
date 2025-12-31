import React from "react";

const plans = [
  { title: "Monthly Plan", price: "£29/Month" },
  { title: "Quarterly Plan", price: "£79/Month" },
  { title: "Annual Plan", price: "£279/Year" },
];

export default function Delivery() {
  return (
    <section className="w-full overflow-x-hidden flex justify-center bg-white">
      <div className="w-full  min-h-[933px] p-6 sm:p-10 md:p-[80px] flex flex-col gap-10 md:gap-[80px] bg-[#191A20]">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-6 text-white text-center">
          <h2 className="font-abeezee font-normal text-[24px] sm:text-[36px] md:text-[52px] leading-[1.2] md:leading-[1.1] tracking-[-0.5px] md:tracking-[-0.83px]">
            Get Monthly Deliveries and <br />
            Save More
          </h2>
          <p className="font-poppins font-normal text-[14px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px]">
            Never run out of your dog’s essentials again. Convenient, reliable,{" "}
            <br className="hidden sm:block" />
            and delivered right to your doorr.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 justify-center items-center ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-full sm:w-[376px] rounded-[32px] border border-[#8E64EB] flex flex-col items-center p-5 relative"
              style={{
                background: "linear-gradient(180deg, #B695FF 0%, #502CA2 100%)",
              }}
            >
              {/* Pricing Section */}
              <div
                className="w-full flex flex-col justify-center items-center mt-5"
                style={{ gap: "28px" }}
              >
                <p className="font-poppins font-bold text-[28px] sm:text-[36px] text-center text-white">
                  {plan.title}
                </p>
                <p className="font-poppins font-semibold text-[24px] sm:text-[32px] text-center text-white">
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              {/* Features */}
              <div className="w-full flex flex-col mt-8 sm:mt-12 gap-5">
                {["Exclusive Discounts", "Free shipping", "Cancel Anytime"].map(
                  (feature, i) => (
                    <div key={i} className="flex items-center gap-4 sm:gap-5">
                      <img
                        src="/delivery/tick.png"
                        alt="tick"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                      <p className="font-poppins font-medium text-[16px] sm:text-[20px] text-white">
                        {feature}
                      </p>
                    </div>
                  )
                )}

                {/* Button */}
                <div className="flex justify-center w-full mt-6 sm:mt-8">
                  <button
                    className="font-poppins font-bold text-[14px] lg:text-[20px]  text-black"
                    style={{
                      width: "100%",
                      maxWidth: "239.39px",
                      height: "64.37px",
                      backgroundColor: "#D8A85B",
                      borderRadius: "32px",
                      padding: "12px 15px",
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
