import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as fileUploadAPI from '../lib/api/fileUpload';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'fileUpload/INITIALIZE'; // 모든 내용 초기화

const [
  POST_FILEUPLOAD,
  POST_FILEUPLOAD_SUCCESS,
  POST_FILEUPLOAD_FAILURE,
] = createRequestActionTypes('fileUpload/POST_FILEUPLOAD');

export const initialize = createAction(INITIALIZE);
export const postFileUpload = createAction(POST_FILEUPLOAD);

const postFileUploadSaga = createRequestSaga(
  POST_FILEUPLOAD,
  fileUploadAPI.postFileUpload,
);
export function* fileUploadSaga() {
  yield takeLatest(POST_FILEUPLOAD, postFileUploadSaga);
}

const initialState = {
  res: null,
  error: null,
};

const fileUpload = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [POST_FILEUPLOAD_SUCCESS]: (state, { payload: result }) => {
      // console.log('===100', result);
      return {
        ...state,
        res: result,
        error: null,
      };
    },
    [POST_FILEUPLOAD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default fileUpload;
