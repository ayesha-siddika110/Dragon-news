import React from 'react';
import err from '../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <img className='h-52' src={err} alt="" />
            
        </div>
    );
};

export default ErrorPage;