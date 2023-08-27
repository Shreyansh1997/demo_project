import React, { useState,} from 'react';
import { useNavigate,Link} from "react-router-dom";

function GalleryImages()
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
      fetch("https://localhost:7005/api/galleryImages/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
      event.preventDefault();
      alert("Image Added");
   }
    const defaultValue={
       imagePath:"" ,
       galleryAlbumId:"",       
       }
return(
<div className="container">
<Link to='/AdminHome'>back</Link>
        <div className="col-md-12-text-center mt-5">
        <div className="regis">
         <h1 style={{textAlign:"center"}}>Gallery Images</h1>
        
          
            <form onSubmit={handleSubmit} className="form-control">
            
            <div>    
        <label>Choose Image</label> <input type="file" name="imagePath" placeholder="Choose Image" value={reg.imagePath} onChange={handleChange1} className="form-control"/>
         {/* <p className="text-danger">
            <ErrorMessage name="batchName" />
         </p> */}
         </div>
         <div>    
        <label>GalleryAlbum Id</label> <input type="text" name="galleryAlbumId" placeholder="Enter Gallery Album Id" value={reg.galleryAlbumId} onChange={handleChange1} className="form-control"/>
         {/* <p className="text-danger">
            <ErrorMessage name="batchName" />
         </p> */}
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
export default GalleryImages;