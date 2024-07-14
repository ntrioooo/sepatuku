import {
  START_FETCHING_MERKS,
  SUCCESS_FETCHING_MERKS,
  ERROR_FETCHING_MERKS,
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
    case START_FETCHING_MERKS:
      return {
        ...state,
        status: statusList.process,
      };
    case ERROR_FETCHING_MERKS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_FETCHING_MERKS:
      return {
        ...state,
        status: statusList.success,
        data: action.merks,
      };

    default:
      return state;
  }
}
