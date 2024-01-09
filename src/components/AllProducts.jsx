import { useState, useEffect } from "react";
import { fetchAllProducts } from "../api/products.js";

import "./AllProducts.css";

import ProductCard from "./ProductCard.jsx";
// import ".AllProducts.css";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchAllProducts();
        setAllProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="all-products">
      {allProducts.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          </div>
        );
      })}
    </div>
  );
}
