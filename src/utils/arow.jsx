import React from "react";

export default function Arrow() {
  return (
    <>
      <div className="flex justify-between items-center mx-auto mt-4 sm:mt-8 md:mt-10 gap-4 sm:gap-6 md:gap-8">
        {/* Left Arrow */}
        <div className="rounded-full flex items-center justify-center cursor-pointer">
          <img src="/testimonials/left.png" alt="Left" className="w-9 h-9" />
        </div>

        {/* Right Arrow */}
        <div className="rounded-full flex items-center justify-center cursor-pointer">
          <img src="/testimonials/right.png" alt="Right" className="w-9 h-9" />
        </div>
      </div>
    </>
  );
}
