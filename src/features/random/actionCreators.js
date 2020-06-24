import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import randomApi from '../../API/Random/random-api';
import {GET_RANDOM_NUMBER} from './actionTypes';

const useActions = () => {
  const dispatch = useDispatch();
  const getNumber = useCallback(() => {
    dispatch({
      type: `${GET_RANDOM_NUMBER}_PENDING`,
      payload: 'Getting Random Number',
    });
    axios.get(randomApi.randomAPI).then(
      data => {
        dispatch({
          type: GET_RANDOM_NUMBER,
          payload: data,
        });
      },
      error => {
        dispatch({
          type: `${GET_RANDOM_NUMBER}_REJECTED`,
          payload: error,
        });
      }
    );
  }, [dispatch]);
  return {getNumber};
};

export {useActions};
