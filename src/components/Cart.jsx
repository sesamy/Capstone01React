import {
  fetchCartByUser,
  fetchSingleCart,
  updateProductInCart,
} from "../api/cart.js";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/products.js";
import useAuth from "../hooks/useAuth";
import { priceFormatter } from "../utils/helpers.js";

export default function Cart({ userId, storedCartId }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { token } = useAuth();

  if (storedCartId) {
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
  }
  if (localStorage.cart) {
    useEffect(() => {
      function getData() {
        try {
          const data = localStorage.cart;
          setCart(data);
        } catch (err) {
          console.error(err);
        }
      }
      getData();
    }, []);
  }

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
    <>
      <div className="cart">
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
          })(
            <div>
              <p>{priceFormatter(cartTotal)}</p>
            </div>
          )
        ) : (
          <p>Cart Empty!</p>
        )}
      </div>
    </>
  );
}
