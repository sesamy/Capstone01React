import {
  fetchCartByUser,
  fetchSingleCart,
  updateProductInCart,
} from "../api/cart.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/products.js";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { priceFormatter } from "../utils/helpers.js";
import "./Cart.css";

export default function Cart({ storedCartId }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { token } = useAuth();
  const { userName } = useUser();

  // find the first cart that has a userId that matches the userId of the userName

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchSingleCart(storedCartId);
        setCart(data.products);
      } catch (err) {
        console.error(err);
      }
    }
    if (storedCartId) getData();
  }, []);

  useEffect(() => {
    async function addCartPrice(item) {
      try {
        const data = await fetchSingleProduct(item.productId);
        return data;
      } catch (err) {
        console.error(err);
      }
    }
    Promise.all(cart.map(addCartPrice))
      .then((res) => {
        const total = res.reduce((total, item) => total + item.price, 0);
        setCartTotal(total);
      })
      .catch((err) => console.error(err));
  }, [cart]);

  async function GetCartItemInfo(item) {
    try {
      const data = await fetchSingleProduct(item);
      console.log(data.title);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleCartAdjust(item, adjustAmount) {
    try {
      const updateObj = {
        cartId: storedCartId,
        date: "2019-12-10",
        productId: item.productId,
        productQuantity: item.quantity + adjustAmount,
      };
      const updateCart = await updateProductInCart(updateObj);
      console.log(updateCart);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="cart-container">
      {cart && storedCartId ? (
        cart.map((item, i) => {
          return (
            <div key={i} className="single-item-cart">
              <p>{item.productId}</p>
              <p>{item.quantity}</p>
              <button
                className="sub-quantity"
                onClick={() => handleCartAdjust(item, -1)}
              >
                Remove 1
              </button>
              <button
                className="add-quantity"
                onClick={() => handleCartAdjust(item, 1)}
              >
                Add 1
              </button>
            </div>
          );
        })
      ) : (
        <p>Cart Empty!</p>
      )}
      {cart && (
        <div>
          <p>{priceFormatter(cartTotal)}</p>
          <Link to="/checkout">Checkout</Link>
        </div>
      )}
    </div>
  );
}
