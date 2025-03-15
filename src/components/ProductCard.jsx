import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    // Reset button to "Add to Cart" after 3 seconds
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="border p-4 text-center">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>

      <button
        className={`px-4 py-2 mt-2 text-white ${
          added ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
        onClick={handleAddToCart}
      >
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
