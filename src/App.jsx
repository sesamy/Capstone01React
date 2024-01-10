import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import HomePage from "./components/HomePage.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(()=>{async function getUser})
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:productId" element="Specific Product" />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
