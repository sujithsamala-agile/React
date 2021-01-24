import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import Cards from "./Cards";
import Buttons from "./Buttons";
import Banners from "./Banners";

const Styles = styled.div`
  .navbar {
    margin-bottom: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    &:hover {
    }
  }
  .app-title {
    font-weight: bold;
    font-size: 24px;
    font-family: trebuchet ms;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='m-b-0'>
      <Navbar.Brand className='app-title' href='#home'>
        <a href='/'>React Play Ground</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
          <NavDropdown title='Components' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/buttons'>Buttons</NavDropdown.Item>
            <NavDropdown.Item href='/banners'>Banners</NavDropdown.Item>
            <NavDropdown.Item href='/cards'>Cards</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
