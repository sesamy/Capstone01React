import { useState } from "react";
import { userLogin } from "../api/login";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = { email, password };
    const nextToken = await userLogin(userObj);
    setToken(nextToken);
    navigate("/account");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
