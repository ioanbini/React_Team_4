import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
//import { FormText} from 'reactstrap'; 
import { fetchInstructors, postCourse, fetchCourses } from '../api/index';
import SuccessModal from "../components/SuccessModal"
import { useRouteMatch } from "react-router-dom";
import { fetchCourse } from "../api";


const AddCourse = () => {
  const [
    isSuccessfullySubmitted,
    setIsSuccessfullySubmitted,
  ] = React.useState(false);

  const match = useRouteMatch();
  const [allInstructors, setAllInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [dates, setDates] = useState(
    {
      start_date: "",
      end_date: ""
    }
  );
  const [editMode,setEditMode] = useState(false);
  const [price, setPrice] = useState({
    normal: "",
    early_bird: ""
  });
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseInstructors = await fetchInstructors();
      setAllInstructors(responseInstructors);
    };
    fetchData();
  }, []);



  // useEffect(() => {
  //   const getCourse = async () => {
  //     const course = await fetchCourse(match.params.id);
      
  //     setTitle(course.title)
  //     setDuration(course.duration)
  //     setImagePath(course.imagePath)
  //     setOpen(course.open)

  //     //setInstructors(course.instructors)
  //     //console.log(instructors)
  //     setDescription(course.description)
  //     setDates({
  //       start_date:course.dates.start_date,
  //       end_date:course.dates.end_date})
  //     setPrice({
  //       normal: course.price.normal,
  //       early_bird: course.price.early_bird
  //     });
      
  //   };

  //   getCourse();
  // }, [match.params.id]);


  const fetchAllCourses = async () => {
    const responseCourses = await fetchCourses()
    setCourses(responseCourses);
  };

  const submitForm = async (title, duration, imagePath, open, instructors, description, dates, price) => {
    fetchAllCourses();
    const data = { title, duration, imagePath, open, instructors, description, dates, price }

    console.log(courses)
    const newData = {
      ...data,
      id: Math.max(...courses.map(({ id }) => id)) + 1
    }
    await postCourse(newData);
    //fetchAllCourses();
    setIsSuccessfullySubmitted(newData);
  };

  const onInputChange = (event, setState) => {
    const value = event.target === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    // 
    if (name === 'normal' || name === 'early_bird') {
      setState((price) => ({
        ...price,
        [name]: value
      }))
    } else if (name === 'start_date' || name === 'end_date') {
      setState((dates) => ({
        ...dates,
        [name]: value
      }))
    } else {
      setState(value);
    }
  };

  const onCheckboxBtnClick = (selected) => {
    const index = instructors.indexOf(selected);
    if (index < 0) {
      instructors.push(selected);
    } else {
      instructors.splice(index, 1);
    }
    setInstructors([...instructors]);
    //console.log(instrSelected)
  }


  return (

    <Container className="themed-container" fluid="sm">
      <Form className="bg-light p-3 mb-2" >
        <h3>Add Course</h3>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input value={title} type="text" name="Title" id="title" placeholder="Title" onChange={(e) => onInputChange(e, setTitle)} />
        </FormGroup>
        <FormGroup>
          <Label for="duration">Duration</Label>
          <Input value={duration} type="text" name="Duration" id="duration" placeholder="Duration" onChange={(e) => onInputChange(e, setDuration)} />
        </FormGroup>
        <FormGroup>
          <Label for="image-path">Image Path</Label>
          <Input value={imagePath} type="text" name="image-path" id="image-path" placeholder="Image Path" onChange={(e) => onInputChange(e, setImagePath)} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input value={open} type="checkbox" id="checkbox" onChange={(e) => onInputChange(e, setOpen)} />Bookable
          </Label>
        </FormGroup>
        <hr />

        <h4>Instructors</h4>
        {allInstructors.map((data) =>
          <FormGroup key={data.id} check>
            <Label check>
              <Input value={allInstructors} type="checkbox" id="checkbox" onClick={() => onCheckboxBtnClick(data.id)} /> {data.name.first} {data.name.last}
            </Label>
          </FormGroup>
        )}

        <hr />
        <FormGroup>
          <Label for="description">Description</Label>
          <Input value={description} type="textarea" name="Description" id="description" onChange={(e) => onInputChange(e, setDescription)}></Input>
        </FormGroup>

        <hr />
        <FormGroup >
          <h4>Dates</h4>
          <Label for="start">Start Date</Label>
          <Input value={dates.start_date}  type="date" name="start_date" id="start" placeholder="Start Date" onChange={(e) => onInputChange(e, setDates)} />
          <Label for="end">End Date</Label>
          <Input value={dates.end_date} type="date" name="end_date" id="end" placeholder="End Date" onChange={(e) => onInputChange(e, setDates)} />
        </FormGroup>

        <hr />
        <FormGroup>
          <h4>Price</h4>
          <Label for="early">Early Bird</Label>
          <Input value={price.early_bird} type="number" name="early_bird" id="early" min="0" onChange={(e) => onInputChange(e, setPrice)} />
          <Label for="normal">Normal Price</Label>
          <Input value={price.normal} type="number" name="normal" id="start" min="0" onChange={(e) => onInputChange(e, setPrice)} />
        </FormGroup>

        <Button className="btn btn-success" onClick={() => submitForm(title, duration, imagePath, open, instructors, description, dates, price)}>Add Course</Button>
      </Form>
      {isSuccessfullySubmitted && (
        <div ><SuccessModal /></div>
      )}
    </Container>

  );
};

export default AddCourse;
