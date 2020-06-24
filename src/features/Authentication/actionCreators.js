import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {LOGGED_IN_USER, LOGGED_IN_USER_SUCCESS} from './actionTypes';

export const LogActions = user => {
  const dispatch = useDispatch();
  const loggedCallback = useCallback(() => {
    dispatch({
      type: LOGGED_IN_USER,
      value: {
        username: user.username,
        firstname: user.firstname,
      },
    });
  }, [user, dispatch]);
  return {loggedCallback};
};

export const loggedActions = () => {
  console.log('prinitngn hitting state');
  return {
    type: LOGGED_IN_USER_SUCCESS,
  };
};
