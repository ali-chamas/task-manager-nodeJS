import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/login/page";
import "./pages/common/styles/utilities.css";
import Home from "./pages/home/page";
import AuthProtection from "./protectedRoutes/AuthRoutes";
import LoginProtection from "./protectedRoutes/LoginRoutes";
import Layout from "./pages/common/components/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginProtection />}>
          <Route element={<Auth />} path="/login" />
        </Route>

        <Route element={<AuthProtection />}>
          <Route element={<Layout children={<Home />} />} path="/" />
        </Route>

        {/* 404 */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen   justify-center items-center">
              <h1 className="text-xl">404 not found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
