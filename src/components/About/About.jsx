import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import './About.css'
import aboutImage from '../../images/about.png'

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row className="d-flex align-items-center g-5">
          <Col lg="6">
            <img src={aboutImage} alt="" />
          </Col>
          <Col lg="6">
            <h3 className="subtitle">About Us</h3>
            <h2 className="title">We Help You Planning Your Journey</h2>
            <p>
              Triply is specialized in giving the best outbound tours that give
              you nothing but pleasure and satisfaction. Our cheap international
              holiday packages from Bangladesh will give you a wide range of
              choices that will help you to choose your satisfactory tour.
            </p>
            <p>
              We are always concerned for your well-being and consequently, we
              always keep your budgets in our mind and thus we make our packages
              very much cost effective for you and your family. We have
              different types of cheap packages that have the best and the most
              luxury that you can get within your budget.
            </p>
            <HashLink to="/home#features" className="main_btn">
              Learn More
            </HashLink>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
