import {
  START_FETCHING_CARTS,
  SUCCESS_FETCHING_CARTS,
  ERROR_FETCHING_CARTS,
  START_UPDATE_CARTS,
  SUCCESS_UPDATE_CARTS,
  ERROR_UPDATE_CARTS,
  ERROR_CHECK_CARTS,
  START_CHECK_CARTS,
  SUCCESS_CHECK_CARTS,
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
    case START_UPDATE_CARTS:
      return {
        ...state,
        status: statusList.process,
      };
    case ERROR_UPDATE_CARTS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_UPDATE_CARTS:
      return {
        ...state,
        status: statusList.success,
        data: action.carts,
      };
    case START_CHECK_CARTS:
      return {
        ...state,
        status: statusList.process,
      };
    case ERROR_CHECK_CARTS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_CHECK_CARTS:
      return {
        ...state,
        status: statusList.success,
        data: action.carts,
      };

    default:
      return state;
  }
}
