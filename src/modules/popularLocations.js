import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as popularLocationsAPI from '../lib/api/popularLocations';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'popularLocations/INITIALIZE';

const [
  LIST_POPULARLOCATIONS,
  LIST_POPULARLOCATIONS_SUCCESS,
  LIST_POPULARLOCATIONS_FAILURE,
] = createRequestActionTypes('popularLocations/LIST_POPULARLOCATIONS');

const [
  POST_POPULARLOCATION,
  POST_POPULARLOCATION_SUCCESS,
  POST_POPULARLOCATION_FAILURE,
] = createRequestActionTypes('popularLocations/POST_POPULARLOCATION');

const [
  UPDATE_POPULARLOCATION,
  UPDATE_POPULARLOCATION_SUCCESS,
  UPDATE_POPULARLOCATION_FAILURE,
] = createRequestActionTypes('popularLocations/UPDATE_POPULARLOCATION');

export const initialize = createAction(INITIALIZE);
export const listPopularLocations = createAction(
  LIST_POPULARLOCATIONS,
  (data) => data,
);
export const postPopularLocation = createAction(
  POST_POPULARLOCATION,
  (data) => data,
);
export const updatePopularLocation = createAction(
  UPDATE_POPULARLOCATION,
  (data) => data,
);

const listPopularLocationsSaga = createRequestSaga(
  LIST_POPULARLOCATIONS,
  popularLocationsAPI.listPopularLocations,
);
const postPopularLocationSaga = createRequestSaga(
  POST_POPULARLOCATION,
  popularLocationsAPI.postPopularLocation,
);
const updatePopularLocationSaga = createRequestSaga(
  UPDATE_POPULARLOCATION,
  popularLocationsAPI.updatePopularLocation,
);
export function* popularLocationsSaga() {
  yield takeLatest(LIST_POPULARLOCATIONS, listPopularLocationsSaga);
  yield takeLatest(POST_POPULARLOCATION, postPopularLocationSaga);
  yield takeLatest(UPDATE_POPULARLOCATION, updatePopularLocationSaga);
}

const initialState = {
  popularLocations: null,
  error: null,
  lastPage: 1,
  error_list: null,
  res_add: null,
  error_add: null,
  res_update: null,
  error_update: null,
};

const popularLocations = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [LIST_POPULARLOCATIONS_SUCCESS]: (
      state,
      { payload: popularLocations, meta: response },
    ) => {
      return {
        ...state,
        popularLocations,
        lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
        error_list: null,
        res_add: null,
        error_add: null,
        res_update: null,
        error_update: null,
      };
    },
    [LIST_POPULARLOCATIONS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error_list: error,
      res_add: null,
      error_add: null,
      res_update: null,
      error_update: null,
    }),
    [POST_POPULARLOCATION_SUCCESS]: (state, { payload: result }) => {
      console.log('===100', result);
      return {
        ...state,
        error_list: null,
        res_add: result,
        error_add: null,
        res_update: null,
        error_update: null,
      };
    },
    [POST_POPULARLOCATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error_list: null,
      res_add: null,
      error_add: error,
      res_update: null,
      error_update: null,
    }),
    [UPDATE_POPULARLOCATION_SUCCESS]: (state, { payload: result }) => {
      return {
        ...state,
        error_list: null,
        res_add: null,
        error_add: null,
        res_update: result,
        error_update: null,
      };
    },
    [UPDATE_POPULARLOCATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error_list: null,
      res_add: null,
      error_add: null,
      res_update: null,
      error_update: error,
    }),
  },
  initialState,
);

export default popularLocations;
