import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Table, Row, Col, } from "reactstrap";
import CoursesTable from '../components/CoursesTable';
import { fetchStats, fetchCourses,} from '../api';
import {Link} from "react-router-dom";
import Loader from '../components/Loader'
import Stats from "../components/Stats";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([fetchStats(), fetchCourses()]);
      setStats(responseStats);
      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (
    <div className="App">
      
    <div className="pr-2 pl-2 pb-2 pt-5 " >
      <Jumbotron >
        <h1 className="display-4">Welcome to Code.Hub Dashboard!</h1>
        <h3 className="lead">
          <strong>Manage everything and have fun!</strong>
        </h3>
      </Jumbotron>

    </div> 
      <Row >
        {stats.length ? (
          stats.map(({ id, title, amount }) => (
            
            <Col key={id} className="pr-5 pl-5 pb-5 pt-5 " xs={12} sm={6} md={3}>
                  <Stats  title={title} amount= {amount} />
            </Col>
             
          ))
        ) : (
          <Col xs={12}>
            <Loader />
          </Col>
        
        )}
      </Row>
      
      <Table>
        <thead>
          <tr>
            <td colSpan="6" >
              Last 5 Courses:
            </td>
          </tr>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((data) => <CoursesTable key={data.id} {...data} />)}
          <tr >
            <td colSpan="6" >
              <Button tag={Link} to="/courses" className="float-right" color="primary">View All</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;