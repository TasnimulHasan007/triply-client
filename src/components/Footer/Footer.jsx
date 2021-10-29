import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import sponsers from '../../images/sponsers.png'

const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <footer>
      <div className="details">
        <Container>
          <Row className="gy-5 gx-md-5">
            <Col lg="4" md="6">
              <h5>GET UPDATES MORE</h5>
              <p>
                Subscribe to the free newsletter and get 20% discount on your
                next booking
              </p>
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-sm-column flex-xl-row"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="me-xl-3 mb-xl-0 mb-sm-3"
                />
                <button
                  type="submit"
                  className="d-flex align-items-center justify-content-center main_btn"
                >
                  Subscribe <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </form>
            </Col>
            <Col lg="4" md="6" className="text-lg-center">
              <h5>CUSTOMER SUPPORT</h5>
              <p>
                Get in touch with your <br /> accommodation provider.
              </p>
              <span>
                <i className="fas fa-phone-alt"></i> + 4628 - 348 8783
              </span>
            </Col>
            <Col
              lg="4"
              md="6"
              className="d-flex flex-column align-items-lg-end"
            >
              <h5>FOLLOW US</h5>
              <div className="d-flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.twitter.com/"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <img src={sponsers} alt="" className="sponsers" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <p>
            Copyright &copy; 2021 <span>Triply</span>. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
