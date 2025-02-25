import React, { useState } from "react"; // Import useState
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header.jsx"; // Sửa đường dẫn header.jsx
import FooterComponent from "./components/footer.jsx";
import HomePage from "./pages/home.jsx"; // Trang Home
import AboutPage from "./pages/about.jsx"; // Trang About
import ShopPage from "./pages/shop.jsx"; // Trang Shop
import Cart from "./pages/cart.jsx";
import CheckoutForm from "./pages/checkout.jsx";
import AuthPage from "./pages/AuthPage.jsx"; // Đổi thành SignInAndSignUp

createRoot(document.getElementById("root")).render(
  <Router>
    <HeaderComponent /> {/* HeaderComponent hiển thị trước Routes */}
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Trang Home */}
      <Route path="/about" element={<AboutPage />} /> {/* Trang About */}
      <Route path="/ShopPage" element={<ShopPage />} /> {/* Trang Shop */}
      <Route path="/cart" element={<Cart />} /> {/* Trang Cart */}
      <Route path="/checkout" element={<CheckoutForm />} /> {/* Trang Cart */}
      <Route path="/authPage" element={<AuthPage />} />{" "}
      {/* Trang SignIn and SignUp */}
    </Routes>
    <FooterComponent /> {/* FooterComponent hiển thị sau Routes */}
  </Router>
);
