import React from "react";
import { sendRequest } from "../../../request-method/request";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/users/index";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await sendRequest("GET", "/auth/logout");
      console.log(res);
      dispatcher(clearUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full border-b-2 border-gray-600/30 py-3 px-10 flex justify-between items-center">
      <h1 className="text-2xl cursor-pointer" onClick={() => navigate("/")}>
        Lira
      </h1>
      <button onClick={logout} className="bg-red-500 py-2 px-5 rounded-xl">
        logout
      </button>
    </div>
  );
};

export default Navbar;
