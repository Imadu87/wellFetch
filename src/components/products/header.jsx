import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ProductCard from "../utils/productCard";
import { products } from "../../db/products";

export default function ProductsHeader() {
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState("Latest");
  const [priceSelected, setPriceSelected] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const options = ["Latest", "Popular"];
  const priceOptions = ["0-100", "100-200", "200-300", "300-400"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  const handlePriceChange = (range) => {
    setPriceSelected(
      (prev) =>
        prev.includes(range)
          ? prev.filter((r) => r !== range) // uncheck
          : [...prev, range] // check
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // filtering
  let displayProducts = [...filteredProducts];

  if (priceSelected.length > 0) {
    displayProducts = displayProducts.filter((product) => {
      const productPrice = Number(product.price.replace("$", ""));

      return priceSelected.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return productPrice >= min && productPrice <= max;
      });
    });
  }

  if (selected === "Latest") {
    displayProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (selected === "Popular") {
    displayProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <header className="w-full flex flex-col items-center justify-center py-5 mb-8 gap-12">
      {/* HEADER */}
      <div className="flex flex-col gap-7 items-center justify-center px-4 md:px-6 lg:px-0">
        <h1 className="font-poppins font-bold text-center text-[28px] md:text-[36px] lg:text-[48px] text-[#D8A85B]">
          Our Products
        </h1>
        <p className="font-poppins text-[16px] 2xl:text-[20px] text-center">
          From allergy relief to tummy tamers, explore our range of
          vet-formulated soft chews designed
          <br className="hidden md:block" /> to keep your dog happy and healthy.
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
          {/* SEARCH BAR */}
          <div className="flex items-center flex-3 bg-gray-200 rounded-3xl px-4 py-3 gap-3">
            <svg
              className="w-5 h-5 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* FILTER DROPDOWN */}
          {/* FILTER + SORT */}
          <div className="relative flex items-center gap-3 sm:gap-4">
            {/* SORT BUTTON */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-3xl text-sm sm:text-base focus:outline-none min-w-[120px] justify-between"
              >
                {selected}
                <FaAngleDown
                  className={`text-white transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden z-50 border">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* FILTER ICON */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-11 h-11 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <img
                  src="/icons/filter.png"
                  alt="Filter"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
              {/* DROPDOWN */}
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 border p-3 space-y-2">
                  {priceOptions.map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={priceSelected.includes(range)}
                        onChange={() => handlePriceChange(range)}
                      />
                      <span className="text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      {displayProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found</p>
      ) : (
        <ProductCard products={displayProducts} />
      )}

      {/* PAGINATION */}

      <div className="flex items-center justify-center gap-4 md:gap-6">
        {/* Previous Button */}
        <button className="flex gap-2 items-center p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors group">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>{" "}
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {/* Page 1 - Active */}
          <button
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center transition-colors"
            style={{ backgroundColor: "#0000000F", color: "#000" }}
          >
            1
          </button>

          {/* Page 2 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            2
          </button>

          {/* Page 3 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            3
          </button>

          {/* Dots */}
          <span className="text-gray-400 text-lg font-light">...</span>

          {/* Page 8 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            8
          </button>

          {/* Page 9 */}
          <button className="hidden md:flex w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 items-center justify-center transition-colors">
            9
          </button>

          {/* Page 10 */}
          <button className="w-9 h-9 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
            10
          </button>
        </div>

        {/* Next Button */}
        <button className="flex gap-2 p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors group">
          <span>Next</span>

          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
