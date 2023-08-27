import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

function ViewStudent() {
  const [stud, setStudent] = useState([]);
  const{batchId}=useParams();
  useEffect(() => {
    fetch("https://localhost:7005/api/students/"+batchId)
      .then(res => res.json())
      .then((result) => { setStudent(result); }
      );
      
  }, []);
  return (
    <div>
      <Container>
      <Row>
        <Col>
        <h3 align="center" >Students Details</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>EmailId</th>
            <th>Qualification</th>
            <th>Course Enrolled</th>
            <th>BatchId</th>
          </tr>
        </thead>
        <tbody>
         
          {stud.map(student => (
            <tr key={student.stu.studentId}>

              <td>{student.stu.studentId}</td>

              <td>{student.stu.studentName}</td>

              <td>{student.stu.dateOfBirth}</td>

              <td>{student.stu.gender}</td>

              <td>{student.stu.residentialAddress}</td>

              <td>{student.stu.mobile}</td>

              <td>{student.stu.emailId}</td>

              <td>{student.stu.qualification}</td>

              <td>{student.stu.courseEnrolled}</td>

              <td>{student.stu.batchId}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default ViewStudent;