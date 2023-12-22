import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllProducts } from "./api/products";

function App() {
  useEffect(() => {
    async function loadProduct() {
      await fetchAllProducts();
    }
    loadProduct();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element="Main Page" />
        <Route path="/:productId" element="Specific Product" />
      </Routes>
      <h1>Main Page</h1>
    </>
  );
}

export default App;
