import React from "react";
import { useState, useEffect } from "react";
import { fetchStats, fetchCourses } from '../api';
import CoursesCards from "../components/CoursesCards";
import { Row, Col, Container } from 'reactstrap';
import Loader from '../components/Loader'

const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const [responseStats, responseCourses] = await Promise.all([fetchStats(), fetchCourses()]);
      setCourses(responseCourses);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Courses</h1>
      
      <Row>
        {courses.length ? (
          courses.map((course) => (
            <Col className="pr-3 pl-4  pb-2 pt-2 " key={course.id} xs={12} sm={6} md={4}>
              <CoursesCards {...course} />
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
      
    </>

  )
};

export default Courses;



 
