import { fetchCartByUser, fetchSingleCart } from "../api/cart.js";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/products.js";

export default function Cart({ userId, token, storedCartId }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
        {/* Currently accumulating total endlessly */}
        {cart.map((item, i) => {
          // async function addCartPrice() {
          //   try {
          //     const data = await fetchSingleProduct(item.productId);
          //     const itemPrice = data.price;
          //     const amount = cartTotal + itemPrice * item.quantity;
          //     setCartTotal(amount);
          //   } catch (err) {
          //     console.error(err);
          //   }
          // }
          // addCartPrice();

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
        <p>cartTotal</p>
      </div>
    </>
  );
}
