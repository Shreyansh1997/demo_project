import React from "react";
import { Link } from "react-router-dom";
import Gallary from "../../pages/Gallary";

function Header() {
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <a href="/">COMPUTER-SEEKHO</a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto" to={"/"}>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link className="nav-link scrollto active" to={"/Gallary"} > Gallery</Link>
                <a className="nav-link scrollto active" href="#about">
                 
                </a>
              </li> */}
              <li>
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/placement"}>
                  Placement
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Course</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <Link to={"/DAC"}>DAC</Link>
                  </li>
                  <li>
                    <Link to={"/DBDA"}>DBDA</Link>
                  </li>

                  <li>
                    <Link to={"/MSCIT"}>MS-CIT</Link>

                    {/* <a href="#">DAGGGC</a> */}
                  </li>

                  <li>
                    <Link to={"/LittleChamp"}>LIttle Champ</Link>
                    {/* <a href="#">SENIOR CITIZEN</a> */}
                  </li>
                  <li>
                    <Link to={"/COMPCHAMP"}>Comp Champ</Link>
                  </li>
                  <li>
                    <Link to={"/Seniorcitizen"}>Senior Citizen</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Course
                </a>
              </li> */}
              <li>
                <Link className="nav-link scrollto" to={"/Faculty"}>
                  Faculty
                </Link>
              </li>
              <Link className="nav-link scrollto active" to={"/Album"}>
                Gallery{" "}
              </Link>
              <Link
                className="nav-link scrollto active"
                to={"http://localhost:3005/AdminLogin"}
              >
                Admin
              </Link>

              {/* <Link
                className="nav-link scrollto active"
                to={"/admin"}
              >
                Admin
              </Link> */}

              {/* <li>
                <a className="nav-link scrollto" href="#pricing"></a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
               */}
              <li>
                <Link className="nav-link scrollto" to={"/ContactUs"}>
                  Contact Us
                </Link>
                {/* <a className="nav-link scrollto" href="#contact">
                  Contact
                </a> */}
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}

export default Header;
