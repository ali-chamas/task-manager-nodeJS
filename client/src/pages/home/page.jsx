import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userState = useSelector((global) => global.userSlice);

  console.log(userState);
  return <div>Home</div>;
};

export default Home;
