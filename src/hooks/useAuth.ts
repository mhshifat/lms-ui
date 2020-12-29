import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const authState = useContext(AuthContext);
  if (!authState)
    throw new Error("Please wrap root component with AuthProvider");
  return authState;
};

export default useAuth;
