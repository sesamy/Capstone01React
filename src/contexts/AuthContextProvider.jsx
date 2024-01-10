import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const localToken = localSotrage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  });
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
