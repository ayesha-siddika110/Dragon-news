/* eslint-disable react/prop-types */
import { Box, Rating } from '@mui/material';
import React from 'react';

import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Detail = ({ data }) => {

    const { rating, title, total_view,  image_url, details } = data
  
    const { number } = rating
    const [value, setValue] = React.useState(number);

    return (
        <div>
        <div className='mb-6 space-y-3 pb-4 border rounded-xl'>

            <div className=' space-y-3 '>


                <div className='
            '>

                    <img className='w-full object-cover  rounded-xl' src={image_url} alt="" />
                </div>
                <h1 className='font-semibold text-2xl px-6'>{title}</h1>
                <div className='text-justify text-gray-500 px-6'>
                    {details}

                </div>
                <hr />
                {/* <p className="text-gray-700">{displayText}</p> */}

                <div className='flex justify-between px-6'>
                    {/* Ratings */}

                    <Box className={`flex items-center gap-2`} sx={{ '& > legend': { mt: 2 } }}>
                        <Rating name="read-only" value={value} readOnly /><p></p>

                    </Box>

                    <div className='flex items-center text-gray-500 text-lg font-semibold'>
                        <FaEye className='mr-2 ' />
                        <p>{total_view}</p>

                    </div>
                </div>



            </div>
            



        </div>
        <Link to="/" className='bg-[#D72050] w-[250px] justify-center text-white font-semibold text-md py-2 px-3 flex items-center gap-2'><FaArrowLeftLong />All news in this category</Link>
        </div>

        
    );
};

export default Detail;