import AllProducts from "./AllProducts.jsx";
import NavBar from "./NavBar.jsx";
import Cart from "./Cart.jsx";

export default function HomePage(props) {
  return (
    <>
      <NavBar />
      {/* <SearchBar /> */}
      <Cart userId={props.userId} storedCartId="5" />
      <AllProducts />
    </>
  );
}
