import {useSelector} from 'react-redux';

/**
 * Custom React Hook to get count value from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const GetLoggedInUser = () =>
  useSelector(state => {
    if (state) {
      return state.user;
    }
    return '';
  });
