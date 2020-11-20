import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const isAuthenticated = false;

  return isAuthenticated ? <props.component /> : <Redirect to={{ pathname: '/login' }} />;
};

export default ProtectedRoute;
