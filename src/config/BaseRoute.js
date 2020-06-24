import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Counter from '../components/Counter';
import Random from '../components/Random';
import App from '../components/App';
import BillView from '../components/Billing/UnAuthenticated/BillView';
import Login from '../components/Login';
import PageNotFound from '../components/ErrorPage';
import {PrivateRoute} from './PrivateRoute';
import {Header} from '../components/Header';

const BaseRoute = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/billview" component={BillView} />
        <Route path='/login' component={Login} />
        <PrivateRoute path="/random" abc="rahul" cde="sdasdas">
          <Random />
        </PrivateRoute>
        <Route exact path="/" component={App} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  </div>
);

export {BaseRoute};
