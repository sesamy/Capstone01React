import AllProducts from "../components/AllProducts.jsx";
import NavBar from "../components/NavBar.jsx";
import Cart from "../components/Cart.jsx";

export default function HomePage() {
  return (
    <>
      <NavBar />

      <Cart storedCartId="5" />
      <AllProducts />
    </>
  );
}
