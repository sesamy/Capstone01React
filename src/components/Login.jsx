import { useState } from "react";
import { userLogin } from "../api/login";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import NavBar from "../components/NavBar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [badAttempt, setBadAttempt] = useState(false);

  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { setUserName } = useUser();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = { username, password };
    try {
      const data = await userLogin(userObj);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", username);
      setUserName(username);
      navigate("/account");
    } catch (err) {
      setBadAttempt(true);
    }
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        {badAttempt ? <p>Incorrect Username or Password!</p> : <br></br>}

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
