import React from 'react';
import logo from '../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className='max-h-screen m-auto flex justify-center items-center'>
            <p>L<span> <img className='h-20 w-20 animate-spin' src={logo} alt="" /></span>ading</p>
        </div>
    );
};

export default LoadingSpinner;