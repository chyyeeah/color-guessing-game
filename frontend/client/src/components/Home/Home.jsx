import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const myStorage = window.localStorage;

export default ({ isLoggedIn, setIsLoggedIn, setUsername }) => {
  const [ username, setFormUsername ] = useState('');
  const [ password, setFormPassword ] = useState('');

  if (isLoggedIn) return <Redirect to='/game' />;

  const loginHandler = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password
    };

    if (username.length > 7 && password.length > 7) {
      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then((data) => {
        myStorage.isLoggedIn = true;
        myStorage.username = username;
        setIsLoggedIn(true);
        setUsername(username);
      })
      .catch((error) => {
        console.error('Error!', error);
      });
    }
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
          type="text"
          onChange={(e) => {setFormUsername(e.target.value)}}></input>
        </label>
        <label>
          Password:
          <input
          type="password"
          onChange={(e) => {setFormPassword(e.target.value)}} ></input>
        </label>
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  );
};