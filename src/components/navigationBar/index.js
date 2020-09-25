import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './navigationBar.css';
import '../../constants/classes.css';

const NavBarItem = ({isCurrentPath, name, path}) => {
  if (isCurrentPath) return (
    <Nav.Link as={Link} to={path}><div class="active item"><span>{name}</span></div></Nav.Link>
  );
  return (
    <Nav.Link as={Link} to={path}><div class="inactive item"><span>{name}</span></div></Nav.Link>
  );
};

const NavigationBar = () => {
  const currentPathName = useLocation().pathname;
  console.log("XXX",currentPathName);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand><span className="brand">Project Destination</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavBarItem name="Home" path="/" isCurrentPath={currentPathName==="/"} />
          <NavBarItem name="Events" path="/events" isCurrentPath={currentPathName==="/events"} />
          <NavBarItem name="Products" path="/products" isCurrentPath={currentPathName==="/products"} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;