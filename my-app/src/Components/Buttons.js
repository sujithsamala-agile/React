import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  p {
    padding: 15px 0px;
  }
`;

export const Buttons = () => (
  <React.Fragment>
    <Styles>
      {/* Border Buttons */}
      <p>Here are some of bordered button templates, Enjoy!!!</p>
      <Button variant='outline-primary'>Primary</Button>{" "}
      <Button variant='outline-secondary'>Secondary</Button>{" "}
      <Button variant='outline-success'>Success</Button>{" "}
      <Button variant='outline-warning'>Warning</Button>{" "}
      <Button variant='outline-danger'>Danger</Button>{" "}
      <Button variant='outline-info'>Info</Button>{" "}
      <Button variant='outline-light'>Light</Button>{" "}
      <Button variant='outline-dark'>Dark</Button>
      {/* Solid Buttons */}
      <p>Here are some of solid button templates, Enjoy!!!</p>
      <Button variant='primary'>Primary</Button>{" "}
      <Button variant='secondary'>Secondary</Button>{" "}
      <Button variant='success'>Success</Button>{" "}
      <Button variant='warning'>Warning</Button>{" "}
      <Button variant='danger'>Danger</Button>{" "}
      <Button variant='info'>Info</Button>{" "}
      <Button variant='light'>Light</Button>{" "}
      <Button variant='dark'>Dark</Button> <Button variant='link'>Link</Button>
    </Styles>
  </React.Fragment>
);
