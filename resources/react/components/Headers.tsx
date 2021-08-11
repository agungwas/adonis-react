import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '@/assets/images/logo.png';
import '@style/Headers.scss';
import { Link, NavLink } from 'react-router-dom';

const Headers: React.FC<{}> = () => {


  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="d-flex h-100">
        <Link to='/'>
        <Navbar.Brand style={{ fontFamily: "Style Script" }}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
          React
        </Navbar.Brand>
        </Link>

        <Container className="d-flex justify-content-end">
          <Nav.Link >
            <NavLink to="/food" activeClassName="btn btn-danger">
              Makanan
            </NavLink>
          </Nav.Link>
          <Nav.Link >
            <NavLink to="/city">
              Kota
            </NavLink>
          </Nav.Link>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Headers