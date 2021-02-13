import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import Data from "../Assets/json/custinfo.json";

const Datatest = () => (
  <React.Fragment>
    <Container>
      {Data.map((info) => {
        return (
          <React.Fragment>
            <Table>
              <tbody>
                <tr id='{info.name}'>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                </tr>
              </tbody>
            </Table>
          </React.Fragment>
        );
      })}
    </Container>
  </React.Fragment>
);

export default Datatest;
