import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuardRoute = () => {
    const token = sessionStorage.getItem("token");
    return token ? <Navigate to="/"/> : <Outlet/> 
}

export default GuardRoute