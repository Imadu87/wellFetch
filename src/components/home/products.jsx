import React, { useState } from "react";
import ProductCard from "../utils/productCard";
import { products } from "../../db/products";
import { FaArrowRight } from "react-icons/fa";

export default function Products() {
  const [viewAll, setViewAll] = useState(false);
  const visibleProducts = viewAll ? products : products.slice(0, 4);

  return (
    <section className="w-full flex justify-center mt-[10px]">
      <div className="w-full  flex flex-col gap-[30px] px-[16px] md:px-[60px] lg:px-[80px] py-[40px]">
        {/* Section Header */}
        <div className="w-full flex  sm:flex-row sm:items-center justify-between gap-[16px]">
          <h2 className="font-abeezee font-[400] text-[32px] md:text-[52px] leading-[96%] tracking-[-0.83px] text-[#D8A85B]">
            Featured Product
          </h2>

          <div className="flex items-center gap-[12px] cursor-pointer">
            <button onClick={() => setViewAll(!viewAll)}>
              <div className="flex gap-2">
                <span className="hidden md:block font-poppins font-semibold text-[16px] leading-[100%]">
                  {viewAll ? "Show less" : "View All"}
                </span>
                <FaArrowRight
                  className={`transition-transform ${
                    viewAll ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <ProductCard products={visibleProducts} />
      </div>
    </section>
  );
}
