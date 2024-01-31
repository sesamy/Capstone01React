import { Link, useLocation } from "react-router-dom";

export default function SuccessCheckoutPage() {
  const location = useLocation();

  return (
    <div>
      {location.state.cardColor && location.state.city && (
        <>
          <p>Checked out for a total of {location.state.total}</p>
          <p>shipping to {location.state.city}</p>
          <p>{location.state.storedCartId}</p>
          <Link to="/">Return to Home</Link>
        </>
      )}
    </div>
  );
}
