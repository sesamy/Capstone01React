import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api/products.js";
import { priceFormatter } from "../utils/helpers.js";
import { addProductToNewCart, updateProductInCart } from "../api/cart.js";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [newAmount, setNewAmount] = useState([]);
  const storedCartId = null;
  const tempUserId = 1;

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
    if (storedCartId) {
      try {
        e.preventDefault();
        const dataObj = {
          cartId: storedCartId,
          date: "2019-12-10",
          productId: productId,
          productQuantity: newAmount,
        };
        const data = await updateProductInCart(dataObj);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        e.preventDefault();
        const dataObj = {
          userId: tempUserId,
          date: "2019-12-10",
          productId: productId,
          productQuantity: newAmount,
        };
        const data = await addProductToNewCart(dataObj);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div>
      <img src={product.image} className="product-details-image" />
      <p>{product.title}</p>
      <p>{priceFormatter(product.price)}</p>
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
