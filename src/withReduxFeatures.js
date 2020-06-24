import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {CounterReducer} from './features/counter';
import {RandomReducer} from './features/random';
import {AuthenticationReducer} from './features/Authentication';
import {BillViewReducer} from './features/BillView';
import withProvider from './withProvider';

const persistenceConfigs = {
  key: 'apg',
  storage,
  whitelist: ['user'],
};

/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
  count: CounterReducer,
  random: RandomReducer,
  user: AuthenticationReducer,
  billview: BillViewReducer,
});

const persistedReducer = persistReducer(persistenceConfigs, rootReducer);

/**
 * Initialize Redux Dev Tools,
 * if they are installed in browser.
 */
/* eslint-disable no-underscore-dangle */
/** Use Redux compose, if browser doesn't have Redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

/** Create Redux store with root reducer and middleware included */
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistedStore = persistStore(store);

/**
 * Create HOC, which wraps given Component with Redux Provider
 */
export default withProvider({store, persistedStore, Provider});
