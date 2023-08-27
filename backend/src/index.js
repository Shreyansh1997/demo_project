import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminHome from "./AdminHome";
import Enquiry from "./Enquiry";
import FollowUp from "./FollowUp";
import Staff from "./Staff";
import Ex from "./Ex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/AdminHome" element={<AdminHome />}></Route>
      <Route path="/Enquiry" element={<Enquiry />}></Route>
      <Route path="/FollowUp" element={<FollowUp />}></Route>
      <Route path="/Staff" element={<Staff />}></Route>
      <Route path="/Ex" element={<Ex />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
