import React from "react";

export default function Card() {
  return (
    <div
      className="relative w-full max-w-[394px] h-auto md:h-[284.14px] rounded-[16px]"
      style={{
        borderWidth: "1.39px",
        borderStyle: "solid",
        borderImageSlice: 1,
        borderImageSource: `
      radial-gradient(0% 50% at 50% 50%, #0F0F0F 0%, rgba(21, 21, 21, 0) 100%),
      radial-gradient(198.89% 50% at 50% 50%, #0A7ABF 0%, rgba(255, 255, 255, 0.7) 100%),
      radial-gradient(170.42% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)
    `,
      }}
    >
      {/* Circular Image */}
      <div
        className="absolute -top-9 sm:-top-10 left-9 rounded-full overflow-hidden bg-white z-10"
        style={{
          width: "70.456px",
          height: "70.456px",
        }}
      >
        <img
          src="/testimonials/user_1.png"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Paragraph */}
      <p
        className="absolute font-poppins font-[400] text-[12px] sm:text-[14px] md:text-[16px] leading-[120%] text-white z-20"
        style={{
          width: "calc(100% - 40px)",
          top: "100px",
          left: "20px",
        }}
      >
        WellFetch&apos;s AI vet helped me pick the right probiotic. The delivery
        is always on time. Highly recommend.
      </p>

      {/* Name Text */}
      <p
        className="absolute font-poppins font-[400] text-[14px] sm:text-[16px] md:text-[18px] leading-[120%] text-white z-20"
        style={{
          top: "237.33px",
          left: "20px",
        }}
      >
        Jack
      </p>

      {/* Mask Group / Rectangle */}
      <div className="absolute top-0 left-0 w-full h-[253px] rounded-[11.59px] overflow-hidden z-0">
        <img
          src="/testimonials/bg.png"
          alt="Overlay"
          className="w-full h-full object-cover opacity-5 mix-blend-overlay"
        />
        <div
          className="absolute inset-0 rounded-[11.59px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0.55%, rgba(255, 255, 255, 0) 100%)",
            backdropFilter: "blur(19.468px)",
          }}
        />
      </div>

      {/* Vector on top of overlay */}
      <div
        className="absolute"
        style={{
          width: "157.136px",
          height: "126.544px",
          top: "157.14px",
          left: "18px",
          zIndex: 30,
        }}
      >
        <img
          src="/testimonials/Vector.png"
          alt="Vector Shape"
          className="absolute"
          style={{
            width: "133.96px",
            height: "103.367px",
            top: "22px",
            left: "4.56px",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
