import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';

const UserNameHeader = props => {
  const userObj = props.user;

  return <div className={classes.UserNameLabel}>{userObj.username}</div>;
};

UserNameHeader.propTypes = {
  user: PropTypes.shape({username: PropTypes.string}),
};

UserNameHeader.defaultProps = {
  user: {
    username: '',
  },
};

export {UserNameHeader};
