import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import { useEffect } from "react";
import { fetchAllUsers } from "../api/user.js";
import { fetchAllCarts } from "../api/cart.js";

export default function Account({ storedCartId, setActiveCartId }) {
  const { setToken } = useAuth();
  const { userName } = useUser();

  function eventHandler() {
    try {
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function cartValidation() {
      try {
        const data = await fetchAllUsers();
        const user = data.find(
          (obj) => obj.username === localStorage.getItem("user")
        );
        const dataCarts = await fetchAllCarts();
        const resultCart = dataCarts.filter((obj) => {
          return obj.userId === user.id;
        });
        setActiveCartId(resultCart[0].id);
      } catch (err) {
        console.error(err);
      }
    }
    cartValidation();
  }, []);

  return (
    <>
      <NavBar />
      <Cart storedCartId={storedCartId} />
      <div>Logged In! Hello {localStorage.user}</div>
      <button onClick={eventHandler}>Log me Out</button>
    </>
  );
}
