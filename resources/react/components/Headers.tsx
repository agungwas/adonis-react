import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '@/assets/images/logo.png';
import '@style/Headers.scss'

const Headers: React.FC<{}> = () => {


  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className='d-flex h-100'>
        {/* <Container> */}
          <Navbar.Brand href="#home" style={{ fontFamily: 'Style Script' }}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React
          </Navbar.Brand>
        {/* </Container> */}
        <Container className='d-flex justify-content-end'>
          <Nav.Link>
            Makanan
          </Nav.Link>
          <Nav.Link>
            Kota
          </Nav.Link>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Headers