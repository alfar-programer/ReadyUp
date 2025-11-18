import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectTo = "/login" }) => {
  return isAllowed ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
