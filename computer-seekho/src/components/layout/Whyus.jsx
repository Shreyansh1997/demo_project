import React from 'react'
import { Link } from 'react-router-dom';

function Whyus() {
  return (
    
    
    <>
  {/* ======= Why Us Section ======= */}
  <section id="why-us" className="why-us">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5" data-aos="fade-up">
          <div className="content">
            <h3>Why Choose Computer-Seekho ?</h3>
            <p>
            Our institute has been present for over 20 years in the market. We make the most of all our students.
            </p>
            <div className="text-center">
             
                <Link className="more-btn" to={"/about"}> Learn More </Link>
               <i className="bx bx-chevron-right" />
             
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7 d-flex">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div
                className="col-xl-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-receipt" />
                  <h4>Best in class Infrastructure</h4>
                  <p>
                    our infrastructure is best for teching 
                  </p>
                </div>
              </div>
              <div
                className="col-xl-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-cube-alt" />
                  <h4>Best Faculty / Teachers</h4>
                  <p>
                   we have best teachers for each and every module.they are the best Faculty in perticular subject
                  </p>
                </div>
              </div>
              <div
                className="col-xl-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-images" />
                  <h4>Placement</h4>
                  <p>
                  More than 95% Placement for 10 Consecutive batches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Why Us Section */}
</>

  );
}

export default Whyus
