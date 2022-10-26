// [Bootstrap] Component Theme
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicNav() {
  return (
    <Navbar bg='light' expand='md'>
      <Container fluid>

        <Navbar.Brand className='fw-bold' href='/'>
          React.js App 1.0
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>
              Homepage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default BasicNav;
