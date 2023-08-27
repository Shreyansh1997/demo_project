import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com"> <marqu>computer.seekho2022@gmail.com</marqu></a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span></span>
            <marqu>9634785246</marqu>
          </i>
        </div>
        <div className="cta d-none d-md-flex align-items-center">
          <Link to={"/"}> Get Started</Link>
           
          
        </div>
      </div>
    </section>
  );
}

export default TopBar;
