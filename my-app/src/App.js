import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Pagenotfound } from "./Pagenotfound";
import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Cards } from "./Components/Cards";
import { Buttons } from "./Components/Buttons";
import { Banners } from "./Components/Banners";
import Deepcomp from "./Components/Deepcomp";
import Datatest from "./Components/Datatest";
// import Customstyles from "./Assets/css/custom-sytles.css";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <NavigationBar />
          <Router>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/contact' component={Contact}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/cards' component={Cards}></Route>
              <Route path='/buttons' component={Buttons}></Route>
              <Route path='/banners' component={Banners}></Route>
              <Route component={Pagenotfound}></Route>
            </Switch>
          </Router>
        </Layout>
        <Container>
          {/* <Listed /> */}
          <Bio name='Sujith Samala' />
          <Deepcomp />
          <Datatest />
        </Container>
      </React.Fragment>
    );
  }
}

function Bio(props) {
  return (
    <h1 className='m-b-30'>
      My Name is {props.name} and i'm an Web Application Engineer
    </h1>
  );
}

export default App;
