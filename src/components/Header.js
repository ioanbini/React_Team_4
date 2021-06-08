import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

  return (
    
    <Navbar color="dark" dark expand ="md" >
      <NavbarBrand tag={Link} to="/">Code.Hub Dashboard</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
        <NavItem>
          <NavLink tag={Link} to="/courses">Courses</NavLink>
        </NavItem>
        <NavItem className="" >
          <NavLink tag={Link} to="/add-course">Add New Course</NavLink>
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
