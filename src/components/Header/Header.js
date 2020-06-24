import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Header = () => (
  <div>
    <Helmet>
      <title>APG Payment Gateway</title>
    </Helmet>
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          APG Home
        </Nav.Link>
        <Nav.Link as={Link} to="/counter">
          APG View
        </Nav.Link>
        <Nav.Link as={Link} to="/random">
          APG Stats
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
