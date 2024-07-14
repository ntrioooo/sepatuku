import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import { thunk } from 'redux-thunk';
import authReducer from './auth/reducer';
import merkReducer from './merks/reducer';

const composerEnchancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  merks: merkReducer,
});

const store = createStore(
  rootReducers,
  composerEnchancer(applyMiddleware(thunk))
);

export default store;
