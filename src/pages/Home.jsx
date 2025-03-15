import React from "react";
import { useNavigate } from "react-router-dom";

// Sample categories (You can modify this based on your products)
const categories = [
  { id: 1, name: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Fashion", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Home Appliances", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Books", image: "https://via.placeholder.com/150" }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Welcome to My E-Commerce Store</h1>
      <p className="mt-2 text-gray-600 text-center">Explore amazing products at great prices!</p>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="border p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/products?category=${category.name.toLowerCase()}`)}
          >
            <img src={category.image} alt={category.name} className="w-full h-32 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
