import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <div className='flex-1 max-w-screen-xl px-4 md:px-8 mx-auto py-4 md:py-8'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;