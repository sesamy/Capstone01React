import { Link } from "react-router-dom";

export default function NavBar({ token, setUser, setToken }) {
  return (
    <>
      <Link to="./">Home</Link>

      <div>
        {token ? (
          <div className="navbar-login">Hello, User!</div>
        ) : (
          <div className="navbar-login">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
      {token && (
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
      )}
    </>
  );
}
