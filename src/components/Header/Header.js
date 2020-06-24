import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Helmet} from 'react-helmet';
import {GetLoggedInUser} from '../../features/Authentication';
import {HeaderMenu} from './HeaderMenu';
import {LoginHeader} from './LoginHeader';
import {UserNameHeader} from './UserNameHeader';
import classes from './Header.module.css';

const Header = () => {
  const loggedUser = GetLoggedInUser();

  return (
    <div>
      <Helmet>
        <title>APG Payment Gateway</title>
      </Helmet>
      <Container fluid>
        <Row className={classes.Header}>
          <Col md={9}>
            <HeaderMenu user={loggedUser} />
          </Col>
          <Col md={2} className="justify-content-md-center">
            <UserNameHeader user={loggedUser} />
          </Col>
          <Col md={1} className="justify-content-md-center">
            <LoginHeader user={loggedUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export {Header};
