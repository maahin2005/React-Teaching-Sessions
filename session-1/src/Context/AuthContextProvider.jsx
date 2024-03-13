import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ element }) {
  return <AuthContext.Provider>{element}</AuthContext.Provider>;
}

export default AuthContextProvider;
