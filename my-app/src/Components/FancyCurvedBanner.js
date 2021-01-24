import React from "react";
import { Button } from "react-bootstrap";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import Fancybanner from "../Assets/img/FancyBanner.png";
// import Fancybanner from "./FancyBanner.png";

const Styles = styled.div`
  p {
    padding: 15px 0px;
  }
  .jumbotron {
  }
  .fancy {
    background-color: #666;
    background: url(${Fancybanner}) no-repeat;
    border-bottom-right-radius: 80% 8%;
    border-bottom-left-radius: 80% 8%;
    position: relative;
    background-size: cover;
    background-size: cover;
    background-position: 10% 50% !important;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: 100% auto;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.4);
      // background-color: rgba(0, 0, 128, 0.3);
      // background-color: rgba(255, 191, 0, 0.3);
      border-bottom-right-radius: 80% 8%;
      border-bottom-left-radius: 80% 8%;
    }
    .wrapper {
      z-index: 9999999;
      position: relative;
      width: 50%;
    }
    h1 {
      font-family: "AvenirNext-Regular", AvenirNext-Regular, sans-serif;
      text-transform: none;
      text-indent: 0 !important;
      font-size: 48px;
      line-height: 65px;
      margin-top: 70px;
      text-shadow: 0 0 20px #574330;
      font-weight: 700;
      color: #fff;
    }
    p {
      color: #fff;
      line-height: 29px;
      font-size: 20px;
      font-size: 22px;
      font-weight: bold;
      font-family: "Helvetica Neue", Arial !important;
      button.btn-outline-light {
        font-weight: 600;
        border: 2px solid;
      }
    }
  }
  .with-bottom-radius {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    &::after {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      background-color: rgba(0, 0, 128, 0.3);
    }
  }
`;

export const FancyCurvedBanner = () => (
  <Styles>
    <Jumbotron className='fancy'>
      <Container>
        <div className='wrapper'>
          <h1>Welcome to the Fancy Playground!!!!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant='outline-light'>Learn more</Button>
          </p>
        </div>
      </Container>
    </Jumbotron>
  </Styles>
);

export default FancyCurvedBanner;
