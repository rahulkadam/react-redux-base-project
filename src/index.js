import React from 'react';
import ReactDOM from 'react-dom';
import withReduxFeatures from './withReduxFeatures';
import {BaseRoute} from './config';
import classes from './index.css';
import * as serviceWorker from './serviceWorker';

/**
 *
 * @returns {*}
 * @constructor
 */
const Root = () => (
  <div className={classes.body}>
    <BaseRoute />
  </div>
);

/** Wrap App component with store providers */
const WrappedApp = withReduxFeatures(Root);

/**
 * Render DOm, starting Application from here, by rendeing into root element ID
 */
ReactDOM.render(<WrappedApp />, document.getElementById('root'));

/**
 * If you want your app to work offline and load faster,
 * you can change unregister() to register() below.
 * Note this comes with some pitfalls.
 * @see https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
