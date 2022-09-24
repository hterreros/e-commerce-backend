import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarPrivado from "../components/NavbarPrivado";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";
import ProfilePage from "../pages/ProfilePage";

const Privadas = () => {
  return (
    <>
      <NavbarPrivado />
      <div className="container pt-5">
        <Routes>
          {/* RUTAS PRIVADAS */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default Privadas;
