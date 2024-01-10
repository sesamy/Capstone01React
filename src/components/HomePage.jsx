import AllProducts from "./AllProducts.jsx";
import NavBar from "./NavBar.jsx";
import Cart from "./Cart.jsx";

export default function HomePage() {
  return (
    <>
      <NavBar />
      {/* <SearchBar /> */}
      <Cart storedCartId="5" />
      <AllProducts />
    </>
  );
}
