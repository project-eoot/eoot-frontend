import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "@/store";

interface IAuthRouteProps {
  children: React.ReactElement;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRoute;
