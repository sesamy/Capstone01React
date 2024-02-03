import { Link } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../hooks/useAuth";

export default function NavBar({ setUser, setToken }) {
  const { token } = useAuth();
  return (
    <>
      <div className="nav-container">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-item">
          {token ? (
            <div className="nav-item">
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
            </div>
          ) : (
            <div className="nav-item">
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>

        <div className="nav-item">
          <Link to="/account">Account</Link>
        </div>
      </div>
    </>
  );
}
