import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);
  return userInfo ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRoutes;
