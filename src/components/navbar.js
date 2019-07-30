import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {useSelector} from 'react-redux';

// Stateless functional component
const NavigationBar = () => {
  const isLogged = useSelector(state => state.isLogged);
  const username = useSelector(state => state.userData.username);

  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="justify-content-end">
      <Nav className="mr-auto">
      <NavItem style={{padding:15}}>
         <Link to="/login">Login</Link>
      </NavItem>
      <NavItem style={{padding:15}}>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem style={{padding:15}}>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem style={{padding:15}}>
        <Link to="/posting">Posting</Link>
      </NavItem>

      <NavItem style={{padding:8}}>
      {isLogged ? <Navbar.Text>
      Signed in as: <a href="#login">{username}</a>
    </Navbar.Text> : ''}
    </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavigationBar;
