import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import React, { Component } from "react";

export class Sketch extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' Component='{Home}'></Route>
        <Route path='/contact' Component='{Contact}'></Route>
      </React.Fragment>
    );
  }
}

export default Sketch;
