import AllProducts from "./AllProducts.jsx";
import NavBar from "./NavBar.jsx";

export default function HomePage(props) {
  return (
    <>
      <NavBar />
      {/* <SearchBar /> */}
      <AllProducts />
      {/* <Cart /> */}
    </>
  );
}
