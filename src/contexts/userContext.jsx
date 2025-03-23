import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialUser = {
  email: "",
  password: "",
};

export const userContext = createContext({
  user: initialUser,
  setUser: () => {},
});

export default function userProvider({ children }) {
  const [user, setUser] = useLocalStorage("account:user", initialUser);
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
