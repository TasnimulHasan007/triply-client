import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import googleLogo from '../../images/google.png'
import './Join.css'
import useAuth from '../../Hooks/useAuth'
import { useHistory, useLocation } from 'react-router'

const Join = () => {
  // states
  const [error, setError] = useState('')
  // location
  const location = useLocation()
  const redirect_url = location.state?.from || '/home'
  // history
  const history = useHistory()
  // authentication methods
  const { googleSignIn, setIsLoading } = useAuth()
  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => history.push(redirect_url))
      .catch(error => {
        setError(error.message)
      })
      .finally(setIsLoading(false))
  }

  return (
    <div className="join">
      <Container className="join-container">
        <img src={logo} alt="" className="logo" />
        <p>Login using social media to get quick access</p>
        {error && <span className="error">{error}</span>}
        <button className="google" onClick={handleGoogleSignIn}>
          <img src={googleLogo} alt="" /> Continue With Google
        </button>
      </Container>
    </div>
  )
}

export default Join
