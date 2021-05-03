import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';

const CHANGE_FIELD = 'admin/CHANGE_FIELD';
const INITIALIZE_FORM = 'admin/INITIALIZE_FORM';
const INITIALIZE_ALL = 'admin/INITIALIZE_ALL';

const [
  LISTCATEGORIES,
  LISTCATEGORIES_SUCCESS,
  LISTCATEGORIES_FAILURE,
] = createRequestActionTypes('admin/LISTCATEGORIES');
const [
  ADDCATEGORY,
  ADDCATEGORY_SUCCESS,
  ADDCATEGORY_FAILURE,
] = createRequestActionTypes('admin/ADDCATEGORY');
const [ADDGROUP, ADDGROUP_SUCCESS, ADDGROUP_FAILURE] = createRequestActionTypes(
  'admin/ADDGROUP',
);
const [ADDITEM, ADDITEM_SUCCESS, ADDITEM_FAILURE] = createRequestActionTypes(
  'admin/ADDITEM',
);
const [
  UPDATECATEGORY,
  UPDATECATEGORY_SUCCESS,
  UPDATECATEGORY_FAILURE,
] = createRequestActionTypes('admin/UPDATECATEGORY');
const [
  UPDATEGROUP,
  UPDATEGROUP_SUCCESS,
  UPDATEGROUP_FAILURE,
] = createRequestActionTypes('admin/UPDATEGROUP');
const [
  UPDATEITEM,
  UPDATEITEM_SUCCESS,
  UPDATEITEM_FAILURE,
] = createRequestActionTypes('admin/UPDATEITEM');
const [
  DELETEGROUP,
  DELETEGROUP_SUCCESS,
  DELETEGROUP_FAILURE,
] = createRequestActionTypes('admin/DELETEGROUP');
const [
  DELETECATEGORY,
  DELETECATEGORY_SUCCESS,
  DELETECATEGORY_FAILURE,
] = createRequestActionTypes('admin/DELETECATEGORY');
const [
  DELETEITEM,
  DELETEITEM_SUCCESS,
  DELETEITEM_FAILURE,
] = createRequestActionTypes('admin/DELETEITEM');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const initializeAll = createAction(INITIALIZE_ALL);

export const listCategories = createAction(LISTCATEGORIES);
export const addCategory = createAction(
  ADDCATEGORY,
  ({ name, groupsCodes }) => ({
    name,
    groupsCodes,
  }),
);
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
export const updateCategory = createAction(
  UPDATECATEGORY,
  ({ name, groupsCodes }) => ({
    name,
    groupsCodes,
  }),
);
export const updateGroup = createAction(
  UPDATEGROUP,
  ({ id, code, name, category }) => ({
    id,
    code,
    name,
    category,
  }),
);
export const updateItem = createAction(
  UPDATEITEM,
  ({ id, code, name, unit, rate, remark, tags }) => ({
    id,
    code,
    name,
    unit,
    rate,
    remark,
    tags,
  }),
);
export const deleteCategory = createAction(DELETECATEGORY, (id) => id);
export const deleteGroup = createAction(DELETEGROUP, (id) => id);
export const deleteItem = createAction(DELETEITEM, (id) => id);

// * Create Sagas
const listCategoriesSaga = createRequestSaga(
  LISTCATEGORIES,
  adminAPI.listCategories,
);
const addCategorySaga = createRequestSaga(ADDCATEGORY, adminAPI.addCategory);
const addGroupSaga = createRequestSaga(ADDGROUP, adminAPI.addGroup);
const addItemSaga = createRequestSaga(ADDITEM, adminAPI.addItem);
const updateCategorySaga = createRequestSaga(
  UPDATECATEGORY,
  adminAPI.updateCategory,
);
const updateGroupSaga = createRequestSaga(UPDATEGROUP, adminAPI.updateGroup);
const updateItemSaga = createRequestSaga(UPDATEITEM, adminAPI.updateItem);
const deleteCategorySaga = createRequestSaga(
  DELETECATEGORY,
  adminAPI.deleteCategory,
);
const deleteGroupSaga = createRequestSaga(DELETEGROUP, adminAPI.deleteGroup);
const deleteItemSaga = createRequestSaga(DELETEITEM, adminAPI.deleteItem);
export function* adminSaga() {
  yield takeLatest(LISTCATEGORIES, listCategoriesSaga);
  yield takeLatest(ADDCATEGORY, addCategorySaga);
  yield takeLatest(ADDGROUP, addGroupSaga);
  yield takeLatest(ADDITEM, addItemSaga);
  yield takeLatest(UPDATECATEGORY, updateCategorySaga);
  yield takeLatest(UPDATEGROUP, updateGroupSaga);
  yield takeLatest(UPDATEITEM, updateItemSaga);
  yield takeLatest(DELETECATEGORY, deleteCategorySaga);
  yield takeLatest(DELETEGROUP, deleteGroupSaga);
  yield takeLatest(DELETEITEM, deleteItemSaga);
}

const initialState = {
  listCategories: null,
  addCategory: {
    name: '',
    groupsCodes: [],
  },
  addGroup: {
    code: null,
    name: '',
    category: '',
  },
  addItem: {
    selectedGroup: '',
    code: null,
    name: '',
    unit: '',
    rate: null,
    remark: '',
    tags: null,
  },
  updateCategory: {
    name: '',
    groupsCodes: [],
  },
  updateGroup: {
    code: null,
    name: '',
    category: '',
    _id: '',
  },
  updateItem: {
    code: null,
    name: '',
    unit: '',
    rate: null,
    remark: '',
    tags: null,
    _id: '',
  },
  listCategoriesError: null,
  addCategorySubmitted: null,
  addCategoryError: null,
  addGroupSubmitted: null,
  addGroupError: null,
  addItemSubmitted: null,
  addItemError: null,
  updateCategorySubmitted: null,
  updateCategoryError: null,
  updateGroupSubmitted: null,
  updateGroupError: null,
  updateItemSubmitted: null,
  updateItemError: null,
  deleteCategoryCompleted: null,
  deleteCategoryError: null,
  deleteGroupCompleted: null,
  deleteGroupError: null,
  deleteItemCompleted: null,
  deleteItemError: null,
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
    [INITIALIZE_ALL]: (state) => ({
      ...initialState,
    }),
    [LISTCATEGORIES_SUCCESS]: (state, { payload: listCategories }) => ({
      ...state,
      listCategoriesError: null,
      listCategories,
    }),
    [LISTCATEGORIES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      addCategoryError: error,
    }),
    [ADDCATEGORY_SUCCESS]: (state, { payload: addCategorySubmitted }) => ({
      ...state,
      addCategoryError: null,
      addCategorySubmitted,
    }),
    [ADDCATEGORY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      addCategoryError: error,
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
    [UPDATECATEGORY_SUCCESS]: (
      state,
      { payload: updateCategorySubmitted },
    ) => ({
      ...state,
      updateCategoryError: null,
      updateCategorySubmitted,
    }),
    [UPDATECATEGORY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateCategoryError: error,
    }),
    [UPDATEGROUP_SUCCESS]: (state, { payload: updateGroupSubmitted }) => ({
      ...state,
      updateGroupError: null,
      updateGroupSubmitted,
    }),
    [UPDATEGROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateGroupError: error,
    }),
    [UPDATEITEM_SUCCESS]: (state, { payload: updateItemSubmitted }) => ({
      ...state,
      updateItemError: null,
      updateItemSubmitted,
    }),
    [UPDATEITEM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateItemError: error,
    }),
    [DELETECATEGORY_SUCCESS]: (
      state,
      { payload: deleteCategoryCompleted },
    ) => ({
      ...state,
      deleteCategoryError: null,
      deleteCategoryCompleted,
    }),
    [DELETECATEGORY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      deleteCategoryError: error,
    }),
    [DELETEGROUP_SUCCESS]: (state, { payload: deleteGroupCompleted }) => ({
      ...state,
      deleteGroupError: null,
      deleteGroupCompleted,
    }),
    [DELETEGROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      deleteGroupError: error,
    }),
    [DELETEITEM_SUCCESS]: (state, { payload: deleteItemCompleted }) => ({
      ...state,
      deleteItemError: null,
      deleteItemCompleted,
    }),
    [DELETEITEM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      deleteItemError: error,
    }),
  },
  initialState,
);

export default admin;
