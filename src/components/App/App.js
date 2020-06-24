import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {FormControl, Button} from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom';
import {GetLoggedInUser, LogActions} from '../../features/Authentication';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './App.module.css';
import {LOGGED_IN_USER} from '../../features/Authentication/actionTypes';

const App = () => {
  const [inputText, setInputText] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const dispatch = useDispatch();

  const query = useQuery();

  const queryParam = query.get('name');

  function changeAccountNumber(value) {
    setInputText(value);
  }
  const loggedUser = GetLoggedInUser();

  // const {logUser} = LogActions();
  // const history = useHistory();
  // function submitQuickPay() {
  /** LoggedInUser({username: inputText, firstname: inputText}); history.replace(`/${inputText}`); */
  // }

  return (
    <div className={classes.container}>
      <div>
        <h1>APG QuickPay {queryParam}</h1>
      </div>
      <div className="mb-3">
        <FormControl
          value={inputText}
          placeholder="Account Number"
          aria-label="accountNumber"
          aria-describedby="basic-addon1"
          onChange={event => changeAccountNumber(event.target.value)}
        />
      </div>
      {!loggedUser.username > 0 && (
        <Button
          variant="primary"
          onClick={() =>
            dispatch({
              type: LOGGED_IN_USER,
              value: {
                username: 'rahul581',
                firstname: 'Rahul',
                lastname: 'kadam',
                userid: '1234',
                isauthenticated: true,
              },
            })
          }>
          Login
        </Button>
      )}
      {loggedUser.username && (<Button
          variant="primary"
          onClick={() =>
            dispatch({
              type: LOGGED_IN_USER,
              value: {
                username: '',
                firstname: '',
                lastname: '',
                userid: '',
                isauthenticated: false,
              },
            })
          }>
          Logout
        </Button>
      )}
    </div>
  );
};

export default App;
