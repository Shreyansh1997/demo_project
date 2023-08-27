import {useState } from "react";
import React from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
// import { useNavigate} from "react-router-dom";
import * as yup from "yup";

function NewBatch()
{
     
    const [reg, setreg] = useState({});
   const handleChange1 = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setreg(values => ({ ...values, [name]: value }))
       console.log("values fetching");
   }
   const handleSubmit = (event) => {
    console.log("values fetched");
      let demo = JSON.stringify(reg);
      fetch("https://localhost:7005/api/Batches/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
      event.preventDefault();
   }
    const defaultValue={
       batchName:"" ,
       batchTiming:"",
       batchIsActive:false,
       startDate:"",
       endDate:"",
       finalPresentationDate:"",
       totalCourseHours:"",
       courseFees:"",
       courseId:""
    }
   const validationSchema = yup.object().shape({
   batchName: yup.string().required("mandatory field"),
   batchTiming: yup.date().required("mandatory field"),
   batchIsActive:yup.boolean().required("mandatory field"),
   startDate:yup.date().required("mandatory field"),
   endDate:yup.date().required("mandatory field"),
   finalPresentationDate:yup.date().required("mandatory field"),
   totalCourseHours:yup.number().required("mandatory field"),
   courseFees:yup.number().required("mandatory field"),
   courseId:yup.number().required("mandatory field")

   })
    
    return(
        
        <div className="container">
        <div className="col-md-12-text-center mt-5">
        <div className="regis">
         <h1 style={{textAlign:"center"}}> Batch Details</h1>
        <Formik initialValues={defaultValue} 
          onSubmit={handleSubmit} >
            <Form onSubmit={handleSubmit} className="form-control">
            
            <div>    
        <label>Batch Name</label> <Field type="text" name="batchName" placeholder="Enter Batch Name" value={reg.batchName} onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="batchName" />
         </p>
         </div>
         <div>
         <label>Batch Timing</label> <Field type="date" name="batchTiming" placeholder="Enter BatchTiming" value={reg.batchTiming} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="batchTiming" />
         </p>
         </div>
         <br></br>
         <div>
         <label>BatchIsActive</label>    <Field component="select" name="batchIsActive" placeholder="select" value={reg.batchIsActive} onChange={handleChange1} className="form-control" >

                <option value="" disable>Please Select</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </Field>
            <p className="text-danger">
            <ErrorMessage name="batchIsActive" />
         </p>
        </div>
        <br></br>
        <div>
         <label>Starting Date</label> <Field type="date" name="startDate" placeholder="" value={reg.startDate} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="startDate" />
         </p>
         </div>
         <br></br>
         <div>
         <label>Ending Date</label> <Field type="date" name="endDate" placeholder="" value={reg.endDate} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="endDate" />
         </p>
         </div>
         <br></br>
         <div>
         <label>Final Presentation Date</label> <Field type="date" name="finalPresentationDate" placeholder="" value={reg.finalPresentationDate} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="finalPresentationDate" />
         </p>
         </div>
         <br></br>
         <div>
         <label>Total Course Hours</label> <Field type="text" name="totalCourseHours"  value={reg.totalCourseHours} onChange={handleChange1} className="form-control"></Field>
         <p className="text-danger">
            <ErrorMessage name="totalCourseHours" />
         </p>
         </div>
         <br></br>
         <div>
         <label>Total Course Fees</label> <Field type="text" name="courseFees"  value={reg.courseFees} onChange={handleChange1} className="form-control" required></Field>
         <p className="text-danger">
            <ErrorMessage name="courseFees" />
         </p>
         </div>
         <br></br>
         <div>
         <label>Course Name</label>    <Field component="select" name="courseId" placeholder="select" value={reg.courseId} onChange={handleChange1} className="form-control" required>

        <option value="" disable>Please Select</option>
        <option value="1">LittleChamp</option>
        <option value="2">Compchamp</option>
        <option value="3">Ms-Cit</option>
        <option value="4">PG-DAC</option>
        <option value="5">PG-DBDA</option>
        <option value="6">Senior Citizen Course</option>
         </Field>
         <p className="text-danger">
            <ErrorMessage name="courseId" />
         </p>

         </div> 

       <button className="btn btn-primary" type="submit">
            Submit
    </button>
            </Form>
        </Formik>
   
        </div>
        </div>
        </div>
        
    )       
}
export default NewBatch;