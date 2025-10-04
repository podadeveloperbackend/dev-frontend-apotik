import React from 'react'
import { useAuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminRoutes = () => {
    const { isLoading, user } = useAuthContext();
    
      if (isLoading) {
            return <div>Loading...</div>; 
        }
    if (user?.role !== "admin") {
        <Navigate to={"/"} />
    } else {
        return <Navigate to={"/admin"} />
    }
}

export default AdminRoutes