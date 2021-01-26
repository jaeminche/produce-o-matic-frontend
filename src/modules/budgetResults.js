import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as budgetResultsAPI from '../lib/api/budgetResults';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_BUDGETRESULTS,
  LIST_BUDGETRESULTS_SUCCESS,
  LIST_BUDGETRESULTS_FAILURE,
] = createRequestActionTypes('budgetResults/LIST_BUDGETRESULTS');

export const listBudgetResults = createAction(
  LIST_BUDGETRESULTS,
  // ({ uuid = null, email = null, createdAt = null }) => ({
  //   uuid,
  //   email,
  //   createdAt,
  // }),
);

const listBudgetResultsSaga = createRequestSaga(
  LIST_BUDGETRESULTS,
  budgetResultsAPI.listBudgetResults,
);
export function* budgetResultsSaga() {
  yield takeLatest(LIST_BUDGETRESULTS, listBudgetResultsSaga);
}

const initialState = {
  budgetResults: null,
  error: null,
  lastPage: 1,
};

const budgetResults = handleActions(
  {
    [LIST_BUDGETRESULTS_SUCCESS]: (
      state,
      { payload: budgetResults, meta: response },
    ) => {
      return {
        ...state,
        budgetResults,
        lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
      };
    },
    [LIST_BUDGETRESULTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default budgetResults;
