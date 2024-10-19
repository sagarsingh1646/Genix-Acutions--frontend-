import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem('authToken'); 
    const isAuthenticated = !!token; 

    return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
