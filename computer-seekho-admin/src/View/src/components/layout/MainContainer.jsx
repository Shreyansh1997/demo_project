import React from "react";
import Gallary from "../../pages/Gallary";
import Placement from "../../pages/Placement";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Header from "./Header";
import Herosection from "./Herosection";
import TopBar from "./TopBar";
import Whyus from "./Whyus";
import { Outlet } from "react-router-dom";
import Album from "../../pages/Album";
function MainContainer() {
  return (
    <>
      <TopBar />
      <Header />
     
      {/* <Herosection /> */}
      <Outlet />
      {/* <Whyus /> */}
    
      {/* <Placement />
      <Aboutus/> */}
     
      <Footer />
     
    </>
  );
}

export default MainContainer;
