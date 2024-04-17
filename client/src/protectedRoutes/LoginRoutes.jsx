import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const LoginProtection = () => {
  const userState = useSelector((global) => global.userSlice);
  return userState.token ? <Navigate to={"/"} /> : <Outlet />;
};

export default LoginProtection;
