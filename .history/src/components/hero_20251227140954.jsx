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
  // return (
  //   <div className="w-full flex justify-center bg-amber-400">jfajsdfklasdj</div>
  // );
  return (
    <section className="w-full flex justify-center ">
      <div className="w-full flex flex-col gap-6 sm:gap-8 pb-6 sm:pb-10">
        <div className="w-full flex justify-center">
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ el: ".hero-pagination-container", clickable: true }}
              navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
              className="hero-swiper "
            >
              {slides.map((s) => (
                <SwiperSlide key={s}>
                  <div className="w-full aspect-[1440/485] sm:aspect-[1440/520] lg:aspect-[1440/560] overflow-hidden">
                    <img
                      src="/hero/hero.png"
                      alt={`hero-${s}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hero-pagination-container mt-6 lg:mt-12 flex justify-center" />
            <div className="hero-pagination-container mt-3 flex items-center justify-between max-w-[920px] mx-auto w-full px-4">
              <button aria-label="Previous" className="hero-prev flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="flex-1 flex justify-center">
                <div className="swiper-pagination" />
              </div>
              <button aria-label="Next" className="hero-next flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <style>{`
              .hero-swiper .swiper-button-next,
              .hero-swiper .swiper-button-prev { display: none !important; }
              .hero-pagination-container { position: relative; }
              .hero-pagination-container .swiper-pagination { display: flex; align-items: center; }
              .hero-pagination-container .swiper-pagination-bullet { width: 14px; height: 14px; opacity: 1; background: #111827; margin: 0 6px; border-radius: 9999px; }
              .hero-pagination-container .swiper-pagination-bullet-active { background: #D8A85B; transform: scale(1.15); }
              .hero-prev, .hero-next { border: none; }
              @media (min-width: 640px) {
                .hero-pagination-container .swiper-pagination-bullet { width: 18px; height: 18px; }
                .hero-prev, .hero-next { width: 12; height: 12; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
