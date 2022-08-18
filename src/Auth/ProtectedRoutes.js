import react from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user_info");
  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
