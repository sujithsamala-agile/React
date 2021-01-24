import React from "react";
import Contactform from "./Contactform";
import Container from "react-bootstrap/Container";

export const Contact = () => (
  <div>
    <Container className='p-30-0'>
      <h2>You're now on Contact page</h2>
      <Contactform></Contactform>
    </Container>
  </div>
);
