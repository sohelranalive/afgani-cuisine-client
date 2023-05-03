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

    const [isShown, setIsShown] = useState(false);

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
        <div className='bg-custom-color'>
            <Container className='sticky-top'>
                <Navbar collapseOnSelect expand="lg" className='bg-white rounded'>
                    <Container>
                        <Navbar.Brand href="#home">
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


                                    // : <Link className='btn-custom' to='/login'><button className='btn btn-danger'>Login</button></Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;