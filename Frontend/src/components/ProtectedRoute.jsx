import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
        // Redirect to login with the current location as the return path
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    try {
        // Verify that the user data is valid JSON
        JSON.parse(user);
        return children;
    } catch (error) {
        // If user data is corrupted, clear it and redirect to login
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default ProtectedRoute; 