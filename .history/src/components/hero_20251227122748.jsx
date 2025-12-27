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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [1, 2, 3];

  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-6 sm:gap-8 pb-6 sm:pb-10">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4xl:max-w-[2400px]">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="!w-full"
            >
              {slides.map((s) => (
                <SwiperSlide key={s}>
                  <div
                    className={`w-full aspect-[1440/485] sm:aspect-[1440/520] lg:aspect-[1440/560] bg-center bg-no-repeat bg-cover bg-[url('/hero/hero.png')]`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
