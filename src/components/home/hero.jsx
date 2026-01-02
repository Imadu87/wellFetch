import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [1, 2, 3];
  return (
    <section className="w-full flex justify-center">
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
                  <div className="w-full overflow-hidden">
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
            <div className="flex justify-center items-center gap-2 mt-6">
              <div className="hero-dots flex justify-center items-center gap-2" />
            </div>

            <style>{`
                .hero-swiper .swiper-button-next,
                .hero-swiper .swiper-button-prev {
                 display: none !important;
                }

                .hero-dots .swiper-pagination-bullet {
                 width: 8px;
                 height: 8px;
                 opacity: 1;
                  background: #1f2937;
                 margin: 0 4px;
                 border-radius: 9999px;
                 transition: transform 0.25s ease, background 0.25s ease;
               }

               .hero-dots .swiper-pagination-bullet-active {
                 background: #D8A85B;
                 transform: scale(1.3);
               }

             /* Slightly bigger on larger screens */
              @media (min-width: 640px) {
            .hero-dots .swiper-pagination-bullet {
             width: 9px;
             height: 9px;
    }
  }
`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
