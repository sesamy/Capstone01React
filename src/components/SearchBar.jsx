import { useEffect, useState } from "react";
import { fetchOneCategory, fetchAllProducts } from "../api/products.js";

export default function SearchBar(props) {
  const [catParameter, setCatParameter] = useState(props.catParameter);
  const [nameParameter, setNameParameter] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  async function searchForParameter(event) {
    try {
      if (!catParameter) {
        event.preventDefault();
        const data = await fetchAllProducts();

        const searchResult = data.filter((str) => {
          const nameCheck = str.title
            .toLowerCase()
            .includes(nameParameter.toLowerCase());
          return nameCheck;
        });
        props.setActiveProducts(searchResult);
        setActiveSearch(nameParameter);
      } else {
        event.preventDefault();
        const data = await fetchOneCategory(catParameter);

        const searchResult = data.filter((str) => {
          const nameCheck = str.title
            .toLowerCase()
            .includes(nameParameter.toLowerCase());
          return nameCheck;
        });
        props.setActiveProducts(searchResult);
        setActiveSearch(nameParameter);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function searchSetCategory(event) {
    //on submit, change category to selected category.
  }

  useEffect(() => {
    setNameParameter("");
  }, []);
  return (
    <>
      <p>Search Bar</p>
      <form onSubmit={searchForParameter}>
        {/* <p>Search by Category</p>
        <input
          type="text"
          value={category}
          onChange={(event) => setCatParameter(event.target.value)}
        /> */}

        {activeSearch ? <p>Searching for "{activeSearch}":</p> : <></>}

        <input
          type="text"
          value={nameParameter}
          onChange={(event) => setNameParameter(event.target.value)}
        />
      </form>
    </>
  );
}
