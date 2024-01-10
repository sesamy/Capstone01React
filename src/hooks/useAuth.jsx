import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

export default function useAuth() {
  return useContext(AuthContext);
}
