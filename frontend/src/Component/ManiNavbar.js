import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function ManiNavbar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">NASA api</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./about">APOD</Nav.Link>
            <Nav.Link href="./details">Image Of The Day</Nav.Link>
            <Nav.Link href="./neo">NEO</Nav.Link>
            <Nav.Link href="./epic">Epic</Nav.Link>
            <Nav.Link href="./cem">CEM</Nav.Link>
            <Nav.Link href="./nasaimg">Earth</Nav.Link>
            <Nav.Link href="./solar">Solar System</Nav.Link>

            <NavDropdown title="Planets" id="basic-nav-dropdown">
              <NavDropdown.Item href="./mercury">Mercury</NavDropdown.Item>
              <NavDropdown.Item href="./jupiter">Jupiter</NavDropdown.Item>
              <NavDropdown.Item href="./mars">Mars</NavDropdown.Item>
              <NavDropdown.Item href="./neptune">Neptune</NavDropdown.Item>
              <NavDropdown.Item href="./saturn">Saturn</NavDropdown.Item>
              <NavDropdown.Item href="./uranus">Uranus</NavDropdown.Item>
              <NavDropdown.Item href="./venus">Venus</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>

            <Nav.Link href="./login">Login</Nav.Link>
            <Nav.Link href="./registration">Register</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ManiNavbar;