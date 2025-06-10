import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../_service/auth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
