import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      image: "/products/product_1.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 2,
      image: "/products/product_2.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 3,
      image: "/products/product_1.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 4,
      image: "/products/product_2.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 1,
      image: "/products/product_1.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 2,
      image: "/products/product_2.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 3,
      image: "/products/product_1.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
    {
      id: 4,
      image: "/products/product_2.png",
      name: "Allergy Soft Chews",
      price: "$132.93",
    },
  ];

  return (
    <section className="w-full flex justify-center mt-[10px] md:mt-[20px] lg:mt-[30px]">
      <div className="w-full  flex flex-col gap-[30px] px-[16px] md:px-[60px] lg:px-[80px] py-[40px]">
        {/* Section Header */}
        {/* <div className="w-full flex  sm:flex-row sm:items-center sm:justify-between gap-[16px]">
          <h2 className="font-abeezee font-[400] text-[32px] md:text-[52px] leading-[96%] tracking-[-0.83px] text-[#D8A85B]">
            Featured Product
          </h2>

          <div className="flex items-center gap-[12px] cursor-pointer">
            <span className="font-poppins font-semibold text-[16px] leading-[100%]">
              View all
            </span>
            <FaArrowRight className="text-[14px]" />
          </div>
        </div> */}

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-[40px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-[289px] mx-auto h-[507px] pt-[48px] px-[60px] pb-[52px] flex flex-col gap-[40px] border border-gray-300 rounded-[12px] bg-white"
            >
              {/* Image */}
              <div className="w-full flex justify-center">
                <Link to={'/purchasing'}> 
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain"
                />
                </Link>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[32px] items-center text-center">
                <div className="flex flex-col gap-[12px]">
                  <h4 className="font-poppins font-semibold text-[16px] leading-[100%]">
                    {product.name}
                  </h4>

                  <p className="font-poppins font-semibold text-[20px] leading-[100%]">
                    {product.price}
                  </p>
                </div>

                {/* Button */}
                <button className="w-[120px] h-[33px] px-[20px] py-[6px] flex items-center justify-center gap-[10px] rounded-[24px] border border-[#A37E65] text-[#A37E65] font-poppins font-semibold text-[14px] leading-[100%] hover:bg-[#A37E65] hover:text-white transition">
                  Add to Cart
                </button>

                {/* View Details */}
                <div className="flex items-center gap-[8px] cursor-pointer">
                  <span className="font-poppins font-semibold text-[14px] text-[#000]">
                    View Details
                  </span>
                  <img
                    src="/products/view.png"
                    alt="View"
                    className="w-[14px] h-[14px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
