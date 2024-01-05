import { fetchCartByUser } from "../api/cart.js";
import { useEffect, useState } from "react";

export default function Cart({ userId, token, storedCartId }) {
  const [cart, setCart] = useState([]);

  if (userId && token) {
    useEffect(() => {
      async function getData() {
        try {
          const data = await fetchCartByUser(userId);
          setCart(data.products);
        } catch (err) {
          console.error(err);
        }
      }
      getData();
    }, []);
  }
  if (storedCartId) {
    try {
      setCart(storedCartId);
    } catch (err) {
      console.error(err);
    }
  } else {
    setCart([]);
  }

  async function handleAdjustQuantity(event) {
    event.preventDefault();
  }

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
    </>
  );
}
