import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api/products.js";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchSingleProduct(props);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    }
  });

  return (
    <div>
      <p>`${product.title}`</p>
      <Form>
        <input type="number" onChange={(e) => setNewAmount}></input>
        <Submit></Submit>
      </Form>
    </div>
  );
}
