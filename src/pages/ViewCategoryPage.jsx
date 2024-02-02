import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOneCategory } from "../api/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { priceFormatter } from "../utils/helpers.js";
import NavBar from "../components/NavBar.jsx";
import Cart from "../components/Cart.jsx";
import "./HomePage.css";

export default function ViewCategoryPage({ activeCartId }) {
  const { categoryName } = useParams();
  //   const [activeCat, setActiveCat] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchOneCategory(categoryName);
        setActiveProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Cart storedCartId={activeCartId} />
      <NavBar />
      <p>You are viewing the {categoryName} category!</p>
      <SearchBar
        setActiveProducts={setActiveProducts}
        catParameter={categoryName}
      />
      <div className="displayed-products">
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
