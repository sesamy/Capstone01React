import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SuccessCheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!location.state.successfulRequest) {
  //     navigate("/");
  //   } else {
  //     return;
  //   }
  // }, []);

  return (
    <div>
      {location.state.successfulRequest && (
        <>
          <p>Checked out for a total of {location.state.total}</p>
          <p>shipping to {location.state.city}</p>
          <Link to="/">Return to Home</Link>
        </>
      )}
    </div>
  );
}
