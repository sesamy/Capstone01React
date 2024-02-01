import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (!localUser) {
      setUserName("Guest");
    }
  });

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}
