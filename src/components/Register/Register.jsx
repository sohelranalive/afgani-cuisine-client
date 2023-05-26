import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {

    const { createUser, userProfileUpdate, userLogOut, googleLogIn, githubLogIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegistration = (event) => {
        event.preventDefault()
        setError('')

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be 6 character!')
            return;
        }

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
                //console.log(createdUser);
                userLogOut()
                navigate('/login')
            })
            .catch(error => {
                const errorCode = error.code;
                // console.log(errorCode);
                if (errorCode == 'auth/email-already-in-use') {
                    setError('Enter a new email, this email already in use')
                }
            })
    }

    const handleLogInWithGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogInWitGithub = () => {
        githubLogIn()
            .then(result => {
                console.log(result);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='mt-5 mb-5'>
            <form onSubmit={handleRegistration} className='w-25 mx-auto text-white fw-bold'>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" name='name' required className="form-control" id="inputName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPhoto" className="form-label">Photo URL</label>
                    <input type="url" name='photo' className="form-control" id="inputPhoto" />
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
            </form>
            <div className='text-center pb-5'>
                <button onClick={handleLogInWithGoogle} className='s-button mb-2'>Continue With Google <FaGoogle /></button>
                <br />
                <button onClick={handleLogInWitGithub} className='s-button'>Continue With Github <FaGithub /></button>
            </div>
        </div>
    );
};

export default Register;