
// import { Formik, Field, Form,ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate, Link, json} from "react-router-dom";
// import {useState } from "react";
// import PrintData2 from "./PrintData2";

// function Payment(){
//     const [formData,setformData] = useState({studentId:"" ,batchId:"",courses:"",courseFees:"",amount:"",paymod:"",balance:"" });
//     const [pay, setpay] = useState({}); 
//     const [courses, setcourses] = useState('');
//     const [amount,setamount] = useState("");


//     let navigate = useNavigate();

//     const handleChange1 = (event) => {
//         setcourses(event.target.value);
//         setformData(event.target.value);
//       }

//       function handleMultipleChanges(event) {
//         handleChange(event);
//         handleChange1(event);
//       }

//       function handlemultipleChange(event) {
//         handleChange(event);
//         setamount(event.target.value);
//         setformData(event.target.value);
//       }

//       function handleFocus(){
//         const x=JSON.stringify(courseFees[courses]);
//         console.log(x);
//         const y=JSON.stringify(amount);
//         console.log(y);
//        const  z=parseInt(x);
//         console.log(z);
//       }

//     const course = [
//         { value:"LittleChamp", label:"LittleChamp"},
//         {value : "CompChamp", label:"CompChamp" },
//         {value : "MScIt", label:"MScIt"},
//         {value : "Dac",label: "PG DAC"},
//         {value : "Dbda",label:"PG Dbda"},
//         {value :"SeniorCitizensCourse",label:"SeniorCitizensCourse"}
//       ];
     
//       const courseFees = {
//         LittleChamp: [
//           { value: "3500", label: "3500" }
//         ],
//         CompChamp: [
//           { value: "10000", label: "10000" }
//         ],
//         MScIt: [
//           { value: "15000", label: "15000" }
//         ],
//         Dac: [
//           { value: "96000", label: "96000" }
//         ],
//         Dbda: [
//           { value: "124000", label: "124000" }
//         ],
//         SeniorCitizensCourse: [
//           { value: "12000", label: " 12000" }
//         ]
//       };
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setpay(values => ({ ...values, [name]: value }))
//         setformData(event.target.value);
    
//     }
//     const handleSubmit = (event) => {
//         let demo = JSON.stringify(pay);
//         fetch("https://localhost:7005/api/Payments",{
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: demo
//         }).then(r => { console.log(r.json()) })
//         // navigate('/');
//         event.preventDefault();
//      }
//     const defaultValue={
        
//         studentId:"",
//         batchId:"",
//         courseFees:"",
//         amount:"",
//         paymod:"",
//         balance:""
//     }
    
//     const validationSchema = Yup.object().shape({
       
//         studentId:Yup.string()
//         .matches(/^[0-9]+$/, "Must be only digits")
//         .required(""),
//         batchId:Yup.string()
//         .matches(/^[0-9]+$/, "Must be only digits")
//         .required(""),
//         courseFees:Yup.string()
//         .matches(/^[0-9]+$/, "Must be only digits")
//         .required("")
//     });
    
//     return(
//         <div>
//           <Link to='/AdminHome'>back</Link>

//         <h1 style={{textAlign:"center"}}>Payment Form</h1>
//         <div className="container">
//         <div className="col-md-12-text-center mt-5">

//         <Formik initialValues={defaultValue} validationSchema={validationSchema}  onSubmit={handleSubmit}>
        
//         <Form onSubmit={handleSubmit}>
        
//          <label>Student Id</label> <Field type="number" id="studentId" name="studentId" value={pay.studentId} onChange={handleChange} placeholder="Enter Your Student Id" className="form-control" required/>
//          <p className="text-danger">
//             <ErrorMessage name="studentId" />
//          </p> 
//          <label>Batch Id</label> <Field type="number" name="batchId" value={pay.batchId} onChange={handleChange} placeholder="Enter Your Batch Id" className="form-control" />
//            <p className="text-danger">
//             <ErrorMessage name="batchId" /> 
//          </p> 

//          <div>
//       <label htmlFor="Select-Course">Select Course:</label>
//       <select id="Select-Course" value={pay.courses} onChange={handleMultipleChanges} required>
//         <option value="">Please select an option</option>
//         {course.map((option) => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>
//       <p className="text-danger">
//             <ErrorMessage name="course"/>
//          </p>
//       {courses && (
//         <>
//           <br />
//           <label htmlFor="Select-Batches">coursefees</label>
//           <select id="Select-Batches">
//             &nbsp;
//             {/* <option value="" onChange={handleChange1}>select</option> */}
//             {courseFees[courses].map((option) => (
//               <option key={option.value} value={option.value} >{option.label}</option>
//             ))}
//           </select>
//           &nbsp;
//         </>
//       )}
//     </div>
//     &nbsp;<br/>
//     <label>Payment Amount</label> <Field type="number" name="amount" value={pay.amount} value2={pay.amount} onChange={handlemultipleChange} placeholder="Enter amount to be paid" className="form-control"/>
//            <p className="text-danger">
//             <ErrorMessage name="amount" /> 
//          </p> 
        

// <label>Balance Amount</label> <Field type="number" name="balance" value={pay.balance} onFocus={handleFocus} placeholder="" className="form-control"/>
//            <p className="text-danger">
//             <ErrorMessage name="balance" /> 
//          </p> 
        
//         <label>Payment Mode</label>  <Field component="select" name="paymod" placeholder="select payment mode" value={pay.paymod} onChange={handleChange} className="form-control" >

// <option value="" disable>Please Select</option>
// <option value="Cash">Cash</option>
// <option value="Cheque">Cheque</option>
// <option value="DD">Demand Draft</option>
// </Field>
// <p className="text-danger">
// <ErrorMessage name="paymod" />
// </p>

//          <button className="btn btn-primary" type="submit">
//             Submit
//     </button>    &nbsp;
//     <button className="btn btn-primary" onClick={() => window.print()}>Print Receipt</button>
//       <PrintData2 formData={formData} />
//         </Form>
//         </Formik>
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Payment;
           
import React from "react";
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link, json} from "react-router-dom";
import {useState } from "react";
import PrintData2 from "./PrintData2";
import { useEffect } from "react";

function PaymentForm(){
    const [formData,setformData] = useState({studentId:"" ,batchId:"",courses:"",courseFees:"",amount:"",paymod:"",balance:"" });
    const [pay, setpay] = useState({}); 
    const [selectedCourseFee, setselectedCourseFee] = useState('');
    const [amount,setamount] = useState("");
    const [balance,setbalance] = useState("");
    const [Courses,setCourses] = useState([]);
     
    useEffect(() => {
        fetch("https://localhost:7005/api/Courses")
          .then((response) => response.json())
          .then((data) => {
            setCourses(data)
          });
        
      }, []);


      const handleCourseChange = (event) => {
        setselectedCourseFee(event.target.value);
      
      };

      


    let navigate = useNavigate();

  

      function handleMultipleChanges(event) {
        handleChange(event);
        // handleChange1(event);
      }

      function handlemultipleChange(event) {
        handleChange(event);
        setamount(event.target.value);
        setformData(event.target.value);
      }

      function handleFocus(){
       
       const  z=selectedCourseFee-parseInt(amount)
        setbalance(z);
      }

   
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setpay(values => ({ ...values, [name]: value }))
        setformData(event.target.value);
    
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(pay);
        fetch("https://localhost:7005/api/Payments",{
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r.json()) })
        // navigate('/');
        event.preventDefault();
     }
    const defaultValue={
        
        studentId:"",
        batchId:"",
        courseFees:"",
        amount:"",
        paymod:"",
        balance:""
    }
    
    const validationSchema = Yup.object().shape({
       
        studentId:Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("StudentId is required"),
        batchId:Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("BatchId is required"),
        courseFees:Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Coursefees is required")
    });

    
         
    return(
        <div>
          <Link to='/AdminHome'>back</Link>

        <h1 style={{textAlign:"center"}}>Payment Form</h1>
        <div className="container">
        <div className="col-md-12-text-center mt-5">

        <Formik initialValues={defaultValue} validationSchema={validationSchema}  onSubmit={handleSubmit}>
        
        <Form onSubmit={handleSubmit}>
        
         <label>Student Id</label> <Field type="text" id="studentId" name="studentId" value={pay.studentId} onChange={handleChange} placeholder="Enter Your Student Id" className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="studentId" />
         </p> 
         
         <div>
      <label htmlFor="Select-Course">Select Course:</label>
      <select id="Select-Course" value={selectedCourseFee} onChange={handleCourseChange}>
        <option value="">Please select an option</option>
        {Courses.map((option) => (
          <option key={option.courseId} value={option.courseFees}>{option.courseName}</option>
        ))}
      </select>
      <p className="text-danger">
            <ErrorMessage name="course"/>
         </p>
      {/* {courses && (
        <>
          <br />
          <label htmlFor="Select-Batches">courfees</label>
          <select id="Select-Batches">
            &nbsp;
            {/* <option value="" onChange={handleChange1}>select</option> */}
            {/* {courseFees[courses].map((option) => (
              <option key={option.value} value={option.value} >{option.label}</option>
            ))}
          </select>

        </>
      )} */} 
    </div>

     <label>CourseFees</label> <Field type="text" name="CourseFees" value={selectedCourseFee}  onChange={handleChange} placeholder="Enter amount to be paid" className="form-control"/>
           <p className="text-danger">
            <ErrorMessage name="amount" /> 
         </p>     

    <label>Payment Amount</label> <Field type="text" name="amount" value={pay.amount}  onChange={handlemultipleChange} placeholder="Enter amount to be paid" className="form-control"/>
           <p className="text-danger">
            <ErrorMessage name="amount" /> 
         </p> 
        

<label>Balance Amount</label> <Field type="text" name="balance" value={balance} onFocus={handleFocus} onChange={handleChange} placeholder="" className="form-control"/>
           <p className="text-danger">
            <ErrorMessage name="balance" /> 
         </p> 
        
        <label>Payment Mode</label>  <Field component="select" name="paymod" placeholder="select payment mode" value={pay.paymod} onChange={handleChange} className="form-control" >

<option value="" disable>Please Select</option>
<option value="Cash">Cash</option>
<option value="Cheque">Cheque</option>
<option value="DD">Demand Draft</option>
</Field>
<p className="text-danger">
<ErrorMessage name="paymod" />
</p>

         <button className="btn btn-primary" type="submit">
            Submit
    </button>    &nbsp;
    <button className="btn btn-primary" onClick={() => window.print()}>Print Receipt</button>
      <PrintData2 formData={formData} />
        </Form>
        </Formik>
        </div>
        </div>
        </div>
    )
}

export default PaymentForm;



