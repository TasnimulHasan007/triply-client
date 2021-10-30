import React from 'react'
import { Col } from 'react-bootstrap'
import './Feature.css'

const Feature = ({ title, desc, icon }) => {
  return (
    <Col lg="4" md="6" className="d-flex align-items-start feature">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div>
        <h4 className="feature-title">{title}</h4>
        <p className="feature-description">{desc}</p>
      </div>
    </Col>
  )
}

export default Feature
