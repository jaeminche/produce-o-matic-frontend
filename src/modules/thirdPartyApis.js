import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as thirdParyApis from '../lib/api/thirdParyApis';
import { takeLatest } from 'redux-saga/effects';

const [GET_IP, GET_IP_SUCCESS, GET_IP_FAILURE] = createRequestActionTypes(
  'getIp/GET_IP',
);

export const getIp = createAction(GET_IP);

const getIpSaga = createRequestSaga(GET_IP, thirdParyApis.getIp);
export function* thirdParyApisSaga() {
  yield takeLatest(GET_IP, getIpSaga);
}

const initialState = {
  ip: null,
  error: null,
};

const thirdPartyApis = handleActions(
  {
    [GET_IP_SUCCESS]: (state, { payload: ip }) => {
      return {
        ...state,
        ip,
      };
    },
    [GET_IP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default thirdPartyApis;
