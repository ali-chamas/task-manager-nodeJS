import React from "react";
import { sendRequest } from "../../../request-method/request";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/users/index";
const Navbar = () => {
  const dispatcher = useDispatch();

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
    <div>
      Navbar
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Navbar;
