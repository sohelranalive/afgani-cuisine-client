import React, { useContext, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import profilePhoto from '../../assets/defaultProfilePhoto.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Header = () => {

    const { user, userLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                console.log('User Logged Out Successfully');
            })
            .then(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container className='bg-white rounded mt-4 py-2'>
                    <Navbar.Brand>
                        <img src={logo} alt="" className='w-50' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user ? <div className='hstack gap-3 justify-content-end align-items-center'>
                                    <div className='profile-image-div'>
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={user?.displayName}
                                            src={user?.photoURL || profilePhoto} alt="" className='w-100 h-100 rounded-circle'
                                        />
                                        {
                                            <Tooltip id="my-tooltip" />
                                        }
                                    </div>
                                    <div className="vr"></div>
                                    <button onClick={handleLogOut} className='my-button'>Logout</button>
                                </div>
                                    : <div className='hstack gap-3 justify-content-end align-items-center'>
                                        <Link className='my-button' to='/login'>Login</Link>
                                        <div className="vr"></div>
                                        <Link className='my-button' to='/register'>Register</Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;