import { Navigate, useLocation } from "react-router";
// import useLocalStorage from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, redirectTo }) {
  // const [user, _] = useLocalStorage("data:user", {});
  const location = useLocation();
  const dataUser = useSelector((state) => state.dataUserLogin.user);

  if (dataUser === null) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
  return children;
}
