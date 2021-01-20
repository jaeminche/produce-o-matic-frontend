import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as thirdParyApis from '../lib/api/thirdParyApis';
import { takeLatest } from 'redux-saga/effects';

const [GET_IP, GET_IP_SUCCESS, GET_IP_FAILURE] = createRequestActionTypes(
  'thirdPartyApis/GET_IP',
);
const [
  GET_USERSLOCATION,
  GET_USERSLOCATION_SUCCESS,
  GET_USERSLOCATION_FAILURE,
] = createRequestActionTypes('thirdPartyApis/GET_USERSLOCATION');
const [
  POST_COPYCONTRACTSAMPLE,
  POST_COPYCONTRACTSAMPLE_SUCCESS,
  POST_COPYCONTRACTSAMPLE_FAILURE,
] = createRequestActionTypes('thirdPartyApis/POST_COPYCONTRACTSAMPLE');
const [
  GET_CURRENCYSET,
  GET_CURRENCYSET_SUCCESS,
  GET_CURRENCYSET_FAILURE,
] = createRequestActionTypes('thirdPartyApis/GET_CURRENCYSET');

export const getIp = createAction(GET_IP);
export const getUsersLocation = createAction(GET_USERSLOCATION, ({ ip }) => ({
  ip,
}));
export const postCopyContractSample = createAction(
  POST_COPYCONTRACTSAMPLE,
  ({ fileId }) => ({
    fileId,
  }),
);
export const getCurrencySet = createAction(GET_CURRENCYSET, ({ apikey }) => ({
  apikey,
}));

const getIpSaga = createRequestSaga(GET_IP, thirdParyApis.getIp);
const getUsersLocationSaga = createRequestSaga(
  GET_USERSLOCATION,
  thirdParyApis.getUsersLocation,
);
const postCopyContractSampleSaga = createRequestSaga(
  POST_COPYCONTRACTSAMPLE,
  thirdParyApis.postCopyContractSample,
);
const getCurrencySetSaga = createRequestSaga(
  GET_CURRENCYSET,
  thirdParyApis.getCurrencySet,
);
export function* thirdParyApisSaga() {
  yield takeLatest(GET_IP, getIpSaga);
  yield takeLatest(GET_USERSLOCATION, getUsersLocationSaga);
  yield takeLatest(POST_COPYCONTRACTSAMPLE, postCopyContractSampleSaga);
  yield takeLatest(GET_CURRENCYSET, getCurrencySetSaga);
}

const initialState = {
  ip: null,
  ipError: null,
  usersLocation: null,
  usersLocationError: null,
  copyContractResult: null,
  copyContractResultError: null,
  currencySet: null,
  currencySetError: null,
};

const thirdPartyApis = handleActions(
  {
    [GET_IP_SUCCESS]: (state, { payload: { ip } }) => {
      return {
        ...state,
        ip,
      };
    },
    [GET_IP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      ipError: error,
    }),
    [GET_USERSLOCATION_SUCCESS]: (state, { payload: usersLocation }) => {
      return {
        ...state,
        usersLocation,
      };
    },
    [GET_USERSLOCATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      usersLocationError: error,
    }),
    [POST_COPYCONTRACTSAMPLE_SUCCESS]: (
      state,
      { payload: copyContractResult },
    ) => {
      return {
        ...state,
        copyContractResult,
      };
    },
    [POST_COPYCONTRACTSAMPLE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      copyContractResultError: error,
    }),
    [GET_CURRENCYSET_SUCCESS]: (state, { payload: currencySet }) => {
      return {
        ...state,
        currencySet,
      };
    },
    [GET_CURRENCYSET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      currencySetError: error,
    }),
  },
  initialState,
);

export default thirdPartyApis;
