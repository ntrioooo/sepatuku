import {
  START_FETCHING_CARTS,
  SUCCESS_FETCHING_CARTS,
  ERROR_FETCHING_CARTS,
  START_POST_CARTS,
  SUCCESS_POST_CARTS,
  ERROR_POST_CARTS,
} from './constants';

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  data: [],
  status: statusList.idle,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_CARTS:
      return {
        ...state,
        status: statusList.process,
      };
    case ERROR_FETCHING_CARTS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_FETCHING_CARTS:
      return {
        ...state,
        status: statusList.success,
        data: action.carts,
      };
    case START_POST_CARTS:
      return {
        ...state,
        status: statusList.process,
      };
    case ERROR_POST_CARTS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_POST_CARTS:
      return {
        ...state,
        status: statusList.success,
        data: action.carts,
      };

    default:
      return state;
  }
}
