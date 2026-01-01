import React, { useState } from "react";

const faqs = [
  {
    question: "What are enzyme blends, and why are they included?",
    answer:
      "Enzyme blends help break down proteins, fats, and carbohydrates, making it easier for your dog to digest food and absorb nutrients effectively.",
  },
  {
    question: "Are the ingredients in this product natural?",
    answer:
      "Yes, all ingredients are carefully selected and sourced from natural origins to ensure safety and effectiveness.",
  },
  {
    question: "Is this product suitable for all dog breeds?",
    answer:
      "Yes, it is formulated to support digestion across all dog breeds and sizes.",
  },
  {
    question: "How often should I give this supplement?",
    answer:
      "It can be given daily as part of your dog’s regular diet.",
  },
];

export default function NeedToKnow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center bg-[#F6F6F6]">
      <div className="w-full max-w-5xl px-4 sm:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-abeezee text-[28px] sm:text-[36px] md:text-[52px] leading-tight">
            Everything You Need to <br /> Know About Us
          </h1>
          <p className="mt-4 text-[#4A4A4A] text-[16px] sm:text-[18px]">
            We’ve gathered the most common questions to help you understand how
            Wellfetch works
          </p>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#AA335B] border-[#FC0000] shadow-[0px_4px_32px_0px_#9013FE66]"
                    : "bg-white border-[#C9C9C9]"
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-4 p-4 md:p-6 text-left"
                >
                  <p
                    className={`font-poppins text-[16px] sm:text-[18px] md:text-[20px] ${
                      isOpen
                        ? "font-bold text-[#D8A85B]"
                        : "font-normal text-black"
                    }`}
                  >
                    {faq.question}
                  </p>

                  <img
                    src={
                      isOpen
                        ? "/needs/minus-circle.png"
                        : "/needs/plus-circle.png"
                    }
                    alt="toggle"
                    className="w-6 h-6 shrink-0 mt-1"
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="font-poppins text-[15px] sm:text-[16px] text-white text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
