import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AuthProtection = () => {
  const userState = useSelector((global) => global.userSlice);
  return !userState.token ? <Navigate to={"/login"} /> : <Outlet />;
};

export default AuthProtection;
