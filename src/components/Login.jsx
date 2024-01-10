import { useState } from "react";
import { userLogin } from "../api/login";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setToken } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = { username, password };
    const data = await userLogin(userObj);
    setToken(data.token);
    navigate("/account");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
      <Link to="/register">Don't have an account? Click here to signup.</Link>
    </>
  );
}
