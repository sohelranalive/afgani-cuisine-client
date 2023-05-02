import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='bg-custom-color-light'>
                <form className='w-25 mx-auto text-white fw-bold pt-5 pb-5'>
                    <div className="mb-3">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" name='name' required className="form-control" id="inputName" />
                    </div>
                    <div className="mb-3">
                        <label for="inputPhoto" className="form-label">Photo URL</label>
                        <input type="text" name='photo' required className="form-control" id="inputPhoto" />
                    </div>
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
                        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-light">Register</button>
                    <div className="mt-3 mb-3">
                        <div className="form-text text-white">Already have an account? Please <Link to='/login' className='text-white fst-italic'> Login</Link> </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;