import React from "react";
import FancyCurvedBanner from "./Components/FancyCurvedBanner";
import Container from "react-bootstrap/Container";

export const Home = () => (
  <React.Fragment>
    <FancyCurvedBanner></FancyCurvedBanner>
    <Container>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit delectus
        porro natus explicabo maiores vero eos, dicta asperiores? Quam ducimus
        voluptate laudantium similique tenetur a doloribus quod, omnis nostrum
        dolorum.
      </p>
    </Container>
  </React.Fragment>
);
