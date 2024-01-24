import { useState, useEffect } from "react";
import { fetchAllProducts } from "../api/products.js";
import { priceFormatter } from "../utils/helpers.js";
import SearchBar from "../components/SearchBar";
import "./AllProducts.css";

import ProductCard from "./ProductCard.jsx";
// import ".AllProducts.css";

export default function AllProducts() {
  const [activeProducts, setActiveProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchAllProducts();
        setActiveProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <SearchBar setActiveProducts={setActiveProducts} catParameter={""} />
      <div className="all-products">
        {activeProducts.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard
                title={product.title}
                price={priceFormatter(product.price)}
                description={product.description}
                image={product.image}
                id={product.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
