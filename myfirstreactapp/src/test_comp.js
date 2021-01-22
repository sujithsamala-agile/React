import React, { Component } from "react";
import logo from "./logo.svg";
import "./test_comp.css";
import Header from "./header";
import Button from "./Emmet_test";

class Card extends React.Component {
  render() {
    return (
      <div class='inline'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Header />
          <p>blah blah blah.....</p>
          <Button />
        </header>
      </div>
    );
  }
}

export default Card;
