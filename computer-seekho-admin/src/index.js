import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminHome from "./AdminHome";
import Enquiry from "./Enquiry";
import FollowUp from "./FollowUp";
import Staff from "./Staff";
import Printtest from "./Printtest";
import Payment from "./Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Batches from "./Batches";
import ViewStudent from "./ViewStudent";
import NewBatch from "./NewBatch";
import GalleryImages from "./GalleryImages";
import GalleryVideos from "./GalleryVideos";
import GalleryAlbum from "./GalleryAlbum";
import Placement from "./Placement";
import RouteAdmin from "./Routetable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RouteAdmin />
    <RouterProvider />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
