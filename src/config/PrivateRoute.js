import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {GetLoggedInUser} from '../features/Authentication';

const PrivateRoute = ({children, ...rest}) => {
  const loggedUser = GetLoggedInUser();

  return (
    <Route
      {...rest}
      render={location =>
        loggedUser.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {from: location.location},
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

PrivateRoute.defaultProps = {
  children: {},
};

export {PrivateRoute};
