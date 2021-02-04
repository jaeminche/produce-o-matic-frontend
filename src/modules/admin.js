import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';

const CHANGE_FIELD = 'admin/CHANGE_FIELD';
const INITIALIZE_FORM = 'admin/INITIALIZE_FORM';

const [ADDGROUP, ADDGROUP_SUCCESS, ADDGROUP_FAILURE] = createRequestActionTypes(
  'admin/ADDGROUP',
);
const [ADDITEM, ADDITEM_SUCCESS, ADDITEM_FAILURE] = createRequestActionTypes(
  'admin/ADDITEM',
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const addGroup = createAction(ADDGROUP, ({ code, name, category }) => ({
  code,
  name,
  category,
}));
export const addItem = createAction(
  ADDITEM,
  ({ code, name, unit, rate, remark, tags }) => ({
    code,
    name,
    unit,
    rate,
    remark,
    tags,
  }),
);

// * Create Sagas
const addGroupSaga = createRequestSaga(ADDGROUP, adminAPI.addGroup);
const addItemSaga = createRequestSaga(ADDITEM, adminAPI.addItem);
export function* adminSaga() {
  yield takeLatest(ADDGROUP, addGroupSaga);
  yield takeLatest(ADDITEM, addItemSaga);
}

const initialState = {
  addGroup: {
    code: null,
    name: '',
    category: '',
  },
  addItem: {
    code: null,
    name: '',
    unit: '',
    rate: null,
    remark: '',
    tags: null,
  },
  addGroupSubmitted: null,
  addGroupError: null,
  addItemSubmitted: null,
  addItemError: null,
};

const admin = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      [`${form}Error`]: null,
    }),
    [ADDGROUP_SUCCESS]: (state, { payload: addGroupSubmitted }) => ({
      ...state,
      addGroupError: null,
      addGroupSubmitted,
    }),
    [ADDGROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      addGroupError: error,
    }),
    [ADDITEM_SUCCESS]: (state, { payload: addItemSubmitted }) => ({
      ...state,
      addItemError: null,
      addItemSubmitted,
    }),
    [ADDITEM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      addItemError: error,
    }),
  },
  initialState,
);

export default admin;
