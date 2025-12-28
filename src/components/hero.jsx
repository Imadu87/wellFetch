import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ el: ".hero-dots", clickable: true }}
              className="hero-swiper"
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

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-6 lg:mt-10">
              <div className="hero-dots flex justify-center items-center gap-2" />
            </div>

            <style>{`
              .hero-swiper .swiper-button-next,
              .hero-swiper .swiper-button-prev { display: none !important; }
              .hero-dots .swiper-pagination-bullet { 
                width: 12px; 
                height: 12px; 
                opacity: 1; 
                background: #1f2937; 
                margin: 0 4px; 
                border-radius: 9999px;
                transition: all 0.3s ease;
              }
              .hero-dots .swiper-pagination-bullet-active { 
                background: #D8A85B; 
                width: 15px;
                height: 15px;
              }
              @media (min-width: 640px) {
                .hero-dots .swiper-pagination-bullet { width: 14px; height: 14px; }
                .hero-dots .swiper-pagination-bullet-active { width: 18px; height: 18px; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
