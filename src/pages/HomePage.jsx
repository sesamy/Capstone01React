import AllProducts from "../components/AllProducts.jsx";
import NavBar from "../components/NavBar.jsx";
import Cart from "../components/Cart.jsx";
import "./HomePage.css";

export default function HomePage({ activeCartId, setActiveCartId }) {
  return (
    <div>
      <NavBar />
      <div className="all-container">
        <Cart storedCartId={activeCartId} />
        <AllProducts />
      </div>
    </div>
  );
}
