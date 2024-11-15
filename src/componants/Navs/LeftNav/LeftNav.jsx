import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {

  


    const [categories, setcategories] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data => setcategories(data.data.news_category)
        )

    },[])
    // console.log(categories);
    
    return (
        <div className='flex flex-col'>
            <h1 className='font-semibold text-xl'>All category</h1>
            <div className='flex flex-col '>

            {
                categories.map(item=> <NavLink to={`/category/${item.category_id}`} className={`py-3 border-b hover:bg-gray-100 text-gray-500 rounded-lg hover:text-black text-center hover:font-semibold`}>{item.category_name}</NavLink>)
            }
            </div>
            
        </div>
    );
};

export default LeftNav;