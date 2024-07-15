import {
  START_FETCHING_ITEMS,
  SUCCESS_FETCHING_ITEMS,
  ERROR_FETCHING_ITEMS,
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
    case START_FETCHING_ITEMS:
      return {
        ...state,
        status: statusList.process,
      };
    case ERROR_FETCHING_ITEMS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_FETCHING_ITEMS:
      return {
        ...state,
        status: statusList.success,
        data: action.items,
      };

    default:
      return state;
  }
}
