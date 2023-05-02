import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const user = 'sohel'

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

                                {/* <Link className='px-4'>Home</Link>
                                <Link className='px-4'>About</Link>
                                <Link className='px-4'>Contact</Link> */}
                            </Nav>
                            <Nav>
                                {user
                                    ? <div className='hstack gap-3 justify-content-end align-items-center'>
                                        <img src={logo} alt="" className='w-25' />
                                        <div className="vr"></div>
                                        <button className='btn btn-danger ms-2'>Logout</button>
                                    </div>
                                    : <button className='btn btn-danger'>Login</button>
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