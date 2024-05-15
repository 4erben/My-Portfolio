import React from 'react';
import { Link } from 'react-router-dom';
import {Container , Navbar ,Nav} from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar expand="lg"  className="my-5 bg-c-nav fixed-top">
        <Container fluid>
            <Navbar.Brand><Link to="/"><i className="fa-solid fa-laptop-code  ms-5"></i></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-purple  opacity-50"/>
            <Navbar.Collapse className="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="nav-link fw-bold " to="/">
                        <i className="fa-solid fa-house"></i>
                        <span className="">Home</span>
                    </Link>
                    <Link className="nav-link fw-bold" to="/aboutpage">
                    <span>
                        <i className="fa-solid fa-user"></i>
                        About
                        </span>
                    </Link>
                    <Link className="nav-link fw-bold" to="/projectspage">
                        <i className="fa-solid fa-list-check"></i>
                        <span>Projects</span>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
