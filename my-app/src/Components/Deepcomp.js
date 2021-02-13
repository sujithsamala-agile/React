import React from "react";
import { Container } from "react-bootstrap";
import { Viewdeepcomp } from "./Viewdeepcomp";

const Deepcomp = (props) => {
  const Userdata = [
    { name: "Daniel", age: "40", location: "CA" },
    { name: "Sujith", age: "30", location: "GA" },
    { name: "Rob", age: "35", location: "NY" },
    { name: "Bruce", age: "26", location: "AK" },
  ];
  return (
    <Container>
      <section>
        {Userdata.map((actualdata) => (
          <Viewdeepcomp
            name={actualdata.name}
            age={actualdata.age}
            location={actualdata.location}
          />
        ))}
      </section>
    </Container>
  );
};

export default Deepcomp;
