import React from "react";
import { Card, Button, CardTitle,CardText,CardBody } from 'reactstrap';
import {Link} from "react-router-dom";


const CoursesCards = ({title, imagePath, price, dates,duration,id}) => {
   

    return (
        <>
     
        <Card className="course-card" >
            <CardBody >
                <CardTitle tag="h5">{title}</CardTitle>
            </CardBody>
            <img width="100%" src={imagePath} alt="Card image cap" />
            <CardBody>
                <CardText>Price: {price.normal} | Bookable: €  ✔ </CardText>
                <CardTitle>{duration} </CardTitle>
                <CardTitle >{dates.start_date}  </CardTitle>
                <Button color="primary" tag={Link} to={`/courses/${id}`}>VIEW</Button>
            </CardBody>
            </Card>
            
      </>

        
    
    );
  };
  
  export default CoursesCards;