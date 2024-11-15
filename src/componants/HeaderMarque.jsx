import React from 'react';
import Marquee from 'react-fast-marquee';

const HeaderMarque = () => {
    return (
        <div className='flex bg-red-50 py-4 px-4'>
                <p className='bg-[#D72050] font-semibold text-white py-1 px-2'>Latest</p>
                <Marquee pauseOnHover={true} speed={40} className='cursor-pointer ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at dignissimos magnam corporis, illum molestias repudiandae optio repellat voluptates eos.
                </Marquee>
            </div>
    );
};

export default HeaderMarque;