import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Account from "./components/Account";
import AuthContextProvider from "./contexts/AuthContextProvider";
import RequireAuth from "./components/RequireAuth/RequireAuth";

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
          <Route element={<RequireAuth />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
