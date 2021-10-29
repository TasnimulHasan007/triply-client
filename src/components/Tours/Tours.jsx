import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Tour from '../Tour/Tour'
import './Tours.css'

const Tours = () => {
  // states
  const [tours, setTours] = useState([])
  // loading data
  useEffect(() => {
    fetch('http://localhost:5000/tours')
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])
  return (
    <div className="tours">
      <Container>
        <h2 className="text-center">Our Tours</h2>
        <div className="grid-container mb-5">
          {tours.map(tour => (
            <Tour key={tour._id} tour={tour} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Tours
