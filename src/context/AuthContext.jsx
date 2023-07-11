import React, { useContext } from "react";

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("profile"));
  return <AuthContext.Provider value={{token, user}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
