import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {

    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <div className='bg-custom-color'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;