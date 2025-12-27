import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
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
    {
      user: "user_3",
      text: "Fast support and great product quality — Alfie is much happier now.",
      name: "Jenny Doe",
    },
  ];

  return (
    <div>
      <section className="w-full flex justify-center mt-[10px] md:mt-[20px] lg:mt-[30px]">
        <div className="w-full max-w-[1440px] relative">
          {/* Background Section */}
          <div
            className="w-full h-[400px] sm:h-[500px] md:h-[562px] bg-[#24263C] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center px-4 sm:px-10 lg:px-25"
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
            <div className="w-full flex justify-center mt-10 md:mt-20 z-20 relative">
              {/* Parent grid / Swiper */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[1280px] px-4 mx-auto">
                  <Swiper
                    spaceBetween={12}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 16 },
                      768: { slidesPerView: 3, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 24 },
                      1280: { slidesPerView: 4, spaceBetween: 28 },
                    }}
                    className="relative"
                  >
                    {cards.map((card, idx) => (
                      <SwiperSlide key={idx} className="flex justify-center">
                        <div
                          className="w-full max-w-[394px] h-[284.14px] rounded-[16px] relative bg-transparent"
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
                            className="absolute top-[-35px] rounded-full overflow-hidden bg-white z-10"
                            style={{
                              width: "70.456px",
                              height: "70.456px",
                              left: "38.86px",
                            }}
                          >
                            <img
                              src={`/testimonials/${card.user}.png`}
                              alt={card.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* paragraph */}
                          <p
                            className="absolute font-poppins font-[400] text-[12px] leading-[100%] text-white z-20"
                            style={{
                              width: "349px",
                              height: "36px",
                              top: "100px",
                              left: "35px",
                              letterSpacing: "0%",
                            }}
                          >
                            {card.text}
                          </p>

                          {/* Name Text */}
                          <p
                            className="absolute font-poppins font-[400] text-[14px] leading-[100%] text-white z-20"
                            style={{
                              width: "330px",
                              height: "21px",
                              top: "237.33px",
                              left: "35.15px",
                              textAlign: "justify",
                            }}
                          >
                            {card.name}
                          </p>

                          {/* Mask Group / Rectangle */}
                          <div className="absolute top-[0px] left-[0px] w-[394px] h-[253.087px] rounded-[11.59px] overflow-hidden z-0">
                            {/* Overlay Image */}
                            <img
                              src="/testimonials/bg.png"
                              alt="Overlay"
                              className="w-full h-full object-cover opacity-5 mix-blend-overlay"
                            />

                            {/* Second frame with gradient + blur */}
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
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from "react";

// export default function Testimonials() {
//   const cards = [
//     {
//       user: "user_1",
//       text: "WellFetch's AI vet helped me pick the right probiotic. The delivery is always on time. Highly recommend.",
//       name: "Jack",
//     },
//     {
//       user: "user_2",
//       text: "The subscription model is a lifesaver. I never run out of the allergy chews, and Alfie has stopped scratching completely!",
//       name: "Jaydon Bator",
//     },
//     {
//       user: "user_3",
//       text: "The subscription model is a lifesaver. I never run out of the allergy chews, and Alfie has stopped scratching completely!",
//       name: "Jenny Doe",
//     },
//   ];

//   return (
//     <section className="w-full flex justify-center mt-2 sm:mt-5 lg:mt-8 px-4">
//       <div className="w-full max-w-[1440px]">
//         {/* Background Section */}
//         <div
//           className="w-full bg-[#24263C] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-10"
//           style={{
//             backgroundImage: "url('/banner/Paws.png')",
//           }}
//         >
//           {/* Centered Content */}
//           <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-[450px] z-20">
//             <h3 className="font-abeezee font-normal text-[32px] sm:text-[40px] md:text-[52px] leading-[1] text-white">
//               Testimonials
//             </h3>
//             <p className="font-abeezee font-normal text-[14px] sm:text-[18px] md:text-[20px] leading-[120%] text-white">
//               See real experiences and feedback from our clients as they share{" "}
//               <br className="hidden sm:block" />
//               how our products has helped them
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="w-full mt-6 sm:mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-20 justify-items-center z-20">
//             {cards.map((card, idx) => (
//               <div
//                 key={idx}
//                 className="relative w-full max-w-[394px] rounded-[16px] border border-gray-700 bg-transparent p-4 sm:p-6 flex flex-col items-start"
//                 style={{
//                   borderWidth: "1.39px",
//                   borderStyle: "solid",
//                   borderImageSlice: 1,
//                   borderImageSource: `
//                     radial-gradient(0% 50% at 50% 50%, #0F0F0F 0%, rgba(21, 21, 21, 0) 100%),
//                     radial-gradient(198.89% 50% at 50% 50%, #0A7ABF 0%, rgba(255, 255, 255, 0.7) 100%),
//                     radial-gradient(170.42% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)
//                   `,
//                 }}
//               >
//                 {/* Circular Image */}
//                 <div className="rounded-full overflow-hidden bg-white w-[70px] h-[70px] -mt-[35px] mb-4">
//                   <img
//                     src={`/testimonials/${card.user}.png`}
//                     alt={card.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Paragraph */}
//                 <p className="font-poppins font-[400] text-[12px] sm:text-[13px] text-white leading-[120%] mb-4">
//                   {card.text}
//                 </p>

//                 {/* Name */}
//                 <p className="font-poppins font-[400] text-[14px] text-white">
//                   {card.name}
//                 </p>

//                 {/* Overlay */}
//                 <div className="absolute inset-0 rounded-[11.59px] overflow-hidden z-0">
//                   <img
//                     src="/testimonials/bg.png"
//                     alt="Overlay"
//                     className="w-full h-full object-cover opacity-5 mix-blend-overlay"
//                   />
//                   <div
//                     className="absolute inset-0 rounded-[11.59px]"
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(255,255,255,0.4) 0.55%, rgba(255,255,255,0) 100%)",
//                       backdropFilter: "blur(19px)",
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
