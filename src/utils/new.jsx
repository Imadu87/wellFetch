import React from "react";

export default function New() {
  return (
    <div className="w-full max-w-[394px] h-auto md:h-[284.14px] rounded-[16px]">
      <div className="relative  w-full md:max-w-[394px] rounded-2xl">
        <img src="/testimonials/cardbg.png" alt="bg" />
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
      </div>
    </div>
  );
}
