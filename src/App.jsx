import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  });

  // useEffect(()=>{async function getUser})
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:productId" element="Specific Product" />
      </Routes>
    </>
  );
}

export default App;
