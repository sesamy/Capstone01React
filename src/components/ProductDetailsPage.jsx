import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api/products.js";
import { priceFormatter } from "../utils/helpers.js";
import { addProductToCart, updateProductInCart } from "../api/cart.js";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [newAmount, setNewAmount] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchSingleProduct(productId);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  async function addToCartHandler(e) {
    try {
      e.preventDefault();
      const dataObj = {
        cartId: "5",
        date: "2019-12-10",
        productId: productId,
        productQuantity: newAmount,
      };
      const data = await updateProductInCart(dataObj);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <img src={product.image} className="product-details-image" />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <form onSubmit={addToCartHandler}>
        <input
          type="number"
          onChange={(e) => setNewAmount(e.target.value)}
        ></input>
        <button>Add to Cart</button>
      </form>
    </div>
  );
}
