import { createContext } from "react";

const AuthStore = createContext({
  email: "",
  password: "",
  test: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthStore;
