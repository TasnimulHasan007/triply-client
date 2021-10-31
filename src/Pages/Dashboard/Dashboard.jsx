import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AddTour from '../../components/AddTour/AddTour'
import ManageOrders from '../../components/ManageOrders/ManageOrders'
import Fade from 'react-reveal/Fade'
import useAuth from '../../Hooks/useAuth'
import './Dashboard.css'

const Dashboard = () => {
  // user
  const { user } = useAuth()
  // states
  const [control, setControl] = useState('ManageOrders')
  return (
    <Container className="d-flex flex-lg-row flex-column">
      <div className="sidebar">
        <div className="user-details">
          <Fade left>
            <img src={user.photoURL} alt="" className="profile_photo" />
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
          </Fade>
          <hr />
        </div>
        <div className="navigation">
          <Fade bottom delay={50}>
            <h4>Dashboard</h4>
            <hr />
          </Fade>
          <Fade bottom delay={150}>
            <button
              onClick={() => setControl('ManageOrders')}
              className={control === 'ManageOrders' ? 'active' : ''}
            >
              <i className="fas fa-tasks"></i> Manage Orders
            </button>
          </Fade>
          <Fade bottom delay={250}>
            <button
              onClick={() => setControl('AddTour')}
              className={control === 'AddTour' ? 'active' : ''}
            >
              <i className="fas fa-plus"></i> Add Tours
            </button>
          </Fade>
        </div>
      </div>
      <div className="main-area">
        {control === 'ManageOrders' && <ManageOrders />}
        {control === 'AddTour' && <AddTour />}
      </div>
    </Container>
  )
}

export default Dashboard
