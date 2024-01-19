import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Account from "./components/Account";
import AuthContextProvider from "./contexts/AuthContextProvider";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ProductDetailsPage from "./components/ProductDetailsPage";

function App() {
  const [activeCartId, setActiveCartId] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage activeCartId={activeCartId} />} />
          <Route path="/categories/:categoryName" />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
