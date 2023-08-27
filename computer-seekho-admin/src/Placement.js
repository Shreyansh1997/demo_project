import {useState } from "react";
import React from "react";


function Placement()
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
      fetch("https://localhost:7005/api/placements/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
      event.preventDefault();
   }
    const defaultValue={
       courseName:"" ,
       batchId:"",
       batchName:"",
       studentId:"",
       studentName:"",
       companyName:"",
       studentImage:"",
       }

    
    return(
        
        <div className="container">
        <div className="col-md-12-text-center mt-5">
        <div className="regis">
         <h1 style={{textAlign:"center"}}> Placement Details</h1>
        
          
            <form onSubmit={handleSubmit} className="form-control">
            
            <div>    
        <label>Course Name</label> <input type="text" name="courseName" placeholder="Enter Course Name" value={reg.courseName} onChange={handleChange1} className="form-control"/>
         {/* <p className="text-danger">
            <ErrorMessage name="batchName" />
         </p> */}
         </div>
         <div>
         <label>Batch Id</label> <input type="text" name="batchId" placeholder="Enter BatchId" value={reg.batchId} onChange={handleChange1} className="form-control"/>
         </div>
         <br></br>
         <div>
         <label>Batch Name</label>    <input type="text" name="batchName" placeholder="Enter Batch Name" value={reg.batchName} onChange={handleChange1} className="form-control" >
            </input>
        </div>
        <br></br>
        <div>
         <label>Student Id</label> <input type="text" name="studentId" placeholder="Enter Student Id" value={reg.studentId} onChange={handleChange1} className="form-control"/>
         </div>
         <br></br>
         <div>
         <label>Student Name</label>    <input type="text" name="studentName" placeholder="Enter Student Name" value={reg.studentName} onChange={handleChange1} className="form-control" >
            </input>
        </div>
         <br></br>
         <div>
         <label>Company Name</label>    <input type="text" name="companyName" placeholder="Enter Company Name" value={reg.companyName} onChange={handleChange1} className="form-control" >
            </input>
        </div>
         <br></br>
         <div>
         <label>Student Image</label>    <input type="file" name="studentImage" placeholder="Choose Image" value={reg.studentImage} onChange={handleChange1} className="form-control" >
            </input>
        </div>
        

       <button className="btn btn-primary" type="submit">
            Submit
    </button>
            </form>
        
   
        </div>
        </div>
        </div>
        
    )       
}
export default Placement;
