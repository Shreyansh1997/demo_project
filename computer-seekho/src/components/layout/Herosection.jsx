import React from 'react'
import { Link } from 'react-router-dom';

function Herosection() {
  return (
    <>
   {/* ======= Hero Section ======= */}
   <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
   <div className="container" data-aos="fade-in">
     <h1>Welcome to Computer-seekho</h1>
     <h2>
     Positive training with positive results
     </h2>
     <div className="d-flex align-items-center">
       <i className="bx bxs-right-arrow-alt get-started-icon" />
       <Link className="btn-get-started scrollto" to={"/"}>Get Started</Link>
      
     </div>
   </div>
 </section>
 {/* End Hero */}
 </>
 
  );
}

export default Herosection;
