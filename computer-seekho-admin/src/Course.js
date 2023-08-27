
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';

function Course() {
  const [cour, setCourses] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCourses(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (values, { setSubmitting }) => {
    let demo = JSON.stringify(values);
    fetch("https://localhost:7005/api/Courses/", {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSubmitting(false);
    })
    .catch(error => {
      console.log(error);
      setSubmitting(false);
    });
  }

  const validationSchema = Yup.object().shape({
    CourseName: Yup.string()
      .required(''),
    CourseModule: Yup.string()
      .required(''),
    CourseFees: Yup.string()
      .required(''),
    CourseDuration: Yup.string()
      .required(''),
    CourseIsActive: Yup.string()
      .required(''),
    CoverPhoto: Yup.string()
      .required(''),
  });

  return(
    <div>
      <Link to='/AdminHome'>back</Link>
      <h1 style={{textAlign:"center"}}>Course Form</h1>
      <div className="container">
        <div className="col-md-12-text-center mt-5">
          <Formik
            initialValues={cour}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <label>Course Name</label>
                <Field type="text" name="CourseName" placeholder="Enter Course Name" className="form-control"/>
                <p className="text-danger">
                  <ErrorMessage name="CourseName" />
                </p> 
                <label>Course Modules</label>
                <Field type="text" name="CourseModule" placeholder="Enter Course Modules" className="form-control"/>
                <p className="text-danger">
                  <ErrorMessage name="CourseModule" /> 
                </p> 
                <label>Course Fees</label>
                <Field type="text" name="CourseFees" placeholder="Enter Course Fees" className="form-control"/>
                <p className="text-danger">
                  <ErrorMessage name="CourseFees" />
                </p> 
                <label>Course Duration</label>
                <Field type="text" name="CourseDuration" placeholder="Enter Course Duration" className="form-control"/>
                <p className="text-danger">
                  <ErrorMessage name="CourseDuration" />
                </p> 
                <label>Is Course Active</label>
                <Field component="select" name="CourseIsActive" className="form-control" >
                  <option value="" >Please Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Field>
                <p className="text-danger">
                  <ErrorMessage name="CourseIsActive" />
                </p>
                <label>Cover Photo</label>
                <Field type="file" name="CoverPhoto" placeholder="Enter Cover Photo" className="form-control"/>
                <p className="text-danger">
                  <ErrorMessage name="CourseIsActive" />
                  </p>
                  <button className="btn btn-primary" type="submit">
             Submit
     </button> 
         </Form>)}
         </Formik>
         </div>
         </div>
         </div>
     )
 }

 export default Course;