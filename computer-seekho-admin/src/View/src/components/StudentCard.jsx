import React from "react";

function StudentCard({ student }) {
  return (
    <div
      className="col-lg-3 col-md-6 d-flex align-items-stretch"
      data-aos="fade-up"
    >
      <div className="member">
        <div className="member-img">
          {/* <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /> */}
        </div>
        <div className="member-info">
        <h4><img src={student.studentImage} width={300} height={300}/></h4>
        
          <h4>Name:{student.studentName}</h4>
          <h4>Course Name:{student.course_Name}</h4>
          <h4>Company:{student.companyName}</h4>
          <h4>Batch:{student.batchName}</h4>
          <span>StudentID:{student.studentId}</span>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
