import React, { Component } from "react";
import "./banner.css";
import Layout from "./page_layout";

class Banner extends React.Component {
  render() {
    return (
      <div className='banner'>
        <h1>NEED A LITTLE MORE GUIDANCE?</h1>
        <Layout />
      </div>
    );
  }
}

export default Banner;
