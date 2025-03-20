import { Navigate, useLocation } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";

export default function PrivateRoute({ children, redirectTo }) {
  const [user, _] = useLocalStorage("data:user", {});
  const location = useLocation();

  if (!user.email || !user.password) {
    return (
      <Navigate to={redirectTo} replace state={{ from: location.pathname }} />
    );
  }
  return children;
}
