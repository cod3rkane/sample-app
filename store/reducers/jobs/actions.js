import actionTypes from './actionTypes';

export function jobLoadDataSuccess(payload) {
  return {
    type: actionTypes.JOB_LOAD_DATA_SUCCESS,
    payload,
  };
}

export function jobFailure(payload) {
  return {
    type: actionTypes.JOB_LOAD_DATA_ERROR,
    payload,
  };
}

export default {
  jobLoadDataSuccess,
  jobFailure,
};
