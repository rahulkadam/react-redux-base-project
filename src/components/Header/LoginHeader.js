import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {LogActions} from '../../features/Authentication';
import classes from './Header.module.css';

const LoginHeader = props => {
  const loggedUser = props.user;
  const logUser = LogActions();
  const history = useHistory();

  function loginUser() {
    history.replace(`/login`);
  }

  function logoutUser() {
    logUser({
      username: '',
      firstname: '',
      lastname: '',
      userid: '',
      isAuthenticated: false,
    });
    history.replace(`/`);
  }

  return (
    <div className={classes.LoginHeaderBtn}>
      {!loggedUser.username > 0 && (
        <Button variant="primary" onClick={() => loginUser()}>
          Login
        </Button>
      )}
      {loggedUser.username && (
        <Button variant="primary" onClick={() => logoutUser()}>
          Logout
        </Button>
      )}
    </div>
  );
};

LoginHeader.propTypes = {
  user: PropTypes.shape({username: PropTypes.string}),
};

LoginHeader.defaultProps = {
  user: {
    username: '',
  },
};

export {LoginHeader};
