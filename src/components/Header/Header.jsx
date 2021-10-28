import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header>
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
                <i class="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown
                title={
                  <>
                    <i className="far fa-user"></i> Account
                  </>
                }
                className="drop_down"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/join">
                  Join
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
