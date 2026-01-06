import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function ProductCard({ products = [] }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-4 md:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-full  mx-auto h-[507px] pt-[48px] px-[60px] pb-[52px] flex flex-col gap-[40px] border border-gray-300 rounded-[12px] bg-white"
          >
            {/* Image */}
            <div className="w-full flex justify-center">
              <Link to={`/purchasing/${product.id}`}>
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
                <h4 className="font-poppins font-semibold text-lg leading-[100%]">
                  {product.name}
                </h4>

                <p className="font-poppins font-semibold text-[20px] leading-[100%]">
                  ${product.newPrice}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-[130px] h-[33px] px-[20px] py-[6px] flex items-center justify-center gap-[10px] rounded-[24px] border border-[#A37E65] text-[#A37E65] font-poppins font-semibold text-[14px] leading-[100%] hover:bg-[#A37E65] hover:text-white transition"
              >
                Add to Cart
              </button>

              {/* View Details */}
              <Link to={`/purchasing/${product.id}`}>
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
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
