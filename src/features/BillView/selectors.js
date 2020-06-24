import {useSelector} from 'react-redux';

/**
 * Custom React Hook to get Billview  from store.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const GetBillViewObject = () =>
  useSelector(state => {
    if (state && state.billview) {
      return state.billview;
    }
    return {};
  });
