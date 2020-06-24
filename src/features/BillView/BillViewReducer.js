import {
  FETCH_ACCOUNT_BILL,
  FETCH_ACCOUNT_BILL_STARTED,
  FETCH_ACCOUNT_BILL_COMPLETED,
  FETCH_ACCOUNT_BILL_ERROR,
  FETCH_ACCOUNT_BILL_CLEAR,
} from './actionTypes';

const initialState = {
  username: '',
  firstname: '',
  lastname: '',
  userid: '',
  totalAmount: 0,
  overdueAmount: 0,
  dueDate: '',
  accountNumber: '',
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_BILL_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ACCOUNT_BILL:
      return {
        ...state,
        isFetching: action.data.isFetching,
        accountNumber: action.data.accountNumber,
        username: 'Rahul Kadam',
        totalAmount: 100,
      };
    case FETCH_ACCOUNT_BILL_COMPLETED:
      return state;
    case FETCH_ACCOUNT_BILL_ERROR:
      return {
        ...state,
        isFetching: false,
        accountNumber: action.data.accountNumber,
      };
    case FETCH_ACCOUNT_BILL_CLEAR:
      return {
        ...state,
        accountNumber: '',
        isFetching: false,
      }
    default:
      return state;
  }
};
