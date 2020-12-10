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

export const listItemsGroups = createAction(LIST_ITEMSGROUPS);

const listItemsGroupsSaga = createRequestSaga(
  LIST_ITEMSGROUPS,
  itemsGroupsAPI.listItemsGroups,
);
export function* itemsGroupsSaga() {
  yield takeLatest(LIST_ITEMSGROUPS, listItemsGroupsSaga);
}

const initialState = {
  dataSets: null,
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
  },
  initialState,
);

export default itemsGroups;
