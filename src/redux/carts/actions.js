import {
  START_FETCHING_CARTS,
  SUCCESS_FETCHING_CARTS,
  ERROR_FETCHING_CARTS,
  ERROR_UPDATE_CARTS,
  START_UPDATE_CARTS,
  SUCCESS_UPDATE_CARTS,
  ERROR_CHECK_CARTS,
  START_CHECK_CARTS,
  SUCCESS_CHECK_CARTS,
} from './constants';

import { getData, putData } from '../../utils/fetch';

import debounce from 'debounce-promise';

let debounceFetchCarts = debounce(getData, 0);

// FETCH

export const startFetchingCarts = () => {
  return {
    type: START_FETCHING_CARTS,
  };
};

export const successFetchingCarts = ({ carts }) => {
  return {
    type: SUCCESS_FETCHING_CARTS,
    carts,
  };
};

export const errorFetchingCarts = () => {
  return {
    type: ERROR_FETCHING_CARTS,
  };
};

// UPDATE

export const startUpdateCarts = () => {
  return {
    type: START_UPDATE_CARTS,
  };
};

export const successUpdateCarts = ({ carts }) => {
  return {
    type: SUCCESS_UPDATE_CARTS,
    carts,
  };
};

export const errorUpdateCarts = () => {
  return {
    type: ERROR_UPDATE_CARTS,
  };
};

// CHECK

export const startCheckCarts = () => {
  return {
    type: START_CHECK_CARTS,
  };
};

export const successCheckCarts = ({ carts }) => {
  return {
    type: SUCCESS_CHECK_CARTS,
    carts,
  };
};

export const errorCheckCarts = () => {
  return {
    type: ERROR_CHECK_CARTS,
  };
};

export const fetchCarts = () => {
  return async (dispatch) => {
    dispatch(startFetchingCarts());
    try {
      let res = await debounceFetchCarts('/carts');

      dispatch(
        successFetchingCarts({
          carts: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingCarts());
    }
  };
};

export const updateCarts = (item) => {
  return async (dispatch) => {
    dispatch(startUpdateCarts());
    try {
      let res = await putData(`/carts/${item.id}`, item);
      dispatch(
        successUpdateCarts({
          carts: res.data.data,
        })
      );
    } catch (error) {
      console.error('Error updating cart:', error);
      dispatch(errorUpdateCarts());
    }
  };
};

export const checkCarts = (item) => {
  return async (dispatch) => {
    dispatch(startCheckCarts());
    try {
      let res = await putData(`/carts/updateChecked/${item.id}`, item);

      dispatch(
        successCheckCarts({
          carts: res.data.data,
        })
      );
    } catch (error) {
      console.error('Error updating cart:', error);
      dispatch(errorCheckCarts());
    }
  };
};
