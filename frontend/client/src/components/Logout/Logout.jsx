import React from 'react';
import { Redirect } from 'react-router-dom';

const myStorage = window.localStorage;

export default ({ setIsLoggedIn }) => {
  setIsLoggedIn(false);
  delete myStorage.isLoggedIn;
  delete myStorage.username;

  return <Redirect to='/' />;
};