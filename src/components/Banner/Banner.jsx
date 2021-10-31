import React from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <Container>
          <Fade top>
            <h2>Enjoy your stay</h2>
            <p>Discover amazing places at exclusive deals</p>
          </Fade>
        </Container>
      </div>
    </div>
  )
}

export default Banner
