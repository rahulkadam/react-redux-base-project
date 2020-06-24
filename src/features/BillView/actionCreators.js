import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import randomApi from '../../API/Random/random-api';
import {
  FETCH_ACCOUNT_BILL,
  FETCH_ACCOUNT_BILL_STARTED,
  FETCH_ACCOUNT_BILL_ERROR,
  FETCH_ACCOUNT_BILL_CLEAR,
} from './actionTypes';

export const FetchBillActions = () => {
  const dispatch = useDispatch();
  const billActions = useCallback(
    accountNo => {
      dispatch({
        type: FETCH_ACCOUNT_BILL_STARTED,
      });
      axios.get(randomApi.randomAPI).then(
        data => {
          dispatch({
            type: FETCH_ACCOUNT_BILL,
            data: {
              username: 'Rahulkadam',
              firstname: 'Rahul',
              lastname: 'Kadam',
              userid: accountNo,
              totalAmount: 120.23,
              overdueAmount: 12.9,
              dueDate: '',
              accountNumber: accountNo,
              isFetching: false,
            },
          });
        },
        error => {
          dispatch({
            type: FETCH_ACCOUNT_BILL_ERROR,
            data: {
              username: 'Rahulkadam',
              firstname: 'Rahul',
              lastname: 'Kadam',
              userid: accountNo,
              totalAmount: 120.23,
              overdueAmount: 12.9,
              dueDate: '',
              accountNumber: 123456,
              isFetching: true,
            },
          });
        }
      );
    },
    [dispatch]
  );
  return billActions;
};

export const ClearBillAction = () => {
  const dispatch = useDispatch();
  const clearAction = useCallback(() => {
    dispatch({
      type: FETCH_ACCOUNT_BILL_CLEAR,
    });
  }, [dispatch]);
  return clearAction;
};
