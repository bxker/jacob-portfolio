import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import {Link} from 'gatsby'

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
    <h3>Skills:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-js hover_effect" />
        <br />
        <span>JavaScript</span>
      </Col>
      <Col>
        <i className="fab fa-react hover_effect" />
        <br />
        <span>React.js</span>
      </Col>
      <Col>
        <i className="fab fa-node-js hover_effect" />
        <br />
        <span>Node.js</span>
      </Col>
      <Col style={{color: 'CC5DE8'}}>
        <i className="fab fa-sass hover_effect" />
        <br />
        <span>SASS</span>
      </Col>
    </Row>
    <br />
      <Link to="/about" className="blueViolet">
        More of my favorite technologies ---->
      </Link>
  </Container>
)

export default Summary
