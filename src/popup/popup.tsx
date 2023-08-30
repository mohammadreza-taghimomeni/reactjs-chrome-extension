import React from "react";
import "./popup.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobinja from "./pages/jobinja";

const Popup = () => {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>change language</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobinja" element={<Jobinja />} />
        <Route path="/linkedIn" element={<Jobinja />} />
      </Routes>
    </div>
  );
};

export default Popup;
