import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    console.log(location)

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (<div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;