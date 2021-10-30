import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import useAuth from '../../Hooks/useAuth'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
  // user
  const { user, logOut } = useAuth()
  return (
    <header className="sticky-top">
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Triply"
              height="30"
              className="d-inline-block align-top my-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav_toggler"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="nav_bar">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavHashLink}
                activeClassName="active"
                to="/Home#home"
              >
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                activeClassName="active"
                to="/Home#tours"
              >
                <i className="fas fa-plane-departure"></i> Tours
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                activeClassName="active"
                to="/Home#features"
              >
                <i className="fas fa-coffee"></i> Features
              </Nav.Link>
              {user.email ? (
                <>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/myOrders"
                  >
                    <i className="fas fa-luggage-cart"></i> My Orders
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/dashboard"
                  >
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                  </Nav.Link>
                  <button className="logout_btn" onClick={logOut}>
                    <i className="fas fa-sign-out-alt"></i> Log Out
                  </button>
                  <img src={user.photoURL} alt="" className="profile_photo" />
                </>
              ) : (
                <Nav.Link as={NavLink} activeClassName="active" to="/join">
                  <i className="fas fa-sign-in-alt"></i> Join
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
