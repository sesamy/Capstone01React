import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ token, setUser, setToken }) {
  return (
    <>
      <div className="nav-container">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-item">
          {token ? (
            <div className="nav-item">Hello, User!</div>
          ) : (
            <div className="nav-item">
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>

        {token && (
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
        )}

        <div className="nav-item">
          <Link to="./account">Account</Link>
        </div>
      </div>
    </>
  );
}
