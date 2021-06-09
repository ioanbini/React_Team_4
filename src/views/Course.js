import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import CourseEntry from "../components/CourseEntry";
import { fetchCourse,deleteCourse,fetchInstructor } from "../api";
import Loader from "../components/Loader";


const Course = () => {
  const match = useRouteMatch();
  const [course, setCourse] = useState(null);
  // const[instructor,setInstructor]=useState(null);
  useEffect(() => {
    const fetshCourse = async () => {
      const course = await fetchCourse(match.params.id);

      setCourse(course);
      console.log(match.params.id)
    };

    fetshCourse();
  }, [match.params.id]);

  // useEffect(() => {
  //   const fetchInstructor = async () => {
  //     const instructor = await fetchInstructor(match.params.id);

  //     setInstructor(match.params.id);
  //     console.log()
  //     console.log(instructor)
  //   };

  //   fetchInstructor();
  // }, [match.params.id]);


  const handleEdit = () => {
    
    console.log("handle edit");
  };
  const handleDelete = async (id) => {
    
    await deleteCourse(id)
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
