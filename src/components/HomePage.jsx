import AllProducts from "./AllProducts.jsx";
import NavBar from "./NavBar.jsx";
import Cart from "./Cart.jsx";
import useAuth from "../hooks/useAuth.jsx";

export default function HomePage() {
  const { token } = useAuth();
  return (
    <>
      {token}
      <NavBar />
      {/* <SearchBar /> */}
      <Cart storedCartId="5" />
      <AllProducts />
    </>
  );
}
