
import { useState } from "react";
import {Formik , Form, Field,ErrorMessage} from "formik";
import * as yup from "yup";
import './Enquiry.css';
import { useNavigate,Link} from "react-router-dom";


function FollowUp() {
  // Example React component to post data
 
  const [flw, setFlw] = useState({ enquirerName:"",studentName:"",courseName:"",followUpDate:"",staffName:"",staffId:"", mobile:"",emailId:""});
  //let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFlw(values => ({ ...values, [name]: value }))

}
  
    const handleSubmit = (event) => {
      let demo = JSON.stringify(flw);
      fetch("https://localhost:7005/api/FollowUps/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => r.json());
      //navigate('/');
     // event.preventDefault();
   }

  
    //initial schema
    const defaultValue = {
        enquirerName: "",
        studentName:"",
          
          followUpDate:"",
          staffName:"",
          staffId:"",
          mobile:"",
          emailId:""
    }
    
    //validation schemaa
    const validationSchema = yup.object().shape({
        enquirerName: yup.string().required("please enter enquirer name"),
        studentName: yup.string().required("please enter student name"),
        
        followUpDate: yup.string().required("please select date"),
      staffName: yup.string().required("please enter staff name"),
      staffId: yup.string().required("please enter satff id"),
      mobile: yup.string().required("please enter mobile number"),
      emailId: yup.string().required("please enter your email").email("please enter a valid email"),
        
      })

      const handleSubmit1 = (values) => {
        console.log("values",values)
    }
    
    
      
    return (

      <div className='enquirydiv'>
        <Link to='/AdminHome'>back</Link>
      <h3 style={{ textAlign: 'center',paddingTop:'2em'}}>FollowUp Form</h3>
      <p style={{ paddingLeft:'4em',color:'red'}}>* required field</p>
            
            <Formik initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit1}>
                <Form className='enquiry'onSubmit={handleSubmit}>
                    
                    {/* EnquirerName */}
                    <label>Enquirer Name</label><Field type="text" name="enquirerName" placeholder="Enter your name" value={flw.enquirerName}  onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="enquirerName" /></p>
                    

                     {/* StudentName */}
                    <label>Student Name</label><Field type="text" name="studentName" placeholder="Enter your name"  value={flw.studentName} onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="studentName" /></p>

                      {/* Course Name */}
                    <label>Course Name</label>
                    <select name="courseName" aria-label="Default select example" value={flw.courseName}  onChange={handleChange} className="form-control">
                       <option className="active-link">--Select Course--</option>
                       <option value="1">Little Champ (6-8yrs) </option>
                       <option value="2">Comp Champ (9-14) </option>
                       <option value="3">MS-CIT</option>
                       <option value="4">Senior Citizen (60+yrs) </option>
                       <option value="5">PG-DAC</option>
                       <option value="6">PG-DBDA</option>
                    </select>
                    <p className="text-danger"><ErrorMessage name="courseName" /></p>
                   

                   {/* FollowUpDate */}
                    <label>Follow Up Date</label><Field type="date" name="followUpDate" placeholder="Enter your name"  value={flw.followUpDate}  onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="followUpDate" /></p>

                  {/* StaffName */}
                    <label>Staff Name</label><Field type="text" name="staffName" placeholder="Enter your name" value={flw.staffName} onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="staffName" /></p>

                  {/* Staff Id */}
                    <label>Staff Id</label><Field type="number" name="staffId" placeholder="Enter your name" value={flw.staffId}  onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="staffId" /></p>

                  {/* Mobile */}
                    <label>Mobile</label><Field type="number" name="mobile" placeholder="Enter your name" value={flw.mobile} onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="mobile" /></p>
                  
                   {/* Email Id */}
                    <label>EmailId</label><Field type="email" name="emailId" placeholder="Enter your name" value={flw.emailId} onChange={handleChange} className="form-control" />
                    <p className="text-danger"><ErrorMessage name="emailId" /></p>
                    




                  
<button className="btn btn-primary" type="submit">submit</button>

                </Form>
            </Formik>
        
        </div> 
    )
}
export default FollowUp;
                  
                  