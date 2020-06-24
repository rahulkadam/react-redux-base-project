import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {LOGGED_IN_USER, LOGGED_IN_USER_SUCCESS} from './actionTypes';

export const LogActions = () => {
  const dispatch = useDispatch();
  const loggedCallback = useCallback(
    authUser => {
      dispatch({
        type: LOGGED_IN_USER,
        value: {...authUser},
      });
    },
    [dispatch]
  );
  return loggedCallback;
};

export const loggedActions = () => ({
  type: LOGGED_IN_USER_SUCCESS,
});
