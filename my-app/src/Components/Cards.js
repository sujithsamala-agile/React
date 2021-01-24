import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  .card-wrapper {
    div.col {
      margin-bottom: 30px;
    }
  }
`;

export const Cards = () => (
  <>
    <Styles>
      <p>Here are some of bordered card templates, Enjoy!!!</p>
      <Row xs={1} md={3} className='card-wrapper'>
        <Col className=''>
          <div className='card border-primary'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-secondary'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-success'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-danger'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-warning'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-info'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-dark'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col className='  '>
          <div className='card border-light'>
            <div className='card-header col-md-12'>Header</div>
            <div className='card-body'>
              <div className='card-title h5'>Primary Card Title</div>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Styles>
  </>
);
