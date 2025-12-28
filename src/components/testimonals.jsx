import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const cards = [
    {
      user: "user_1",
      text: "WellFetch's AI vet helped me pick the right probiotic. The delivery is always on time. Highly recommend.",
      name: "Jack",
    },
    {
      user: "user_2",
      text: "The subscription model is a lifesaver. I never run out of the allergy chews, and Alfie has stopped scratching completely!",
      name: "Jaydon Bator",
    },
    {
      user: "user_3",
      text: "Fast support and great product quality — Alfie is much happier now.",
      name: "Jenny Doe",
    },
    {
      user: "user_3",
      text: "Fast support and great product quality — Alfie is much happier now.",
      name: "Jenny Doe",
    },

  ];

  return (
    <div>
      <section className="w-full flex justify-center mt-[10px] md:mt-[20px] lg:mt-[30px]">
        <div className="w-full  relative">
          {/* Background Section */}
          <div
            className="w-full h-[650px] md:h-[771px] bg-[#24263C] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center px-4 sm:px-10 lg:px-25"
            style={{
              backgroundImage: "url('/banner/Paws.png')",
            }}
          >
            {/* Centered Content */}
            <div className="flex flex-col gap-6 text-center max-w-225 z-20 relative">
              <h3 className="font-abeezee font-normal text-[32px] md:text-[52px] leading-[96%] tracking-[-0.83px] text-white">
                Testimonials
              </h3>

              <p className="font-abeezee font-normal text-[18px] md:text-[20px] leading-[120%] text-white">
                See real experiences and feedback from our clients as they share
                <br />
                how our products has helped them
              </p>
            </div>

            {/* comments - rendered from array */}
            <div className="w-full flex justify-center mt-10 md:mt-20 z-50 relative">
              {/* Parent grid / Swiper */}
              <div className="w-full flex justify-center px-4">
                <div className="w-full max-w-[1280px] py-4 overflow-hidden">
                  <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView={1}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 15 },
                      768: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="relative w-full"
                    style={{ overflow: "visible", width: "100%" }}
                  >
                    {cards.map((card, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="flex justify-center pt-10"
                      >
                        <div
                          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-[280px] sm:h-[300px] md:h-[284px] rounded-[16px] relative mx-auto"
                          style={{
                            border: "1.39px solid rgba(255, 255, 255, 0.2)",
                            background:
                              "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          {/* Circular Image */}
                          <div className="absolute -top-[35px] left-[39px] w-[70px] h-[70px] rounded-full overflow-hidden bg-white z-50 border-2 border-white shadow-lg">
                            <img
                              src={`/testimonials/${card.user}.png`}
                              alt={card.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* paragraph */}
                          <p className="absolute top-[60px] left-[35px] right-[35px] font-poppins font-normal text-[14px] leading-[160%] text-white z-20">
                            {card.text}
                          </p>

                          {/* Name Text */}
                          <p className="absolute bottom-[25px] left-[35px] font-poppins font-normal text-[16px] text-white z-20">
                            {card.name}
                          </p>

                          {/* Vector quote icon */}
                          <div className="absolute bottom-[15px] left-[20px] z-10 opacity-20">
                            <img
                              src="/testimonials/Vector.png"
                              alt="Quote"
                              className="w-[100px] h-[80px] object-contain"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Arrows */}
                  <div className="flex justify-center items-center gap-4 mt-8 px-4">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                      aria-label="Previous slide"
                    >
                      <img
                        src="/testimonials/left.png"
                        alt="Previous"
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                      aria-label="Next slide"
                    >
                      <img
                        src="/testimonials/right.png"
                        alt="Next"
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
