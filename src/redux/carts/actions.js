import {
  START_FETCHING_CARTS,
  SUCCESS_FETCHING_CARTS,
  ERROR_FETCHING_CARTS,
  ERROR_POST_CARTS,
  START_POST_CARTS,
  SUCCESS_POST_CARTS,
} from './constants';

import { getData } from '../../utils/fetch';
import { postData } from '../../utils/fetch';

import debounce from 'debounce-promise';

let debounceFetchCarts = debounce(getData, 1000);

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

export const startPostCarts = () => {
  return {
    type: START_POST_CARTS,
  };
};

export const successPostCarts = ({ carts }) => {
  return {
    type: SUCCESS_POST_CARTS,
    carts,
  };
};

export const errorPostCarts = () => {
  return {
    type: ERROR_FETCHING_CARTS,
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

export const postCarts = (item) => {
  return {
    type: START_POST_CARTS,
    item,
  };
};

// export const postCarts = () => {
// //   return async (dispatch) => {
// //     const res = await postData('/carts', {});
// //     try {
// //       dispatch(
// //         successFetchingCarts({
// //           carts: res.data.data,
// //         })
// //       );
// //     } catch (error) {
// //       dispatch(errorFetchingCarts());
// //     }
// //   };
// // };
