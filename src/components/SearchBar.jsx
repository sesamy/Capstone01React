import { useEffect, useState } from "react";
import { fetchOneCategory } from "./api/products.js";

export default function SearchBar(props) {
  const [catParameter, setCatParameter] = useState("");
  const [nameParameter, setNameParameter] = useState("");

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const catData = await fetchOneCategory(catParameter.toLowerCase());
      console.log(catData);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <p>Search Bar</p>
      <form onSubmit={handleSubmit}>
        <p>Search by Category</p>
        <input
          type="text"
          value={category}
          onChange={(event) => setCatParameter(event.target.value)}
        />
        <input
          type="text"
          value={productName}
          onChange={(event) => setNameParameter(event.target.value)}
        />
      </form>
    </>
  );
}
