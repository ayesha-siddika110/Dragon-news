import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Loginpage from './Loginpage';

const Login = () => {
    return (
        <div className=' bg-base-200 m-auto'>
            <div className='flex w-[90%] m-auto justify-between items-center py-6'>
            <div className='w-[12%]'></div>
            <div className='space-x-4'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center space-x-3'>
                <FaUserAstronaut className='border-2 border-black rounded-full w-8 h-8 p-1 text-3xl'/>
                <NavLink to="/login" className={`bg-gray-700 text-white px-8 py-2`}>Login</NavLink>
            </div>
            
        </div>
        <Loginpage></Loginpage>
            
        </div>
    );
};

export default Login;