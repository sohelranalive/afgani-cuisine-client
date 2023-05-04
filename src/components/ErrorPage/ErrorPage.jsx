import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorPhoto from '../../assets/error.png'

const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div className='error-page'>
            <img src={errorPhoto} alt="" />
            <h1>{status}</h1>
            <h1>Opps !!!</h1>
            <h1>{error?.message}</h1>
            <br />
            <Link to='/'>Back to homepage</Link>
        </div>
    );
};

export default ErrorPage;