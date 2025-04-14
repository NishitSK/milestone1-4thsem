import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import MenuPage from "./MenuPage.js";
import Cart from "./Cart.js";
import Navigation from "./Navigation"; 
import Homepage from "./Homepage"; 
import OffersPage from "./OffersPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Contactus from "./Contactus.js"
import Signup from "./signup.js"

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = cart.find(
      (i) =>
        i.id === item.id && i.size === item.size && i.flavor === item.flavor
    );
    if (exists) {
      setCart((prev) =>
        prev.map((i) =>
          i.id === item.id && i.size === item.size && i.flavor === item.flavor
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const increment = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCustomization = (id, field, value) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <Router>
      <Navigation />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increment={increment}
                decrement={decrement}
                removeFromCart={removeFromCart}
                updateCustomization={updateCustomization}
              />
            }
          />
          <Route path="/offers" element={<OffersPage />} /> {/* Offers Page route */}
        </Routes>
      </div>
    </Router>
  );
}
