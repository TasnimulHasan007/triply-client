import React from 'react'
import { Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import Fade from 'react-reveal/Fade'
import notFoundImg from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
  return (
    <Container className="not_found">
      <Fade left>
        <img src={notFoundImg} alt="" />
      </Fade>
      <Fade right delay={50}>
        <h2 className="title">Oops! Look like you’re lost</h2>
      </Fade>
      <Fade right delay={150}>
        <p>
          Page does not exist or some other error occured. Go to our Home page
        </p>
      </Fade>
      <Fade right delay={250}>
        <HashLink to="/home#home" className="main_btn">
          Go Back Home
        </HashLink>
      </Fade>
    </Container>
  )
}

export default NotFound
