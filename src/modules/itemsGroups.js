import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as itemsGroupsAPI from '../lib/api/itemsGroups';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_ITEMSGROUPS,
  LIST_ITEMSGROUPS_SUCCESS,
  LIST_ITEMSGROUPS_FAILURE,
] = createRequestActionTypes('itemsGroups/LIST_ITEMSGROUPS');

const [
  POST_ITEMSGROUPS,
  POST_ITEMSGROUPS_SUCCESS,
  POST_ITEMSGROUPS_FAILURE,
] = createRequestActionTypes('itemsGroups/POST_ITEMSGROUPS');

export const listItemsGroups = createAction(LIST_ITEMSGROUPS);
export const postItemsGroups = createAction(POST_ITEMSGROUPS);

const listItemsGroupsSaga = createRequestSaga(
  LIST_ITEMSGROUPS,
  itemsGroupsAPI.listItemsGroups,
);
const postItemsGroupsSaga = createRequestSaga(
  POST_ITEMSGROUPS,
  itemsGroupsAPI.postItemsGroups,
);
export function* itemsGroupsSaga() {
  yield takeLatest(LIST_ITEMSGROUPS, listItemsGroupsSaga);
  yield takeLatest(POST_ITEMSGROUPS, postItemsGroupsSaga);
}

const initialState = {
  dataSets: null,
  uuidCreatedAfterSubmit: null,
  error: null,
};

const itemsGroups = handleActions(
  {
    [LIST_ITEMSGROUPS_SUCCESS]: (state, { payload: dataSets }) => {
      return {
        ...state,
        dataSets,
      };
    },
    [LIST_ITEMSGROUPS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [POST_ITEMSGROUPS_SUCCESS]: (
      state,
      { payload: uuidCreatedAfterSubmit },
    ) => {
      return {
        ...state,
        uuidCreatedAfterSubmit,
      };
    },
    [POST_ITEMSGROUPS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default itemsGroups;
