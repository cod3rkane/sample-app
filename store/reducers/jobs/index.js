import types from './actionTypes';

const initialState = {
  list: [],
  error: null,
};
export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.JOB_LOAD_DATA_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
      };

    case types.JOB_LOAD_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default jobsReducer;
