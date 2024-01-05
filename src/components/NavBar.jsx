import { Link } from "react-router-dom";

export default function NavBar({ token, setUser, setToken }) {
  return (
    <>
      <Link to="./">Home</Link>

      <div>{token ? <p>Hello, User!</p> : <p>Not logged in!</p>} </div>
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
