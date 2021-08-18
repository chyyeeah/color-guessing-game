import React from 'react';
import { Redirect } from 'react-router-dom';

export default (props) => {
  if (!props.isLoggedIn) return <Redirect to='/' />;

  return <props.Component {...props}/>;
};