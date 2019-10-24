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

    case types.JOB_FILTER_SEARCH: {
      let list = [];
      let pastList = state.list;
      if (action.payload.trim() === '' && state.pastList) {
        list = state.pastList;
      } else {
        list = state.list.filter((e) => e.title.startsWith(action.payload));

        if (list.length === 0 && state.pastList) {
          list = state.pastList.filter((e) => e.title.startsWith(action.payload));
        } else {
          list = pastList.filter((e) => e.title.startsWith(action.payload));
        }
      }

      if (state.pastList) {
        pastList = state.pastList;
      }

      return {
        ...state,
        list,
        pastList,
      };
    }


    default:
      return {
        ...state,
      };
  }
};

export default jobsReducer;
