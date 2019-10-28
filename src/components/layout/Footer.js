import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container className="footer_social_container" style={{ maxWidth: "20vw", textAlign: 'center' }}>
      <Row className="footer_social text-center" style={{width: '100%', marginLeft: '0px'}}>
        <Col>
          <a
            href="https://www.github.com/bxker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/bxker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>
      </Row>
      <Row className="text-center" style={{ marginTop: "1rem" }}>
        <Col>
          Jacob Baker © {new Date().getFullYear()}
        </Col>
      </Row>
      
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "1rem",
  marginBottom: "0",
  backgroundColor: "white",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
