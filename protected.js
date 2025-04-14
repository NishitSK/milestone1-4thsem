import React from 'react';
import { Navigate } from 'react-router-dom';
import { fakeAuth } from '../fakeAuth';

const ProtectedRoute = ({ children }) => {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

