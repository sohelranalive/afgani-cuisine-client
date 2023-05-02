import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext)

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
                                    user.email ? <div className='hstack gap-3 justify-content-end align-items-center'>
                                        <img src={logo} alt="" className='w-25' />
                                        <div className="vr"></div>
                                        <Link className='my-button' to='/login'>Logout</Link>
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