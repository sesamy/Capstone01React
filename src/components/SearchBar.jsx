import { useEffect, useState } from "react";
import { fetchOneCategory, fetchAllProducts } from "../api/products.js";

export default function SearchBar(props) {
  const [catParameter, setCatParameter] = useState("");
  const [nameParameter, setNameParameter] = useState("");

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const data = await fetchAllProducts();

      const searchResult = data.filter((str) => {
        const nameCheck = str.title
          .toLowerCase()
          .includes(nameParameter.toLowerCase());
        return nameCheck;
      });
      props.setActiveProducts(searchResult);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <p>Search Bar</p>
      <form onSubmit={handleSubmit}>
        {/* <p>Search by Category</p>
        <input
          type="text"
          value={category}
          onChange={(event) => setCatParameter(event.target.value)}
        /> */}
        <p>Search by Name</p>
        <input
          type="text"
          value={nameParameter}
          onChange={(event) => setNameParameter(event.target.value)}
        />
      </form>
    </>
  );
}
