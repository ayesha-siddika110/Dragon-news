import React from 'react';
import logo from "../assets/logo.png"
import Marquee from "react-fast-marquee";
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center space-y-1 mb-3 flex-col justify-center'>
                <img className='pt-6 h-16' src={logo} alt="" />
                <p className='text-base text-gray-500'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='flex bg-red-50 py-4 px-4'>
                <p className='bg-[#D72050] font-semibold text-white py-1 px-2'>Latest</p>
                <Marquee pauseOnHover={true} speed={40} className='cursor-pointer ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at dignissimos magnam corporis, illum molestias repudiandae optio repellat voluptates eos.
                </Marquee>
            </div>
            
        </div>
    );
};

export default Header;