import {useSelector} from 'react-redux';

/**
 * Custom React Hook to get count value from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useCountValue = () =>
  useSelector(state => {
    if (state && state.count) {
      return state.count.value;
    }
    return '';
  });

export const useCountValue1 = () =>
  useSelector(state => {
    if (state && state.count) {
      return state.count.value1;
    }
    return '';
  });

export const useCount = () =>
  useSelector(state => {
    if (state && state.count) {
      return state.count;
    }
    return {value: '234', value1: '234'};
  });
