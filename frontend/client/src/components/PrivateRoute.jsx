import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({ Component, isLoggedIn, username }) => {
  if (!isLoggedIn) return <Redirect to='/' />;

  return <Component username={username}/>;
};