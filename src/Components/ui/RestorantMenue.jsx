// src/components/restorantMenue/RestorantMenue.jsx
import React, { useState } from "react";
import { restaurantsData } from "../../Data/Data";
import "./restorasntMenue.css";
import SearchSection from "../search/SearchSection";
import { Link } from "react-router-dom";

const RestorantMenue = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRestaurants =
    selectedCategory === "All"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <section id="restaurants" className="section-restaurants py-12 px-6">
      <SearchSection onCategoryChange={setSelectedCategory} />

      <div className="container-restaurants text-center mb-10">
        <h2 className="title-restaurants text-3xl font-bold">
          Featured Restaurants
        </h2>
        <p className="text-gray-500">Order from your favorites near you</p>
      </div>

      <div className="container-restaurantsMenue grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="card-restaurant relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center shadow-sm">
              <span className="text-orange-500 text-sm font-semibold">
                ⭐ {restaurant.rating}
              </span>
            </div>

            <div className="card-content p-4">
              <h3 className="font-semibold text-lg">{restaurant.name}</h3>
              <p className="text-gray-500 text-sm">{restaurant.cuisine}</p>

              <div className="card-info flex items-center gap-4 mt-2 text-gray-500 text-sm">
                <span>⏱ {restaurant.time}</span>
                <span>📍 {restaurant.distance}</span>
              </div>
            </div>
            <div className="button-resturant">
              <Link to={`/restaurant/${restaurant.id}`}>
                <button className="bg-[#FF6600] text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-[#e65c00] transition-all duration-200">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestorantMenue;
