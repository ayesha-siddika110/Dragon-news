/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageCard = ({ page }) => {
    const { _id, rating, title, total_view, author, image_url, details } = page
    const { name, published_date, img, } = author
    const { number } = rating


    const [value, setValue] = React.useState(number);



    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle the expanded state
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };


    // Determine the text to display
    const displayText = isExpanded ? details : details.slice(0, 200) + '...';

    return (
        <div className='mb-6 space-y-3 pb-4 border rounded-xl'>
            <div className='flex p-6 justify-between bg-red-50'>
                <div className='flex'>

                    <img className='w-10 h-10 rounded-full' src={img} alt="" />
                    <div className='pl-3'>
                        <p className='font-semibold text-lg'>{name}</p>
                        <p className='text-gray-400 text-sm'>{published_date}</p>

                    </div>
                </div>
                <div className='flex items-center space-x-2 text-2xl'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className='px-6 space-y-3 '>

                <h1 className='font-semibold text-2xl '>{title}</h1>
                <div className='
            '>

                    <img className='w-full h-[350px] object-cover  rounded-xl' src={image_url} alt="" />
                </div>
                <div className=''>
                    <p>
                        {displayText}
                    </p>
                    <Link to={`/pagesDetails/${_id}`}
                        onClick={toggleReadMore}
                        className="text-blue-500 mt-2 hover:text-blue-700 focus:outline-none font-medium"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </Link>
                </div>
                <hr />
                {/* <p className="text-gray-700">{displayText}</p> */}

                <div className='flex justify-between'>
                    {/* Ratings */}

                <Box className={`flex items-center gap-2`} sx={{ '& > legend': { mt: 2 } }}>
                    <Rating name="read-only" value={value} readOnly /><p>{number}</p>

                </Box>

                <div className='flex items-center text-gray-500 text-lg font-semibold'>
                    <FaEye className='mr-2 '/>
                    <p>{total_view}</p>

                </div>
                </div>
                

                
            </div>



        </div>
    );
};

export default PageCard;