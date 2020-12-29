import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as budgetResultsAPI from '../lib/api/budgetResults';
import { takeLatest } from 'redux-saga/effects';

const [
  POST_BUDGETRESULTS,
  POST_BUDGETRESULTS_SUCCESS,
  POST_BUDGETRESULTS_FAILURE,
] = createRequestActionTypes('budgetResults/POST_BUDGETRESULTS');

export const postBudgetResults = createAction(POST_BUDGETRESULTS);

const postBudgetResultsSaga = createRequestSaga(
  POST_BUDGETRESULTS,
  budgetResultsAPI.postBudgetResults,
);
export function* itemsGroupsSaga() {
  yield takeLatest(POST_BUDGETRESULTS, postBudgetResultsSaga);
}

const initialState = {
  uuid: null,
  email: null,
  createdAt: null,
  result: null,
  error: null,
};

const budgetResults = handleActions(
  {
    [POST_BUDGETRESULTS_SUCCESS]: (
      state,
      // ! 여기할 차례
      { payload: uuidCreatedAfterSubmit },
    ) => {
      return {
        ...state,
        uuid: null,
        email: null,
        createdAt: null,
        result: null,
      };
    },
    [POST_BUDGETRESULTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default budgetResults;
