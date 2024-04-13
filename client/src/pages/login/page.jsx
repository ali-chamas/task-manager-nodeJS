import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col items-center  min-h-screen mt-[100px] gap-[40px]">
      <h1 className="text-4xl font-bold ">Welcome to Lira</h1>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Signup setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default Auth;
