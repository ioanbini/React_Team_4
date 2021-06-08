import axios from "axios";

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

 

export {
  fetchStats,
  fetchCourses,
  fetchCourse
};


