import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/login/page";
import "./pages/common/styles/utilities.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />} path="/login" />

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
