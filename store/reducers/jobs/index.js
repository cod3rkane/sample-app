import types from './actionTypes';

const initialState = {
  list: [],
};
export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.JOB_LIST:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default jobsReducer;
