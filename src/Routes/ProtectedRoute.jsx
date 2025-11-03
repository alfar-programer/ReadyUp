import { Navigate } from "react-router-dom";
import { getUserType } from "../Constant/auth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userType = getUserType();

  if (!userType) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userType)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
