import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Enquiry.css";
import { useNavigate, Link } from "react-router-dom";
import staff from "./Staff";

function Enquiry() {
  const [enq, setEnq] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEnq((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    let demo = JSON.stringify(enq);
    fetch("https://localhost:7005/api/Enquiries/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => r.json());
    //navigate('/');
    // event.preventDefault();
  };

  return (
    <div className="enquirydiv">
      <Link to="admin/AdminHome">back</Link>
      <h3 style={{ textAlign: "center", paddingTop: "2em" }}>Enquiry Form</h3>
      <p style={{ paddingLeft: "4em", color: "red" }}>* required field</p>

      <Formik>
        <Form className="enquiry" onSubmit={handleSubmit}>
          {/* Name */}
          <label>Name</label>
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            value={enq.name}
            onChange={handleChange}
            className="form-control"
          />

          {/* Parent Name */}
          <label>Parent Name</label>
          <Field
            type="text"
            name="parentName"
            placeholder="Enter Parent name"
            value={enq.parentName}
            onChange={handleChange}
            className="form-control"
          />

          {/* Email Id */}
          <label>emailId</label>
          <Field
            type="email"
            name="emailId"
            placeholder="Enter emailId"
            value={enq.emailId}
            onChange={handleChange}
            className="form-control"
          />

          {/* mobile */}
          <label>mobile</label>
          <Field
            type="text"
            name="mobile"
            placeholder="Enter your contact number"
            value={enq.mobile}
            onChange={handleChange}
            className="form-control"
          />

          {/* Address */}
          <label>Address</label>
          <Field
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={enq.address}
            onChange={handleChange}
            className="form-control"
          />

          {/* Queries */}
          <label>Queries</label>
          <Field
            type="textarea"
            name="queries"
            placeholder="Query Asked"
            value={enq.queries}
            onChange={handleChange}
            className="form-control"
          />

          {/* EnquiryDate */}
          <label>Enquiry Date</label>
          <Field
            type="date"
            name="enquiryDate"
            placeholder="Select Date"
            value={enq.enquiryDate}
            onChange={handleChange}
            className="form-control"
          />

          {/* ClosureReasonDesc */}
          <label>Closure Reason Desc</label>
          <Field
            type="textarea"
            name="closureReasonDesc"
            placeholder="Reason of closure"
            value={enq.closureReasonDesc}
            onChange={handleChange}
            className="form-control"
          />

          {/* ClosureReason */}
          <label>Closure Reason </label>
          <Field
            component="select"
            name="closureReason"
            placeholder="Select Reason"
            value={enq.closureReason}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" disable>
              --Select--
            </option>
            <option value="reason1">I changed my mind!!</option>
            <option value="reason2">Got a job opportunity!</option>
            <option value="reason3">Fees is High</option>
            <option value="other">other</option>
          </Field>

          {/* staffId */}
          <label>Staff Id</label>
          <Field
            component="select"
            name="StaffId"
            placeholder="Select File"
            value={enq.StaffId}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" disable>
              --Select--
            </option>
            <option value="1">1</option>
            <option value="7">2</option>
            <option value="8">3</option>
          </Field>

          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default Enquiry;
