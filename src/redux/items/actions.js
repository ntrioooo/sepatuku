import {
  START_FETCHING_ITEMS,
  SUCCESS_FETCHING_ITEMS,
  ERROR_FETCHING_ITEMS,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';

let debounceFetchItems = debounce(getData, 1000);

export const startFetchingItems = () => {
  return {
    type: START_FETCHING_ITEMS,
  };
};

export const successFetchingItems = ({ items }) => {
  return {
    type: SUCCESS_FETCHING_ITEMS,
    items,
  };
};

export const errorFetchingItems = () => {
  return {
    type: ERROR_FETCHING_ITEMS,
  };
};

export const fetchItems = () => {
  return async (dispatch) => {
    dispatch(startFetchingItems());
    try {
      let res = await debounceFetchItems('/items');

      dispatch(
        successFetchingItems({
          items: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingItems());
    }
  };
};

export const fetchItemsById = (id) => {
  return async (dispatch) => {
    dispatch(startFetchingItems());
    try {
      let res = await debounceFetchItems(`/items/${id}`);

      console.log(res);

      dispatch(
        successFetchingItems({
          items: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingItems());
    }
  };
};
