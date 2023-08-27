import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,} from 'react';
import { useNavigate,Link} from "react-router-dom";
function GalleryAlbum()
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
      fetch("https://localhost:7005/api/galleryAlbums/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
      event.preventDefault();
      alert("Album Created");
   }
    const defaultValue={
       galleryAlbumName:"" ,
       galleryAlbumDescription:"",
       albumIsActive:"",
       
       }
return(
<div className="container">
<Link to='/AdminHome'>back</Link>
        <div className="col-md-12-text-center mt-5">
        <div className="regis">
         <h1 style={{textAlign:"center"}}>Gallery Album</h1>
        
          
            <form onSubmit={handleSubmit} className="form-control">
            
            <div>    
        <label>Album Name</label> <input type="text" name="galleryAlbumName" placeholder="Enter Album Name" value={reg.galleryAlbumName} onChange={handleChange1} className="form-control"/>
         {/* <p className="text-danger">
            <ErrorMessage name="batchName" />
         </p> */}
         </div>
         <div>
         <label>Album Description</label> <input type="text" name="galleryAlbumDescription" placeholder="Enter Album Description" value={reg.galleryAlbumDescription} onChange={handleChange1} className="form-control"/>
         </div>
         <br></br>
         <div>
         <label>Album Status</label>    <select name="isAlbumActive" placeholder="choose"  className="form-control" value="true" onChange={handleChange1}>
          <option >Yes</option>
          <option >No</option>
            </select>
        </div>
        <br></br>
       <button className="btn btn-primary" type="submit">
            Submit
    </button>
            </form>
        
   
        </div>
        </div>
        </div>
);
}
export default GalleryAlbum;