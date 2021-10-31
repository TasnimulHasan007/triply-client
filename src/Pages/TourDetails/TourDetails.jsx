import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './TourDetails.css'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'
import axios from 'axios'

const TourDetails = () => {
  const { tourId } = useParams()
  // user
  const { user } = useAuth()
  // states
  const [tour, setTour] = useState({})
  const [modalShow, setModalShow] = useState(false)
  // load data
  useEffect(() => {
    fetch(`https://afternoon-sea-48900.herokuapp.com/tours/${tourId}`)
      .then(res => res.json())
      .then(data => setTour(data))
  }, [tourId])
  // react hook form
  const { register, handleSubmit, reset } = useForm()

  // submit handler
  const handleBook = data => {
    data.status = 'Pending'
    data.tour = tour
    axios
      .post('https://afternoon-sea-48900.herokuapp.com/orders', data)
      .then(res => {
        if (res.data.insertedId) {
          setModalShow(true)
          reset()
        }
      })
  }
  return (
    <div className="tour">
      <div className="header">
        <Container>
          <Fade left>
            <h1>{tour?.title}</h1>
            <h5>
              <i className="fas fa-map-marker-alt"></i> {tour?.location}
            </h5>
          </Fade>
          <Fade right>
            <img src={tour?.img} alt="" />
          </Fade>
          <div className="d-flex justify-content-center  features">
            <div>
              <p>Price</p>
              <span className="price">
                From <span className="orange">${tour?.price}</span>
              </span>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <p>Duration</p>
                <span>{tour?.duration} Days</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Row className="main d-flex align-items-start">
          <Col lg="8" className="pe-md-5">
            <Fade left delay={200}>
              <h2>Overview</h2>
            </Fade>
            <Fade left delay={300}>
              <p>{tour?.description}</p>
            </Fade>
            <hr />
            <Fade left delay={400}>
              <h2>Included /Excluded</h2>
            </Fade>
            <Row>
              <Col md="7">
                <Fade left delay={500}>
                  <ul className="includes">
                    <li>
                      <i className="far fa-check-circle"></i> Specialized
                      bilingual guide
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Private Transport
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Entrance fees
                      (Cable and car and Moon Valley)
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Box lunch water,
                      banana apple and chocolate
                    </li>
                  </ul>
                </Fade>
              </Col>
              <Col md="5">
                <Fade left delay={500}>
                  <ul className="excludes">
                    <li>
                      <i className="far fa-times-circle"></i> Departure Taxes
                    </li>
                    <li>
                      <i className="far fa-times-circle"></i> Entry Fees
                    </li>
                    <li>
                      <i className="far fa-times-circle"></i> 5 Star
                      Accommodation
                    </li>
                    <li>
                      <i className="far fa-times-circle"></i> Airport Transfers
                    </li>
                  </ul>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <Fade right delay={200}>
              <div className="form-container">
                <h3>Book this tour</h3>
                <hr />
                <form onSubmit={handleSubmit(handleBook)}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    defaultValue={user.displayName}
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    defaultValue={user.email}
                    required
                  />
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <label htmlFor="date">From</label>
                    <input
                      id="date"
                      type="date"
                      {...register('date')}
                      required
                    />
                  </div>
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    type="address"
                    {...register('address')}
                    required
                  />
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    required
                  />
                  <button type="submit" className="main_btn">
                    Book Now
                  </button>
                </form>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      {/* modal */}
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className="rounded">
          <Modal.Title id="example-modal-sizes-title-sm" className="fs-5">
            <i className="far fa-check-circle text-success"></i> Order Placed
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default TourDetails
