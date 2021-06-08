import React from "react";
import { Card, CardTitle,CardBody,Badge } from "reactstrap";

const Stats = ({ title, amount }) => {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            {title.toUpperCase()}: <Badge>{amount}</Badge>
          </CardTitle>
        </CardBody>
      </Card>
    );
  };
  
  export default Stats;
  