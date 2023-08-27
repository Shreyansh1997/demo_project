import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AdminLogin.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [log, setlogin] = useState({ userName: "", password: "" });
  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setlogin((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let demo = JSON.stringify(log);
    fetch("https://localhost:7005/api/authentications", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.userName) {
          console.log(data);
          //alert("Login done");
          navigate("/AdminHome");
          sessionStorage.setItem("userData", JSON.stringify(data));
          setIsLoggedIn(true);
        } else {
          alert("Invalid data");
        }
      })
      .catch((error) => console.log(error));
    //navigate('/AdminHome');
    //alert(stf.staffName+ " Added Successfully " );
    //event.preventDefault();
  };

  return (
    <div className="login">
      <Formik>
        <Form className="admin" onSubmit={handleSubmit}>
          <h4 style={{ textAlign: "center" }}>Admin Login</h4>

          {/* Username */}
          <label>Username</label>
          <Field
            type="text"
            name="userName"
            placeholder="Enter your name"
            value={log.userName}
            onChange={handleChange}
            className="form-control"
          />
          <p className="text-danger">
            <ErrorMessage name="userName" />
          </p>

          {/* Password */}
          <label>Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your name"
            value={log.password}
            onChange={handleChange}
            className="form-control"
          />
          <p className="text-danger">
            <ErrorMessage name="password" />
          </p>

          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* <Button variant="primary" type="submit" href="/Staff">
            Home
          </Button> */}
        </Form>
      </Formik>
    </div>
  );
}
export default AdminLogin;
