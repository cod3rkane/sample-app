import {
  all,
  call,
  delay,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { jobList } from './reducers/jobs/actions';

es6promise.polyfill();

function* rootSaga() {
  // yield all([
  //   call(runClockSaga),
  //   takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  // ]);
}

export default rootSaga;
