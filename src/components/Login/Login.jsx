import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('')

    return (
        <div className='bg-custom-color-light'>
            <form className='w-25 mx-auto text-white fw-bold pt-5 pb-5'>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input type="email" name='email' required className="form-control" id="inputEmail" />
                </div>
                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" name='password' required className="form-control" id="inputPassword" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Show Password</label>
                </div>
                <div className="mt-3 mb-3">
                    <div className="form-text text-white">{error}</div>
                </div>
                <button type="submit" className="btn btn-light">Login</button>
                <div className="mt-3 mb-3">
                    <div className="form-text text-white">New to this website? Please <Link to='/register' className='text-white fst-italic'> Register</Link> </div>
                </div>
            </form>
        </div>
    );
};

export default Login;