import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { jobsReducer } from './reducers';
import rootSaga from './saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');

    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const makeStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({ jobs: jobsReducer });
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

function configureStore(initialState, { isServer, req }) {
  let store = {};

  if (isServer) {
    let state = initialState;
    if (req) {
      state = req.store;
    }
    store = makeStore(state);
  } else {
    store = makeStore(initialState);
  }

  return store;
}

export default configureStore;
