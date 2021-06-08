import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import {fetchCourse} from '../api/index'

const Course = () => {
  const match = useRouteMatch();
  const [course, setCourse] = useState(null);

  console.log(match.params.id);
  return "Course";
};

export default Course;
