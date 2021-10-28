import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import googleLogo from '../../images/google.png'
import './Join.css'

const Join = () => {
  return (
    <div className="join">
      <Container className="join-container">
        <img src={logo} alt="" className="logo" />
        <p>Login using social media to get quick access</p>
        <button className="google">
          {' '}
          <img src={googleLogo} alt="" /> Continue With Google
        </button>
      </Container>
    </div>
  )
}

export default Join
