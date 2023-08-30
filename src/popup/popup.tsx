import React from "react";
import "./popup.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const Popup = () => {
  return (
    <div>
      <div>change language</div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Popup;
