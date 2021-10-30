import React from 'react'
import { Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import notFoundImg from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
  return (
    <Container className="not_found">
      <img src={notFoundImg} alt="" />
      <h2 className="title">Oops! Look like you’re lost</h2>
      <p>
        Page does not exist or some other error occured. Go to our Home page
      </p>
      <HashLink to="/home#home" className="main_btn">
        Go Back Home
      </HashLink>
    </Container>
  )
}

export default NotFound
