import React, {useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {FormControl, Button} from 'react-bootstrap';
import {GetLoggedInUser, LogActions} from '../../features/Authentication';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './App.module.css';

const App = () => {
  const [inputText, setInputText] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  const queryParam = query.get('name');

  function changeAccountNumber(value) {
    setInputText(value);
  }
  const loggedUser = GetLoggedInUser();

  const logUser = LogActions();

  const history = useHistory();

  function submitQuickPay() {
    history.replace(`/billview?accountNumber=${inputText}`);
  }

  return (
    <div className={classes.container}>
      <div>
        Welcome to APG {loggedUser.username}
        <div className="mb-3">
          <FormControl
            value={inputText}
            placeholder="Account Number"
            aria-label="accountNumber"
            aria-describedby="basic-addon1"
            onChange={event => changeAccountNumber(event.target.value)}
          />
        </div>
        <Button variant="primary" onClick={() => submitQuickPay({inputText})}>
          View Bill
        </Button>
      </div>
    </div>
  );
};

export default App;

/**

function loginUser() {
  logUser({
    username: inputText,
    firstname: 'Rahul',
    lastname: 'kadam',
    userid: '1234',
    isAuthenticated: true,
  });
}

function logoutUser() {
  logUser({
    username: '',
    firstname: '',
    lastname: '',
    userid: '',
    isAuthenticated: false,
  });
}
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
  <Button variant="primary" onClick={() => loginUser()}>
    Login
  </Button>
)}
{loggedUser.username && (
  <Button variant="primary" onClick={() => logoutUser()}>
    Logout
  </Button>
)} */
