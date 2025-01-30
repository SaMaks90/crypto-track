import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../stores/store";
import Loading from "../pages/Loading";
import { ReactNode } from "react";

interface IPrivateRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IPrivateRouteProps) => {
  const { authToken, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return <Loading />;

  return authToken ? <>{children}</> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
