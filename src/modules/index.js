import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import main from './main';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import itemsGroups, { itemsGroupsSaga } from './itemsGroups';
import budgetResult, { budgetResultSaga } from './budgetResult';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  main,
  auth,
  loading,
  user,
  itemsGroups,
  budgetResult,
  write,
  post,
  posts,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    itemsGroupsSaga(),
    budgetResultSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
  ]); // todo: compare with 'fork'
}

export default rootReducer;
