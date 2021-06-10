import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import CourseEntry from "../components/CourseEntry";
import { fetchCourse,deleteCourse,fetchInstructor, fetchCourses } from "../api";
import Loader from "../components/Loader";


const Course = () => {
  const match = useRouteMatch();
  const [course, setCourse] = useState(null);
  const[instructor,setInstructor]=useState(null);
  useEffect(() => {
    const getCourse = async () => {
      const course = await fetchCourse(match.params.id);

      setCourse(course);
      console.log(match.params.id)
      
    };

    getCourse();
  }, [match.params.id]);

  useEffect(() => {
    const getInstructor = async () => {
      const instructor = await fetchInstructor(match.params.id);

      setInstructor(instructor);
     
      
      
    };

    getInstructor()
  }, [match.params.id]);



  const handleEdit = () => {
    
    console.log("handle edit");
  };
  const handleDelete = async (id) => {
    
    await deleteCourse(id)
    //await fetchCourses()
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
