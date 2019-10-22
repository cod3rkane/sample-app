import types from './actionTypes';

export function jobList(payload) {
  return {
    type: types.JOB_LIST,
    payload,
  };
}

export default {
  jobList,
};
