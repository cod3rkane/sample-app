import actionTypes from './actionTypes';

export function getJobList(payload) {
  return {
    type: actionTypes.JOB_LOAD_DATA,
    payload,
  };
}

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

export function jobSearch(payload) {
  return {
    type: actionTypes.JOB_FILTER_SEARCH,
    payload,
  };
}

export default {
  jobLoadDataSuccess,
  jobFailure,
  getJobList,
};
