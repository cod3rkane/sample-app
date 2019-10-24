import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { jobLoadDataSuccess, jobFailure } from './reducers/jobs/actions';
import actionTypes from './reducers/jobs/actionTypes';

es6promise.polyfill();

function* loadData() {
  try {
    const res = yield fetch('/api/jobs');
    const data = yield res.json();

    yield put(jobLoadDataSuccess(data));
  } catch (err) {
    yield put(jobFailure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.JOB_LOAD_DATA, loadData),
  ]);
}

export default rootSaga;
