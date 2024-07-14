import {
  START_FETCHING_MERKS,
  SUCCESS_FETCHING_MERKS,
  ERROR_FETCHING_MERKS,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';

let debounceFetchMerks = debounce(getData, 1000);

export const startFetchingMerks = () => {
  return {
    type: START_FETCHING_MERKS,
  };
};

export const successFetchingMerks = ({ merks }) => {
  return {
    type: SUCCESS_FETCHING_MERKS,
    merks,
  };
};

export const errorFetchingMerks = () => {
  return {
    type: ERROR_FETCHING_MERKS,
  };
};

export const fetchMerks = () => {
  return async (dispatch) => {
    dispatch(startFetchingMerks());
    try {
      let res = await debounceFetchMerks('/merks');

      dispatch(
        successFetchingMerks({
          merks: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingMerks());
    }
  };
};
