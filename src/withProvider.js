import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

/**
 * Utility Higher Order Component factory. Returns HOC which takes another
 * Component and wraps it with given Provider.
 */
const withProvider = ({
  store,
  persistedStore,
  Provider,
}) => WrappedComponent => props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <WrappedComponent {...props} />
    </PersistGate>
  </Provider>
);

export default withProvider;
