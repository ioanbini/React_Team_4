import React from "react";
import { Row, Col, Button } from "reactstrap";

const CourseEntry = ({
  id,
  title,
  imagePath,
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
  const bgImageStyle = {
    
    height: '50rem',
    background: `url(${imagePath}) no-repeat window`,
    backgroundSize: '100% 100% ',
    
    
    
   
  };

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
      <Row>
        <Col className="pr-4 pl-4 " xs={12}>
          <div
            className="lead m-top"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="clearfix">
            <Button color="primary" size="large" onClick={handleEdit}>
              Edit
            </Button>
            &nbsp;
            <Button color="danger" size="large" onClick={()=>handleDelete(id)}>
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
