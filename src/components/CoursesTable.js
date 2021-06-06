import React from "react";
// import { Table } from 'reactstrap';
import { Button } from 'reactstrap';



const CoursesTable = ({ title, open, price, dates }) => {
  return (


    <tr>
      <td><img className="photo" width="30" height="30" src={("https://icons-for-free.com/iconfiles/png/512/about-131964752256876096.png")} /></td>
      <td>{title}</td>
      <td>
        {open ? <img className="photo" width="30" height="30" src={("https://icons-for-free.com/iconfiles/png/512/correct+mark+success+tick+valid+yes+icon-1320167819078544687.png")} />
          : 'X'}
      </td>
      <td>{price.normal} €</td>
      <td>{dates.start_date} - {dates.end_date}</td>
      <td><Button color="info">View</Button></td>

    </tr>





  );
};

export default CoursesTable;
