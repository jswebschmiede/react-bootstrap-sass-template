import { Fragment } from 'react';
import { Col, Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='mt-4' as="main">
        <Row>
          <Col>
            <h1>Hello bootstrap</h1>
          </Col>
        </Row>
      </Container>

      <footer className='bg-dark text-white py-4'>
        <Container>
          <p className='m-0'>&copy; 2021 - React Bootstrap Starter Template</p>
        </Container>
      </footer>
    </Fragment>
  );
}

export default App;
