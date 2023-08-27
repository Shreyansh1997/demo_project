import { useState } from "react";
import {Formik , Form, Field} from "formik";
 //import * as yup from "yup";
import './Staff.css';
import { Link } from 'react-router-dom';
 import { useNavigate} from "react-router-dom";


function Staff() {
const [stf, setStf] = useState({});
let navigate = useNavigate();

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setStf(values => ({ ...values, [name]: value }))

}

  const handleSubmit = (event) => {
    let demo = JSON.stringify(stf);
    fetch("https://localhost:7005/api/Staffs/",{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: demo
    }).then(r => { console.log(r.json()) });
     //navigate('/');
     //alert(stf.staffName+ " Added Successfully " );
     event.preventDefault();
}




//-----end Validation

    return (

        <div className='staffdiv'>
             <Link to='/AdminHome'>back</Link>
             <h3 style={{ textAlign: 'center',paddingTop:'2em'}}>Staff Form</h3>
           <p style={{ paddingLeft:'4em',color:'red'}}>* required field</p>
            
            <Formik>
                <Form className='staff' onSubmit={handleSubmit}>
                    
                     
                   
                  {/* StaffName */}
                    <label>Staff Name</label><Field type="text" name="StaffName" placeholder="Enter your name" value={stf.StaffName} onChange={handleChange} className="form-control" />
                    

                 {/* Qualification */}
                    <label>Qualification</label><Field type="text" name="Qualification" placeholder="Enter your Qualification" value={stf.Qualification} onChange={handleChange} className="form-control" />
                    

                    {/* Experience */}
                    <label>Experience</label><Field type="text" name="Experience" placeholder="Enter your Experience" value={stf.Experience} onChange={handleChange} className="form-control" />
                   
          
                  {/* Contact */}
                  <label>Contact</label><Field type="number" name="Contact" placeholder="Enter your contact" value={stf.Contact} onChange={handleChange} className="form-control" />
                  
          

                   {/* Email Id */}
                    <label>EmailId</label><Field type="email" name="EmailId" placeholder="Enter EmailId" value={stf.EmailId}  onChange={handleChange} className="form-control" />
                   
                    

                    {/* StaffImage */}
                  <label>StaffImage</label><Field type="file" name="StaffImage" placeholder="Select File" value={stf.StaffImage} onChange={handleChange} className="form-control" />
                    
          
 
                  
           <button className="btn btn-primary" type="submit">submit</button>

                </Form>
            </Formik>


        </div> 
    )
}
export default Staff;

