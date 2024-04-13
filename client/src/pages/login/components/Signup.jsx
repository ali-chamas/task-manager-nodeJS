import React from "react";

const Signup = ({ setIsLogin }) => {
  return (
    <div className="py-[40px] px-[60px] bg-purple-950/20 flex flex-col gap-[20px] items-center rounded-md md:min-w-[400px]">
      <h1 className="font-bold text-xl">Signup</h1>
      <input type="text" placeholder="name" className="input-style w-full" />
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
        Signup
      </button>
      <small>
        Already have an account?{" "}
        <span
          className="text-purple-400 font-bold hover:opacity-80 cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
      </small>
    </div>
  );
};

export default Signup;
