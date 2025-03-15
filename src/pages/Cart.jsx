import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigation function

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 my-2 flex items-center justify-between">
              <img src={item.image} alt={item.title} className="h-20 w-20" />
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price} x {item.quantity}</p>
              
              <div>
                <button className="bg-green-500 text-white px-3 py-1 mx-1" onClick={() => addToCart(item)}>
                  +
                </button>
                <button className="bg-red-500 text-white px-3 py-1 mx-1" onClick={() => removeFromCart(item.id)}>
                  -
                </button>
              </div>
            </div>
          ))}
          
          <h2 className="text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</h2>
          {/* ✅ Update Proceed to Checkout button to navigate to Payments page */}
          <button 
            className="bg-blue-500 text-white px-4 py-2 mt-2" 
            onClick={() => navigate("/payments")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
