import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {INCREMENT_COUNTER, CLEAR_COUNTER} from './actionTypes';

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

const use1Actions = () => {
  const dispatch = useDispatch();
  const clearCounter = useCallback(() => {
    dispatch({
      type: CLEAR_COUNTER,
      value: {count: 0, count1: 100},
    });
  }, [dispatch]);
  return {clearCounter};
};

export {useActions, use1Actions};
