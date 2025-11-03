import React, { useState } from "react";
import { HiOutlineMagnifyingGlass, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import './searchSection.css'

const SearchSection = ({ onCategoryChange }) => {
  const [active, setActive] = useState("All");
  const categories = ["All", "Food", "Desserts", "Drinks"];

  const handleClick = (category) => {
    setActive(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="section-search flex flex-wrap items-center justify-between gap-3 p-4 bg-white">
      {/* Search Input */}
      <div className="main-search flex items-center flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-orange-500 transition">
        <HiOutlineMagnifyingGlass className="icon-search text-gray-400 w-5 h-5 mr-3" />
        <input
          type="text"
          placeholder="Search restaurants or cuisines..."
          className="search-input bg-transparent w-full outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Categories */}
      <div className="categories flex items-center gap-2 mx-auto md:mx-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              active === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort Button */}
      <button className="button-sort flex items-center gap-2 border border-orange-500 text-orange-500 rounded-xl px-5 py-2 hover:bg-orange-50 transition-all duration-200">
        <HiOutlineAdjustmentsHorizontal className="w-5 h-5" />
        <span className="font-medium">Sort</span>
      </button>
    </div>
  );
};

export default SearchSection;
