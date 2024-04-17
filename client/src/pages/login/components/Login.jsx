import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../../request-method/request";
import { setUser } from "../../../redux/users/index";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const [user, setUserData] = useState({ username: "", password: "" });

  const login = async () => {
    try {
      const res = await sendRequest("POST", "/auth/login", user);
      console.log(res.data.user);
      const userData = {
        token: res.data.token,
        user: res.data.user,
      };

      dispatcher(setUser(userData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-[40px] px-[60px] bg-purple-950/20 flex flex-col gap-[20px] items-center rounded-md md:min-w-[400px]">
      <h1 className="font-bold text-xl">Login</h1>
      <input
        type="text"
        placeholder="username"
        className="input-style w-full"
        onChange={(e) =>
          setUserData((u) => ({ ...u, username: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="password"
        className="input-style w-full"
        onChange={(e) =>
          setUserData((u) => ({ ...u, password: e.target.value }))
        }
      />
      <button type="button" className="btn-style bg-primary" onClick={login}>
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
