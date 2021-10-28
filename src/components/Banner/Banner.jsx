import React from 'react'
import { Container } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <Container>
          <h2>Enjoy your stay</h2>
          <p>Discover amazing places at exclusive deals</p>
        </Container>
      </div>
    </div>
  )
}

export default Banner
