import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />

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
