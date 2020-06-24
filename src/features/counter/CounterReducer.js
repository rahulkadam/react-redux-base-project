import {INCREMENT_COUNTER} from './actionTypes';

const initialState = {
  value: 0,
  value1: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, value: action.value.count, value1: action.value.count1};

    default:
      return state;
  }
};
