import React from "react";

function Aboutus() {
  return (
    <>
      <section id="about" className="about section-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative"
              data-aos="fade-right"
            >
              <a
                href="https://youtu.be/irj5K2olWD8"
                className="glightbox play-btn mb-4"
              />
            </div>
            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3 data-aos="fade-up"><b>About us</b></h3>
              <h3 data-aos="fade-up"># We believe</h3>
              <p data-aos="fade-up">
                To learn and work successfully in an increasingly
                information-rich society, one must be able to use technology
                effectively and creatively. This applies to all strata of
                society...students, teachers, professionals, home-makers, and
                senior citizens.
              </p>
              <div className="icon-box" data-aos="fade-up">
                <div className="icon">
                  <i className="bx bx-fingerprint" />
                </div>
                <h4 className="title">
                  <a href="">VISION</a>
                </h4>
                <p className="description">
                  The vision statement of 'Computer Seekho' given below reflects
                  its deep conviction for high quality inclusive education: To
                  remain always inclusive and quality conscious, and with deep
                  conviction that knowledge not only improves the quality of
                  life, but leads to good character, to capitalize on our
                  inherent advantages to generate skilled manpower for nation
                  building through excellent teaching, attracting talent,
                  fostering creativity, research, and innovation
                </p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon">
                  <i className="bx bx-gift" />
                </div>
                <h4 className="title">
                  <a href="">Our Vision</a>
                </h4>
                <p className="description">
                  The vision statement of 'Computer Seekho' given below reflects
                  its deep conviction for high quality inclusive education: To
                  remain always inclusive and quality conscious, and with deep
                  conviction that knowledge not only improves the quality of
                  life, but leads to good character, to capitalize on our
                  inherent advantages to generate skilled manpower for nation
                  building through excellent teaching, attracting talent,
                  fostering creativity, research, and innovation.
                </p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon">
                  <i className="bx bx-atom" />
                </div>
                <h4 className="title">
                  <a href="">Our Mission</a>
                </h4>
                <p className="description">
                Expand the frontiers of Computer Technology.
          Evolve technology solutions - architectures, systems and standards for idustrial important problems.
          Achieve rapid and effective spread of knowledge by overcoming language barriers through application of technologies.
          Share experience and know-how to help build advanced competence in the area of Computer Technology.
          Bring benefits of Computer Technology to society.
                </p><br/>
                <h4 className="title">
                  <a href=""># What we offer</a><br/><br/>
                  <p>
                  * Maharashtra State Certificate In Information technology(MS-CIT)
                  </p>
                  <p>
                  * Post Graduate Diploma in Advance Computing(PG DAC)
                  </p>
                  <p>
                  * Post Graduate Diploma in Big Data Analysis(PG DBDA)
                  </p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
}

export default Aboutus;
