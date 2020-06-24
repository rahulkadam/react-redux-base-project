import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {GetLoggedInUser} from './features/Authentication';
/** import Container from 'react-bootstrap/Container'; */
import withReduxFeatures from './withReduxFeatures';
import App from './components/App';
import Counter from './components/Counter';
import Random from './components/Random';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/ErrorPage';
import classes from './index.css';
import * as serviceWorker from './serviceWorker';

/**
 *
 * @returns {*}
 * @constructor
 */
const Root = () => {
  const loggedUser = GetLoggedInUser();

  return (
    <Router>
      <div className={classes.body}>
        <div>{loggedUser.username}</div>
        <Header />
        <Switch>
          <Route path="/counter" component={Counter} />
          <PrivateRoute path="/random" abc="rahul" cde="sdasdas">
            <Random />
          </PrivateRoute>
          <Route exact path="/" component={App} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

/**
 * https://reacttraining.com/react-router/web/example/auth-workflow
 * @param component
 * @returns {*}
 * @constructor
 */
function PrivateRoute(component) {
  const loggedUser = GetLoggedInUser();
  const {children, ...rest} = component;
  return (
    <Route
      {...rest}
      render={({location}) =>
        loggedUser.username ? (
          <children {...location} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {from: location.location},
            }}
          />
        )
      }
    />
  );
}

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
