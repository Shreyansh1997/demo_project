//SeniorCitizen.js

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SeniorCitizen()
{
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7005/api/courses/")
      .then(res => res.json())
      .then((result) => { setCourse(result); }
      );
  }, []);

return(
  <div>
    <Container>
      <Row>
        <Col>
        <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/seniorCitizen.jpg"
          alt="First slide" 
          width={300}
          height={400}
        />
        <Carousel.Caption>
          <h3>Senior Citizen Courses</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <Card>
        <Card.Header align="center" color="Dark"><h2><b>Senior Citizen Course</b></h2></Card.Header>
        <Card.Body>
          <Card.Title align="center"><b>Course Details</b></Card.Title>
          <Card.Text>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td>Course Id</td>
                  <td>{course.courseId}</td>
                </tr>
                <tr>
                  <td>Course Name</td>
                  <td>{course.courseName}</td>
                </tr>
                <tr>
                  <td>Modules</td>
                  <td>{course.courseModule}</td>
                </tr>
                <tr>
                  <td>Course Fees</td>
                  <td>{course.courseFees}</td>
                </tr>
                <tr>
                  <td>Course Duration</td>
                  <td>{course.courseDuration}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <h5 align='center' opacity="0.3">*<u>Admissions are open for Senior Citizen course</u></h5>
          <h7 align='right' opacity='0.1'>*For more details contact <u>Computer Seekho</u></h7>
          {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    
  </div>
)
}
export default SeniorCitizen;
