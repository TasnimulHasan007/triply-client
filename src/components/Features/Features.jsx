import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Feature from '../Feature/Feature'
import './Features.css'

const Features = () => {
  return (
    <div className="features" id="features">
      <Container>
        <h3 className="subtitle">Why Us</h3>
        <h2 className="title">We Make All The Process Easy</h2>
        <Row className="features-container g-5" lg={3} md={2} sm={1}>
          <Feature
            icon="fab fa-magento"
            title="Best Travel Agent"
            desc="We always are here to bring maximum luxury to your travelling. Your Enjoyment is our focus during the travels"
          />
          <Feature
            icon="fas fa-medkit"
            title="Trust & Safety"
            desc="The most trusted and reliable travel agency among all the leading tour operating services"
          />
          <Feature
            icon="fas fa-wallet"
            title="Best Price Guarantee"
            desc="When we put a price on our tour packages, we mean that ammount only! No hidden charges"
          />
          <Feature
            icon="fas fa-map-marker-alt"
            title="Beautiful Places"
            desc="We will offer the tour of different famous and relaxing places with views that will mismerize you"
          />
          <Feature
            icon="fas fa-umbrella"
            title="Passionate Travel"
            desc="We ensure that your travelling is filled with adventures, joy, excitement, pleasure and satisfaction."
          />
          <Feature
            icon="fas fa-ticket-alt"
            title="Fast Booking"
            desc="Booking your tickets, tour arrangements and returning you safely to your home is all on our shoulders"
          />
        </Row>
      </Container>
    </div>
  )
}

export default Features
