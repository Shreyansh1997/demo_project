
import { useState , useEffect } from "react";
import './AdminHome.css';
import Table from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


function AdminHome() {
  const [enquiry, setenqData] = useState([]);


  useEffect(() => {
      fetch("https://localhost:7005/api/enquiries")
          .then(r => r.json())
          .then(res => { setenqData(res); });
          
  }, []);

  const successAlert = () => {
    Swal.fire({  
      
        title: `FollowUp Successfull!`,  
        // text: 'You clicked the button.',
        icon: 'success'
      }); 
}
const [query, setQuery] = useState("");

function handleSearch(event) {
  event.preventDefault();
  console.log(query); // or do whatever you want with the query
  fetch("https://localhost:7005/api/enquiries/"+query)
  .then(res => res.json())
  .then(result => {
    console.log(result);
   // setenqData(result);
    //console.log(enquiry);
    
    if (Array.isArray(result)) {
      setenqData(result);
    
    } else {
      setenqData([]);
      console.log(enquiry);
      console.log("in aaray");
    }
},[]);

}

    return (
<div>

  <div className="nav">
    
<nav className="navbar navbar-expand-lg navbar-primary bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/AdminLogin"><b>Admin Home</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="enquiry">Add enquiry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="Staff">Add Staff</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="FollowUp">Follow up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Registration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Placement</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Courses</a>
        </li>
        </ul>     
    </div>
  </div>
  <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
</nav>
  </div>

<div className="data">
<Table striped bordered >
                <thead>
                    <tr>
                        <th>enquiryId</th>
                        <th>Name</th>
                        <th>Parent Name</th>
                        <th>EmailId</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Queries</th>
                        <th>enquiryDate</th>
                        <th>ClosureReasonDesc</th>
                        <th>ClosureReason</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {enquiry.map(enquiry => (
                        <tr key={enquiry.enquiryId}>
                          <td>{enquiry.enquiryId}</td>
                            <td>{enquiry.name}</td>
                            <td>{enquiry.parentName}</td>
                            <td>{enquiry.emailId}</td>
                            <td>{enquiry.mobile}</td>
                            <td>{enquiry.address}</td>
                            <td>{enquiry.queries}</td>
                            <td>{enquiry.enquiryDate}</td>
                            <td>{enquiry.closureReasonDesc}</td>
                            <td>{enquiry.closureReason}</td>

                             <td><button type="btn" onClick={successAlert}>Call</button></td> 
                            <td><button type="btn"><a href={""}>Registration</a></button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>

            </div>

</div>

    )
}
export default AdminHome;
