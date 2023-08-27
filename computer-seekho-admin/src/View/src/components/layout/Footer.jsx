import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const handleclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Computer-seekho</h3>
                <p>
                  5th Floor, Vidyanidhi Education <br />
                  juhu , mumbai 400043 Scheme, Andheri (W), Mumbai 400 049
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> 9324095272 / 9029435311
                  <br />
                  <strong>Email:</strong> computer.seekho2022@gmail.com
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link
                      className="bx bx-chevron-right"
                      onClick={handleclick}
                      to={"/"}
                    >
                      Home
                    </Link>
                    {/* <i className="bx bx-chevron-right" /> <a href="#">Home</a> */}
                  </li>
                  <li>
                    <Link
                      className="bx bx-chevron-right"
                      onClick={handleclick}
                      to={"/about"}
                    >
                      Aboutus
                    </Link>
                    {/* <i className="bx bx-chevron-right" />{" "}
                    <a href="#">About us</a> */}
                  </li>
                  <li>
                    <Link
                      className="bx bx-chevron-right"
                      onClick={handleclick}
                      to={"/placement"}
                    >
                      Placement
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <br></br>
                <br></br>
                <ul>
                  <li>
                    <Link
                      className="bx bx-chevron-right"
                      onClick={handleclick}
                      to={"/Gallary"}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bx bx-chevron-right"
                      onClick={handleclick}
                      to={"/ContactUs"}
                    >
                      ContactUs
                    </Link>
                  </li>
                 
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>ComputerSeekho</p>
                <form action method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-lg-flex py-4">
          <div className="me-lg-auto text-center text-lg-start">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Computer-seekho</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexor-free-multipurpose-bootstrap-template/ */}
              Designed by <b> Group 4 (Computer Seekho) </b>
            </div>
          </div>
          <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Footer;
