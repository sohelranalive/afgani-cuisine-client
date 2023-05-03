import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { userLogIn } = useContext(AuthContext)

    const handleLogIn = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-custom-color-light'>
            <form onSubmit={handleLogIn} className='w-25 mx-auto text-white fw-bold pt-5 pb-5'>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" name='email' required className="form-control" id="inputEmail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type={showPassword ? "text" : "password"} name='password' required className="form-control" id="inputPassword" />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={() => setShowPassword(!showPassword)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>
                <div className="mt-3 mb-3">
                    <div className="form-text text-white">{error}</div>
                </div>
                <button type="submit" className="btn btn-light">Login</button>
                <div className="mt-3 mb-3">
                    <div className="form-text text-white">New to this website? Please <Link to='/register' className='text-white fst-italic'> Register</Link> </div>
                </div>
                <div className="mt-5 mb-3">
                    <button className='s-button'>Login With <FaGoogle /></button>
                </div><div className="mt-2 mb-3">
                    <button className='s-button'>Login With <FaGithub /></button>
                </div>
            </form>
        </div>
    );
};

export default Login;