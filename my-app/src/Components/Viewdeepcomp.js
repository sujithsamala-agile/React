import React from "react";
import { Table } from "react-bootstrap";

export const Viewdeepcomp = (props) => (
  <>
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.age}</td>
          <td>{props.location}</td>
        </tr>
      </tbody>
    </Table>
  </>
);
