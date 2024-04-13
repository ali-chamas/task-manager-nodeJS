import React from "react";

const Login = ({ setIsLogin }) => {
  return (
    <div className="py-[40px] px-[60px] bg-purple-950/20 flex flex-col gap-[20px] items-center rounded-md md:min-w-[400px]">
      <h1 className="font-bold text-xl">Login</h1>
      <input
        type="text"
        placeholder="username"
        className="input-style w-full"
      />
      <input
        type="password"
        placeholder="password"
        className="input-style w-full"
      />
      <button type="button" className="btn-style bg-primary">
        Login
      </button>
      <small>
        Doesn't have an account?{" "}
        <span
          className="text-purple-400 font-bold hover:opacity-80 cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Signup
        </span>
      </small>
    </div>
  );
};

export default Login;
