import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DropdownMenu from "./DropDown.jsx";
import { fetchAllCategories } from "../api/products.js";

export default function NavBar({ token, setUser, setToken }) {
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const handleOnClick = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchAllCategories();
        setAllCategories(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Link to="./">Home</Link>

      <div className="Categories">
        <button onClick={handleOnClick}>Categories</button>
        {isDropDownVisible && <DropdownMenu list={allCategories} />}
      </div>

      <div>{token ? <p>Hello, User!</p> : <p>Not logged in!</p>} </div>
      {token && (
        <Link
          to="/login"
          onClick={() => {
            setUser = null;
            localStorage.removeItem("token");
            setToken(null);
          }}
        >
          Logout
        </Link>
      )}
    </>
  );
}
