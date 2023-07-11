import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const GuardRoute = () => {
    const { token } = useAuthContext();
    return token ? <Navigate to="/"/> : <Outlet/> 
}

export default GuardRoute