import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Payments from "./pages/Payments"; // Added Payments Page
import Navbar from "./components/Navbar"; 
import Signups from "./pages/Signups";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments" element={<Payments />} /> {/* Payments route added */}
        <Route path="/login" element={<Login />} />
        <Route path="/signups" element={<Signups />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
