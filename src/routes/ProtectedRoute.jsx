import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { token } = useAuthContext();
    return token ? <Outlet/> : <Navigate to="/login"/> 
}

export default ProtectedRoute