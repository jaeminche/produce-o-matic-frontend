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

export const getIp = createAction(GET_IP);
export const getUsersLocation = createAction(GET_USERSLOCATION, ({ ip }) => ({
  ip,
}));

const getIpSaga = createRequestSaga(GET_IP, thirdParyApis.getIp);
const getUsersLocationSaga = createRequestSaga(
  GET_USERSLOCATION,
  thirdParyApis.getUsersLocation,
);
export function* thirdParyApisSaga() {
  yield takeLatest(GET_IP, getIpSaga);
  yield takeLatest(GET_USERSLOCATION, getUsersLocationSaga);
}

const initialState = {
  ip: null,
  ipError: null,
  usersLocation: null,
  usersLocationError: null,
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
  },
  initialState,
);

export default thirdPartyApis;
