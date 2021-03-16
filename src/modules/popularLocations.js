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

export const initialize = createAction(INITIALIZE);
export const listPopularLocations = createAction(LIST_POPULARLOCATIONS);
export const postPopularLocation = createAction(
  POST_POPULARLOCATION,
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
export function* popularLocationsSaga() {
  yield takeLatest(LIST_POPULARLOCATIONS, listPopularLocationsSaga);
  yield takeLatest(POST_POPULARLOCATION, postPopularLocationSaga);
}

const initialState = {
  popularLocations: null,
  error: null,
  lastPage: 1,
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
      };
    },
    [LIST_POPULARLOCATIONS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [POST_POPULARLOCATION_SUCCESS]: (
      state,
      // ! 여기할 차례
      { payload: result },
    ) => {
      console.log('===100', result);
      return {
        ...state,
        res: result,
        error: null,
      };
    },
    [POST_POPULARLOCATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default popularLocations;
