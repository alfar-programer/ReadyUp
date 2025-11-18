// mock Data for restaurants
  

export const restaurantsData = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian • Pizza & Pasta",
    time: "15-20 min",
    distance: "0.3 mi",
    rating: 4.8,
    review:"(150 reviews)",
    image: "/Homepageimgs/Gad.webp",
    category: "Food",
  },
  {
    id: 2,
    name: "Tokyo Sushi Bar",
    cuisine: "Japanese • Sushi",
    time: "10-15 min",
    distance: "0.5 mi",
    rating: 4.9,
    image: "/Homepageimgs/Gad.webp",
    category: "Food",
  },
  {
    id: 3,
    name: "Burger House",
    cuisine: "American • Burgers",
    time: "12-18 min",
    distance: "0.2 mi",
    rating: 4.7,
    image: "/Homepageimgs/Gad.webp",
    category: "Food",
  },
  {
    id: 4,
    name: "Sweet Dreams",
    cuisine: "Cakes • Ice Cream",
    time: "8-12 min",
    distance: "0.4 mi",
    rating: 4.6,
    image: "/Homepageimgs/Gad.webp",
    category: "Desserts",
  },
  {
    id: 5,
    name: "Juicy Bar",
    cuisine: "Fresh Juices • Smoothies",
    time: "6-10 min",
    distance: "0.3 mi",
    rating: 4.5,
    image: "/Homepageimgs/Gad.webp",
    category: "Drinks",
  },
];

import { ShoppingBag, UtensilsCrossed, Bell } from "lucide-react";

export const steps = [
  {
    icon: ShoppingBag,
    title: "Choose",
    description: "Browse restaurants near you and place your order",
    color: "text-primary",
  },
  {
    icon: UtensilsCrossed,
    title: "Order",
    description: "Continue shopping while your food is being prepared",
    color: "text-accent",
  },
  {
    icon: Bell,
    title: "Ready",
    description: "Get notified when your order is ready for pickup",
    color: "text-primary-glow",
  },
];
