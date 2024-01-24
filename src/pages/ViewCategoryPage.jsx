import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOneCategory } from "../api/products";

export default function ViewCategoryPage() {
  const { categoryName } = useParams();
  const [activeCat, setActiveCat] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchOneCategory(categoryName);
        setActiveCat(data);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);
  return <p>You are viewing the {categoryName} category!</p>;
}
