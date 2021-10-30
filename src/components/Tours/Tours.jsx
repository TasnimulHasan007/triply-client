import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Tour from '../Tour/Tour'
import './Tours.css'

const Tours = () => {
  // states
  const [tours, setTours] = useState([])
  // loading data
  useEffect(() => {
    fetch('https://afternoon-sea-48900.herokuapp.com/tours')
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])
  return (
    <div id="tours" className="tours">
      {tours.length ? (
        <Container>
          <h3 className="subtitle">What's New</h3>
          <h2 className="title">Our Tours</h2>
          <div className="grid-container mb-5">
            {tours.map(tour => (
              <Tour key={tour._id} tour={tour} />
            ))}
          </div>
        </Container>
      ) : (
        <Container
          style={{ height: 'calc(100vh - 250px)' }}
          className="py-5 w-100 d-flex justify-content-center align-items-center"
        >
          <Spinner
            animation="border"
            style={{ color: 'var(--primary-color)' }}
          />
        </Container>
      )}
    </div>
  )
}

export default Tours
