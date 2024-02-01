import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Account from "./components/Account";
import UserContextProvider from "./contexts/UserContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ViewCategoryPage from "./pages/ViewCategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessCheckoutPage from "./pages/SuccessCheckoutPage";

function App() {
  const [activeCartId, setActiveCartId] = useState(5);

  return (
    <>
      <AuthContextProvider>
        <UserContextProvider>
          <Routes>
            <Route
              path="/"
              element={<HomePage activeCartId={activeCartId} />}
            />
            <Route
              path="/categories/:categoryName"
              element={<ViewCategoryPage />}
            />
            <Route
              path="/login"
              element={<Login setActiveCartId={setActiveCartId} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route element={<RequireAuth />}>
              <Route path="/account" element={<Account />} />
            </Route>
            <Route
              path="/checkout/*"
              element={<CheckoutPage storedCartId={activeCartId} />}
            />
            <Route path="/checkoutsuccess" element={<SuccessCheckoutPage />} />
            <Route
              path="/*"
              element={<HomePage activeCartId={activeCartId} />}
            />
          </Routes>
        </UserContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
