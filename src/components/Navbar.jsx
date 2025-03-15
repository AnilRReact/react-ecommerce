import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">
        <Link to="/">E-Commerce</Link>
      </h1>
      
      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/cart" className="hover:text-gray-300">Cart</Link>
      </div>

      {/* Auth Section */}
      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-gray-300 mr-4">
              Login
            </Link>
            <Link
              to="/signups"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
