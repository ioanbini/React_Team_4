import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { fetchInstructor } from "../api/index"


const CourseEntry = ({
  id,
  title,
  imagePath,
  instructors,
  price,
  open,
  duration,
  dates,
  description,
  handleEdit,
  handleDelete,
}) => {
  const { start_date, end_date } = dates;
  const startDateFormatted = new Date(start_date).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(end_date).toLocaleDateString("el-gr");
  const [detailedInstructors, setDetailedInstructors] = useState([]);

  const bgImageStyle = {

    height: '50rem',
    background: `url(${imagePath}) no-repeat window`,
    backgroundSize: '100% 100% ',

  };

  useEffect(() => {
    const getInstructors = () => {
      instructors.map(async id => {
        const instructor = await fetchInstructor(id);
        setDetailedInstructors(...detailedInstructors, instructor);
      });

      console.log("instructors", instructors)
    };

    getInstructors()
  }, []);

  return (
    <>
      <Row>
        <Col className="pr-4 pl-4 " xs={12}>
          <h1>
            {title} <small>({id})</small>
          </h1>
          <div style={bgImageStyle}></div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="pr-4 pl-4 " xs={6}>
          <h4>Price: {price.normal} €</h4>
          <h4>Bookable: {open ? "✔" : "❌"}</h4>
        </Col>
        <Col className="pr-4 pl-4 " xs={6}>
          <h4 className="text-right">Duration: {duration}</h4>
          <h4 className="text-right">
            Dates: {startDateFormatted} - {endDateFormatted}
          </h4>
        </Col>
      </Row>

      <Row><Col Col className="pr-4 pl-4 " xs={12}>
        <div
          className="lead m-top"
          dangerouslySetInnerHTML={{ __html: description }}
        /></Col>
      </Row>
      <hr />
      <Row>
        <h3 className="pr-4 pl-4 " xs={6}>Instructors</h3>
      </Row>
      <Row>
        {detailedInstructors.map(instructor =>
          <Col className="pr-4 pl-4 " xs={6}>
            <h5>{instructor.name.first} {instructor.name.last}</h5>
            {instructor.email}<br />
            {instructor.bio}
          </Col>
        )}
      </Row>
      <Row>

        <Col className="pr-4 pl-4 " xs={6}>
          <div className="clearfix">
            <Button color="primary" size="large" tag={Link} to={`/edit-course/${id}`} onClick={(() => handleEdit())}>

              Edit
            </Button>
            &nbsp;
            <Button color="danger" size="large" tag={Link} to={`/courses`} onClick={() => handleDelete(id)}>
              Delete
            </Button>
            &nbsp;
          </div>
        </Col>
      </Row>

    </>
  );
};

export default CourseEntry;
