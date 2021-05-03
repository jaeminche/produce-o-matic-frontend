import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as budgetResultsAPI from '../lib/api/budgetResults';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'budgetResults/INITIALIZE'; // 모든 내용 초기화

const [
  POST_BUDGETRESULT,
  POST_BUDGETRESULT_SUCCESS,
  POST_BUDGETRESULT_FAILURE,
] = createRequestActionTypes('budgetResults/POST_BUDGETRESULT');

export const initialize = createAction(INITIALIZE);
export const postBudgetResult = createAction(POST_BUDGETRESULT);

const postBudgetResultSaga = createRequestSaga(
  POST_BUDGETRESULT,
  budgetResultsAPI.postBudgetResult,
);
export function* budgetResultSaga() {
  yield takeLatest(POST_BUDGETRESULT, postBudgetResultSaga);
}

const initialState = {
  res: null,
  error: null,
};

const budgetResults = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [POST_BUDGETRESULT_SUCCESS]: (
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
    [POST_BUDGETRESULT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default budgetResults;
