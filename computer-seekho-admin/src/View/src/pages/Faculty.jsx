import React from "react";

function Faculty() {
  return (
    <>
      {/* ======= Values Section ======= */}
      <section id="values" className="values">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div
                className="card"
                style={{ backgroundImage: "url(assets/img/ketkimam.jpg)" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Ketki Acharya </a>
                  </h5>
                  <p className="card-text">
                    C, Web Programming, .Net
                    <br />
                    Corporate Trainings conducted for Deloitte, Accenture,
                    Capgemini, Tata Consulting Engineering Ltd
                  </p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div
                className="card"
                style={{ backgroundImage: "url(assets/img/Nitinsir.jpg)" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Nitin Vijaykar </a>
                  </h5>
                  <p className="card-text">
                    C, Web Programming, .Net
                    <br />
                    C++, Core and Enterprise Java<br></br> Corporate Trainings
                    conducted for L&T Infotech, Geometrix, Capgemini, BNP
                    Paribas
                  </p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div
                className="card"
                style={{ backgroundImage: "url(assets/img/Dsasir.jpg)" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Amar Panchal </a>
                  </h5>
                  <p className="card-text">
                    Python Programming ,DSA <br /> Amar has 11 years of
                    experience in the software Industry and 10 years in
                    teaching. His unique, innovative style of teaching enable
                    students to be a developers real good ones!
                  </p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 d-flex align-items-stretch mt-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="card"
                style={{ backgroundImage: "url(assets/img/ponkshe.jpg)" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Jayant Ponkshe</a>
                  </h5>
                  <p className="card-text">
                    Project Mentor With over 25 years experience in the Software
                    Industry of which 10 years with Patni as Solution Architect
                    / Project Manager.
                  </p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-flex align-items-stretch mt-4"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div
                className="card"
                style={{ backgroundImage: "url(assets/img/Dbdasir.jpg)" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Predeep Tripati</a>
                  </h5>
                  <p className="card-text">
                    Big Data, AI and ML<br></br> An industry expert in BigData,
                    AI/ML and Business analytics with experience in successfully
                    implementing solutions for fortune 100 enterprises.
                  </p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Values Section */}
    </>
  );
}

export default Faculty;
