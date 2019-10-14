import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-scroll";

function Navbars() {
    return (
      <Navbar>
        <Nav className="mr-auto">
        <Link activeClass="active" to="section_project" spy={true} smooth={true}>
          <Nav.Link href="#section_project" style = {{color: "white", marginRight: "25px"}}>Projects</Nav.Link>
        </Link>
        <Link activeClass="active" to="section_about" spy={true} smooth={true}>
          <Nav.Link href="#section_about" style = {{color: "white", marginRight: "25px"}}>About</Nav.Link>
        </Link>
        <Link activeClass="active" to="section_skills" spy={true} smooth={true}>
          <Nav.Link href="#section_skills" style = {{color: "white", marginRight: "25px"}}>Skills</Nav.Link>
        </Link>
        <Link activeClass="active" to="section_contact" spy={true} smooth={true}>
          <Nav.Link href="#section_contact" style = {{color: "white"}}>Contact</Nav.Link>
        </Link>
        </Nav>
      </Navbar>
)};

export default Navbars;