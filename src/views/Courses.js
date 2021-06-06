import React from "react";
import { useState, useEffect } from "react";
import { fetchStats, fetchCourses } from '../api';
import CoursesCards from "../components/CoursesCards";
import { Row, Col, Container } from 'reactstrap';

const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([fetchStats(), fetchCourses()]);

      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (

    <div >
      <Row className="no-gutters" >
        <Col className="pr-5 pl-5  pb-5 pt-5 " md={16} style={{ display: 'flex', flexDirection: 'row' }}>
          {courses.map((data) => <CoursesCards key={data.title} {...data} />)}
        </Col>
      </Row>

    </div>


  )
};

export default Courses;
