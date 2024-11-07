import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "@/store";

interface IProtectedRoutProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<IProtectedRoutProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
