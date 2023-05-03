import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorPhoto from '../../assets/error.png'

const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div className='error-page'>
            <img src={errorPhoto} alt="" />
            <h1>{status}</h1>
            <h1>Opps !!!</h1>
            <h1>{error.message}</h1>
        </div>
    );
};

export default ErrorPage;