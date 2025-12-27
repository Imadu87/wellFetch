// import React from "react";

// export default function Hero() {
//   return (
//     <section className="w-full flex justify-center">
//       <div className="w-full  flex flex-col gap-[28px] pb-[40px]">
//         {/* Hero Image */}
//         <div
//           className="
//         w-12/12
//         aspect-[1440/485]
//         bg-[url('/hero/hero.png')]
//         bg-center
//         bg-no-repeat
//         bg-contain
//       "
//         ></div>

//         {/* Dots */}
//         <div className="flex justify-center items-center gap-[8px]">
//           <span className="w-[15.45px] h-[15.45px] rounded-full bg-[#D8A85B]" />
//           <span className="w-[11.36px] h-[11.36px] rounded-full bg-gray-900" />
//           <span className="w-[11.36px] h-[11.36px] rounded-full bg-gray-900" />
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex justify-center border ">
      <>
        {/* Full width wrapper */}
        <div className="w-full flex flex-col gap-6 sm:gap-8 pb-6 sm:pb-10">
          {/* Hero Image */}
          <div className="w-full flex justify-center">
            <div
              className="
              w-full
              max-w-[1440px]
              2xl:max-w-[1600px]
              3xl:max-w-[2000px]
              4xl:max-w-[2400px]

              aspect-[1440/485]
              sm:aspect-[1440/520]
              lg:aspect-[1440/560]

              bg-[url('/hero/hero.png')]
              bg-center
              bg-no-repeat
              bg-cover
            "
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D8A85B]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-900" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-900" />
          </div>
        </div>
      </>
    </section>
  );
}
