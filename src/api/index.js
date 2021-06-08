import axios from "axios";
// import { useState } from 'react';

const API_BASE_URL = "http://localhost:3001";

const ENDPOINTS = {
  stats: "stats",
  courses: "courses",
  instructors: "instructors",
};

 const fetchStats = () =>
  axios.get(`${API_BASE_URL}/${ENDPOINTS.stats}`).then(({ data }) => data);

 const fetchCourses = () =>
  axios.get(`${API_BASE_URL}/${ENDPOINTS.courses}`).then(({ data }) => data);


 const fetchCourse = (id) =>{
  return( axios
    .get(`${API_BASE_URL}/${ENDPOINTS.courses}/${id}`)
    .then(({ data }) => data)
  )
 }

 const fetchInstructors = () => 
  axios.get(`${API_BASE_URL}/${ENDPOINTS.instructors}`).then(({ data }) => data);

const postCourse = (data) => {
  console.log("mydat",data)
  axios.post(`${API_BASE_URL}/${ENDPOINTS.courses}`,data);
}
 

export {
  fetchStats,
  fetchCourses,
  fetchCourse,
  fetchInstructors,
  postCourse
};