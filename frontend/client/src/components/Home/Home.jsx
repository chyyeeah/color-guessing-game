import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import URL from '../../utils/URL';

const myStorage = window.localStorage;

export default ({ isLoggedIn, setIsLoggedIn, setUsername }) => {
  const [username, setFormUsername] = useState('');
  const [password, setFormPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  if (isLoggedIn) return <Redirect to='/game' />;

  const loginHandler = (e) => {
    e.preventDefault();

    setErrorLogin('');
    setErrorUsername('');
    setErrorPassword('');

    const payload = {
      username,
      password
    };

    if (username.length >= 5 && password.length >= 5) {
      fetch(`http://${URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then((data) => {
          if (data.status === 200) {
            myStorage.isLoggedIn = true;
            myStorage.username = username;
            setUsername(username);
            setIsLoggedIn(true);
          } else {
            setErrorLogin('Invalid credentials!');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (username.length < 5) setErrorUsername('Username too short!');
    if (password.length < 5) setErrorPassword('Password too short!');
  };

  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        {
          errorLogin.length > 0
          ? <div className="error">{errorLogin}</div>
          : null
        }
        {
          errorUsername.length > 0
            ? <div className="error">{errorUsername}</div>
            : null
        }
        {
          errorPassword.length > 0
            ? <div className="error">{errorPassword}</div>
            : null
        }
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => { setFormUsername(e.target.value) }}></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => { setFormPassword(e.target.value) }} ></input>
        </label>
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  );
};