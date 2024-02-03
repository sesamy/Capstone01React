import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { fetchSingleCart } from "../api/cart.js";
import { useState, useEffect } from "react";
import { priceFormatter } from "../utils/helpers.js";
import { fetchSingleProduct } from "../api/products.js";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../api/user.js";

export default function CheckoutPage({ storedCartId }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [city, setCity] = useState("");
  const [cardColor, setCardColor] = useState("");
  const { token } = useAuth();
  const { userName } = useUser();
  const navigate = useNavigate();
  const [validUser, setValidUser] = useState();
  const [badAttempt, setBadAttempt] = useState();

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

  // async function validateUser() {
  //   try {
  //     const checker = await fetchAllUsers();
  //     console.log(userName);
  //     const userIsValid = checker.find((x) => x.username == userName);

  //     setValidUser(userIsValid);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  function handleCheckoutButton(event) {
    event.preventDefault();
    // if (validateUser() === true) {
    try {
      if (cardColor && city) {
        navigate("/checkoutsuccess", {
          state: {
            successfulRequest: true,
            storedCartId: storedCartId,
            city: city,
            total: cartTotal,
            cardEntered: cardColor,
          },
        });
      } else {
        setBadAttempt(true);
      }
    } catch (err) {
      console.error(err);
    }
    // } else {
    //   console.log("error checking out");
    // }
  }

  return (
    <>
      <h2>Checkout Page</h2>
      <p>Your total is {priceFormatter(cartTotal)}</p>
      <div className="checkout-cart">
        {cart.map((item, i) => {
          return (
            <div key={i} className="single-item-cart">
              <p>{item.productId}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
      {badAttempt ? <p> Please fill all fields!</p> : <br></br>}
      <form className="checkout-info" onSubmit={handleCheckoutButton}>
        <label>
          Shipping City
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Color of Credit Card
          <input
            type="text"
            value={cardColor}
            onChange={(event) => setCardColor(event.target.value)}
          />
        </label>
        <br />
        <button>Checkout!</button>
      </form>
    </>
  );
}
