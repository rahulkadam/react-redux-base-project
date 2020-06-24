import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import logo from '../../images/astro118.png';

const HeaderMenu = props => {
  const userObject = props.user;

  return (
    <div>
      <Route>
        <Navbar bg="red" expand="md" style={{backgroundColor: '#dd267c'}}>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'  '}
            Astro Payment Gateway
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              APG Home
            </Nav.Link>
            <Nav.Link as={Link} to="/counter">
              APG View
            </Nav.Link>
            {userObject.username && (
              <Nav.Link as={Link} to="/random">
                APG Stats
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
      </Route>
    </div>
  );
};

HeaderMenu.propTypes = {
  user: PropTypes.shape({username: PropTypes.string}),
};

HeaderMenu.defaultProps = {
  user: {
    username: '',
  },
};

export {HeaderMenu};
