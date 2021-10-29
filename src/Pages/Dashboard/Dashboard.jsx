import React from 'react'
import { Container } from 'react-bootstrap'
import useAuth from '../../Hooks/useAuth'
import './Dashboard.css'

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <Container>
      <div className="sidebar">
        <div className="user-details">
          <img src={user.photoURL} alt="" className="profile_photo" />
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      </div>
    </Container>
  )
}

export default Dashboard
