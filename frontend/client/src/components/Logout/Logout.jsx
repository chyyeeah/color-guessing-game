import React from 'react';
import { Redirect } from 'react-router-dom';

const myStorage = window.localStorage;

export default ({ setIsLoggedIn }) => {
  delete myStorage.isLoggedIn;
  delete myStorage.username;
  setIsLoggedIn(false);
  return <Redirect to='/' />;
};