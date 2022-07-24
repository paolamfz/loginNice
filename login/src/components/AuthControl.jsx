import { Navigate } from "react-router-dom";
import { Home } from "./Home";
export const AuthControl = () => {
  const token = localStorage.getItem("token");
  return token ? <Home /> : <Navigate to={"/"} />;
};
