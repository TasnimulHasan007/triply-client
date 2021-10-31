import React from 'react'
import { Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './Feature.css'

const Feature = ({ title, desc, icon }) => {
  return (
    <Col lg="4" md="6" className="d-flex align-items-start feature">
      <Fade bottom delay={100}>
        <div className="icon">
          <i className={icon}></i>
        </div>
      </Fade>
      <div>
        <Fade bottom delay={200}>
          <h4 className="feature-title">{title}</h4>
        </Fade>
        <Fade bottom={300}>
          <p className="feature-description">{desc}</p>
        </Fade>
      </div>
    </Col>
  )
}

export default Feature
