import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <Route path="/" element="Main Page" />
        <Route path="/:productId" element="Specific Product" />
      </Routes>
      <h1>Main Page</h1>
    </>
  );
}

export default App;
