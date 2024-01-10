import { fetchCartByUser, fetchSingleCart } from "../api/cart.js";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/products.js";
import useAuth from "../hooks/useAuth";
import { priceFormatter } from "../utils/helpers.js";

export default function Cart({ userId, storedCartId }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { token } = useAuth();

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchSingleCart(storedCartId);
        setCart(data.products);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
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

  // if (userId && token) {
  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const data = await fetchCartByUser(userId);
  //         setCart(data.products);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //     getData();
  //   }, []);
  // }
  // if (storedCartId) {
  //   try {
  //     setCart(storedCartId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // } else {
  //   setCart([]);
  // }

  return (
    <>
      <div className="cart">
        {cart.map((item, i) => {
          return (
            <div key={i} className="single-item-cart">
              <p>{item.productId}</p>
              <p>{item.quantity}</p>
              <button className="add-quantity">Add 1</button>
              <button className="sub-quantity">Remove 1</button>
            </div>
          );
        })}
      </div>
      <div>
        <p>{priceFormatter(cartTotal)}</p>
      </div>
    </>
  );
}
