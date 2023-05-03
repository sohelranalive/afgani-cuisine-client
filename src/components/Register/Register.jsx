import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {

    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { createUser, userProfileUpdate, userLogOut } = useContext(AuthContext)

    const handleRegistration = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                userProfileUpdate(name, photo)
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                const createdUser = result.user;
                console.log(createdUser);
                userLogOut()
                navigate('/login')

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className='bg-custom-color-light'>
                <form onSubmit={handleRegistration} className='w-25 mx-auto text-white fw-bold pt-5 pb-5'>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" name='name' required className="form-control" id="inputName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhoto" className="form-label">Photo URL</label>
                        <input type="text" name='photo' required className="form-control" id="inputPhoto" />
                    </div>
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
                        <div id="emailHelp" className="form-text text-white">{error}</div>
                    </div>
                    <button type="submit" className="btn btn-light">Register</button>
                    <div className="mt-3 mb-3">
                        <div className="form-text text-white">Already have an account? Please <Link to='/login' className='text-white fst-italic'> Login</Link> </div>
                    </div>
                    <div className="mt-2 mb-3">
                        <button className='s-button'>Continue With <FaGoogle /></button>
                    </div><div className="mt-2 mb-3">
                        <button className='s-button'>Continue With <FaGithub /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;