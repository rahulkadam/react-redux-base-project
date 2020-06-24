import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {INCREMENT_COUNTER} from './actionTypes';

const useActions = count => {
  const dispatch = useDispatch();
  const incrementCounter = useCallback(() => {
    dispatch({
      type: INCREMENT_COUNTER,
      value: {count: count.value + 1, count1: count.value1 - 1},
    });
  }, [count, dispatch]);
  return {incrementCounter};
};

export default useActions;
