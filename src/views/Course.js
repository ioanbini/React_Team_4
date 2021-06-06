import React from "react";
import { useRouteMatch } from "react-router-dom";

const Course = () => {
  const match = useRouteMatch();
  console.log(match.params.id);
  return "Course";
};

export default Course;
