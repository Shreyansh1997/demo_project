import {useEffect, useState } from "react";
import React from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import { useNavigate , Link} from "react-router-dom";
import PrintData from './Print';

function Printtest()
{
   const [formData,setformData] = useState({StudentName:"" ,Gender:"",termsAndCond:false,ResidentialAddress:"",Mobile:"",EmailId:"",Qualification:"",CourseEnrolled:"",startigDate:"",StudentImage:"",BatchId:"" });
   const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');


   const handleChange = (event) => {
    selectedCourse(event.target.value);
      setformData(event.target.value);
    }
    useEffect(() => {
      fetch("https://localhost:7005/api/Courses")
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      if (selectedCourse !== '') {
        fetch("https://localhost:7005/api/Batches/  " +selectedCourse)
          .then(response => response.json())
          .then(data => setBatches(data))
          .catch(error => console.error(error));
          console.log(batches);
      } else {
        setBatches([]);
      }
    }, [selectedCourse]);
  
    const handleCourseChange = (event) => {
      setSelectedCourse(event.target.value);
      console.log(event.target.value);
     
    };
  
    const handleBatchChange = (event) => {
      setSelectedBatch(event.target.value);
    };
  
  
    // const course = [
    //   { value:"LittleChamp", label:"Little Champ"},
    //   {value : "CompChamp", label:"Comp Champ" },
    //   {value : "MScIt", label:"MScIt"},
    //   {value : "Dac",label: "PG DAC"},
    //   {value : "Dbda",label:"PG Dbda"},
    //   {value :"SeniorCitizensCourse",label:"Senior Citizens Course"}
    // ];
   
    
    // const batches = {
    //   LittleChamp: [
    //     { value: "1", label: "LittleChamp Batch1" },
    //     { value: "2", label: "LittleChamp Batch2" }
    //   ],
    //   CompChamp: [
    //     { value: "3", label: "CompChamp Batch1" },
    //     { value: "4", label: "CompChamp Batch2" }
    //   ],
    //   MScIt: [
    //     { value: "5", label: "M.ScIt Batch1" },
    //     { value: "6", label: "M.ScIt Batch2" }
    //   ],
    //   SeniorCitizensCourse: [
    //     { value: "7", label: " SeniorCitizensCourse Batch1" },
    //     { value: "8", label: " SeniorCitizensCourse Batch2" }
    //   ],
    //   Dac: [
    //     { value: "9", label: "PG Dac Batch1" },
    //     { value: "10", label: "PG Dac Batch2" }
    //   ],
    //   Dbda: [
    //     { value: "11", label: "PG Dbda Batch1" },
    //     { value: "12", label: "PG Dbda Batch2" }
    //   ]
    // };
   
    const [reg, setreg] = useState({}); 
   let navigate = useNavigate();
   const handleChange1 = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setreg(values => ({ ...values, [name]: value }))
   }
   const handleSubmit = (event) => {
      let demo = JSON.stringify(reg);
      fetch("https://localhost:7005/api/Students/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
       navigate('/Payment');
      event.preventDefault();
   }
    const defaultValue={
       StudentName:"" ,
       DateOfBirth:"",
       Gender:"",
       termsAndCond:false,
       ResidentialAddress:"",
       Mobile:"",
       EmailId:"",
       Qualification:"",
       CourseEnrolled:"",
       StartingDate:"",
       StudentImage:"",
       BatchId:""
    }
   const validationSchema = yup.object().shape({
    StudentName: yup.string().min(2, 'Too Short!')
    .max(15, 'should not exceed 15 character!').required(""),
    Gender: yup.string().required(""),
    DateOfBirth: yup.string().required(""),
    EmailId: yup.string().required("Please enter your email").email("please enter valid email"),
    ResidentialAddress: yup.string().required(""),
    termsAndCond:yup.boolean().oneOf([true],""),
    Mobile: yup.string() .matches(/^[0-9]+$/, "Must be only digits").min(10, "Mobile number must be 10 digit at minimum").required(""),
    Qualification:yup.string().max(30,"should not exceed 30 charcters").required(""),
    StartingDate:yup.string().required(""),
    StudentImage: yup.string().required(""),
    CourseEnrolled:yup.string().required("")
   })

   function handleMultipleChanges(event) {
      handleChange(event);
      handleChange1(event);
    }
       
    
    return(
        <div>
           <Link to='/AdminHome'>back</Link> 

        <h1 style={{textAlign:"center"}}>Student Registration Form</h1>
        <div className="container">
        <div className="col-md-12-text-center mt-5">
        <div className="regis">
         
        <Formik initialValues={defaultValue} validationSchema={validationSchema}
          onSubmit={handleSubmit} >
            <Form onSubmit={handleSubmit}>
              
        <label>Name</label> <Field type="text" name="StudentName" placeholder="Enter Your Name" value={reg.StudentName} onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="StudentName" />
         </p>
         <label>DOB</label> <Field type="date" name="DateOfBirth" placeholder="Enter Your Birthdate" value={reg.DateOfBirth} onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="DateOfBirth" />
         </p>
         <label>Gender</label>    <Field component="select" name="Gender" placeholder="select your Gender" value={reg.Gender} onChange={handleChange1} className="form-control" required>

                <option value="" disable>Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transGender">TransGender</option>
            </Field>
            <p className="text-danger">
            <ErrorMessage name="Gender" />
         </p>
         <label>Res address</label> <Field type="text" name="ResidentialAddress" placeholder="Enter Your Address" value={reg.ResidentialAddress} onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="ResidentialAddress" />
         </p>
         <label>Mobile</label> <Field type="number" name="Mobile" placeholder="Enter Your MobileNo" value={reg.Mobile} onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="Mobile" />
         </p>
         <label>Email</label> <Field type="text" name="EmailId" placeholder="Enter Your email" value={reg.EmailId}  onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="EmailId" />
         </p>
         <label>Qualification</label> <Field type="text" name="Qualification" placeholder="Enter your Qualification" value={reg.Qualification} onChange={handleChange1} className="form-control" required/> 
         <p className="text-danger">
            <ErrorMessage name="Qualification"/>
         </p>
         <label>Starting Date</label> <Field type="date" name="StartingDate" placeholder="" value={reg.StartingDate} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="StartingDate"/>
         </p>
         <label>Upload Image</label> <Field type="file" name="StudentImage"  value={reg.StudentImage} onChange={handleChange1} className="form-control"></Field>
         <p className="text-danger">
            <ErrorMessage name="StudentImage"/>
         </p>


          <div>
          <label htmlFor="course">Course:</label>
      <select id="course" name="course" value={reg.selectedCourse} onChange={handleCourseChange}>
        <option value="">Select a course</option>
        {courses.map(course => (
          <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
        ))}
      </select>

      {selectedCourse !== '' && (
        <>
          <br />

          <label htmlFor="batch">Batch:</label>
          <select id="batch" name="batch" value={reg.selectedBatch} onChange={handleBatchChange}>
            <option value="">Select a batch</option>
            {batches.map(batch => (
              <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
            ))}

          </select>

        </>
      )}
      
    </div> 
   

        <div className="col-md-12 mt-4">
            <label className="form-inline">
            <Field type="checkbox" name="termsAndCond" required></Field>
            I accept terms and conditions
            </label>
            <p className="text-danger">
            <ErrorMessage name="termsAndCond" />
         </p>
         </div>
       <button className="btn btn-primary" type="submit">
            Submit
    </button> &nbsp;
    <button className="btn btn-primary" onClick={() => window.print()}>Print Form Data</button>
      <PrintData formData={formData} />
            </Form>
        </Formik>
        </div>
        </div>
        </div>
        </div>
        
    )       
}
export default Printtest;