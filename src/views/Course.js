import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import CourseEntry from "../components/CourseEntry";
import { fetchCourse } from "../api";
import Loader from "../components/Loader";

const Course = () => {
  const match = useRouteMatch();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    const fetshCourse = async () => {
      const course = await fetchCourse(match.params.id);

      setCourse(course);
    };

    fetshCourse();
  }, [match.params.id]);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("handle edit");
  };
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("handle delete");
  };

  return (
    <>
      {course ? (
        <CourseEntry
          {...course}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Course;
