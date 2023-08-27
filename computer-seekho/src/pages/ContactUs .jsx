import React, { useState } from "react";
import { Formik } from "formik";
import Container from "react-bootstrap/esm/Container";
import "./ContactUs.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function ContactUs() {
  const [name, setName] = useState();
  const [parentName, setParentName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [yourQuery, setYourQuery] = useState();
  const contactdata = {
    name: name,
    parentName: parentName,
    email: email,
    mobile: mobile,
    address: address,
    yourQuery: yourQuery,
  };

  return (
    <div>
      <Container>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1stGhW18BlVNvS4Hd68Q0xrAnpSKFYoM&ehbc=2E312F"
          width="100%"
          height="500"
          // width="600"
          // height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Container>
      <div>
        <Container fluid="md">
          <Row>
            <Col>
              <Formik
                initialValues={{
                  name: "",
                  parentName: "",
                  email: "",
                  mobile: "",
                  address: "",
                  yourQuery: "",
                }}
                onSubmit={(values) => {
                  console.log(contactdata);
                }}
              >
                {({ handleChange, handleBlur, values, handleSubmit }) => (
                  <form className="col-1" onSubmit={handleSubmit}>
                    <label htmlFor="name">
                      <span>Name</span>
                      <input
                        name="name"
                        type="string"
                        onChange={(e) => setName(e.target.value)}
                        // onBlur={handleBlur}
                        //  value={values.name}
                        required
                      />
                    </label>
                    <br />
                    <label htmlFor="parentNamet">
                      <span>Parent Name</span>
                      <input
                        name="parentName"
                        type="string"
                        onChange={(e) => setParentName(e.target.value)}
                        // onBlur={handleBlur}
                        //  value={values.parentName}
                        required
                      />
                    </label>
                    <br />
                    <label htmlFor="email">
                      <span>Email</span>
                      <input
                        name="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        // onBlur={handleBlur}
                        //  value={values.email}
                        required
                      />
                    </label>
                    <br />
                    <label htmlFor="mobile">
                      <span>Mobile</span>
                      <input
                        name="mobile"
                        type="string"
                        onChange={(e) => setMobile(e.target.value)}
                        // onBlur={handleBlur}
                        //  value={values.mobile}
                        required
                      />
                    </label>
                    <br />
                    <label htmlFor="address">
                      <span>Address</span>
                      <input
                        name="address"
                        type="string"
                        onChange={(e) => setAddress(e.target.value)}
                        // onBlur={handleBlur}
                        // value={values.address}
                        required
                      />
                    </label>
                    <br />
                    <label htmlFor="yourQuery">
                      <span>Queries</span>
                      <input
                        name="yourQuery"
                        type="string"
                        onChange={(e) => setYourQuery(e.target.value)}
                        // onBlur={handleBlur}
                        //  value={values.yourQuery}
                        required
                      />
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                  </form>
                )}
              </Formik>
            </Col>
            <Col>
              <br />
              <br />
              <h5 class="widget-title">
                <strong>Contact Us</strong>
              </h5>

              <ul class="flat-information">
                <i class="marker"></i>
                <strong>Authorised Training Centre</strong>
                <br />
                5th Floor, Computer Seekho Training Center, Andheri (W), Mumbai
                400 049 India
                <i class="fa fa-phone"></i>
                <a>9876543210 / 9123456789</a>
                <i class="fa fa-phone"></i>
                <a> 9632587410</a>
                <i class="fa fa-envelope"></i>
                <a href="mailto:computer.seekho2022@gmail.com">
                  computer.seekho2022@gmail.com
                </a>
              </ul>

              <p class="float-end">
                <a href="#">Back to top</a>
              </p>
              <p>
                &copy; 1956–2022 Company, Inc. &middot;{" "}
                <a href="#">Privacy policy</a> &middot;{" "}
                <a href="#">Terms & Conditions</a>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default ContactUs;
