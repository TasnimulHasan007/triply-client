import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
  // user
  const { user, logOut } = useAuth()
  return (
    <header className=" sticky-top">
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Triply"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav_toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="nav_bar">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              {user.email && (
                <Nav.Link as={NavLink} to="/myOrders">
                  <i className="fas fa-luggage-cart"></i> My Orders
                </Nav.Link>
              )}
              <NavDropdown
                title={
                  <>
                    <i className="far fa-user"></i> Account
                  </>
                }
                className="drop_down"
                id="basic-nav-dropdown"
              >
                {user.email ? (
                  <NavDropdown.Item as={NavLink} to="/dashboard">
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={NavLink} to="/join">
                    <i className="fas fa-sign-in-alt"></i> Join
                  </NavDropdown.Item>
                )}
                {user.email && (
                  <>
                    <NavDropdown.Item onClick={logOut}>
                      <i className="fas fa-sign-out-alt"></i> Log Out
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
              {user.email && (
                <img src={user.photoURL} alt="" className="profile_photo" />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
