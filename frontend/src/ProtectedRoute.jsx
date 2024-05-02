import React from 'react';
import { Navigate } from 'react-router-dom'; // Using Navigate for consistency

const ProtectedRoute = ({ isConnected, component: Component }) => {
  if (!isConnected) {
    return <Navigate to="/login" replace />; // Using Navigate for consistency, adding replace prop
  }

  return <Component />;
};

export default ProtectedRoute;
