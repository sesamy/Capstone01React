import { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

export default function useUser() {
  return useContext(UserContext);
}
