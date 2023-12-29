import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="single-product">
      <img src={props.image} className="card-image" />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <Link to={{ pathname: `/products/${props.id}` }}>Details</Link>
    </div>
  );
}
