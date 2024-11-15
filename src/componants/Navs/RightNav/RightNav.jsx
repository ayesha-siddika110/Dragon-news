/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';
import fb from "../../../assets/fb.png";
import twitter from "../../../assets/twitter.png"
import insta from "../../../assets/instagram.png"
import swim from "../../../assets/swimming.png"
import classes from "../../../assets/class.png"
import play from "../../../assets/playground.png"
import { AuthContext } from '../../../Provider/AuthProvider';

const RightNav = () => {
    const {signInwithgoogle, signInwithgithub} = useContext(AuthContext)
    const handleGoogle =()=>{
        signInwithgoogle()
        .then(res=>{
            console.log('hello');
            
        })
        .catch(err=>{
            console.log(err);
            
        })

    }


    const handleGithub=()=>{
        signInwithgithub()
        .then(()=>{

        })
        .catch(err=>{
            console.log(err.message);
            
        })
        
    }
    return (
        <div className='space-y-4'>

            {/* login */}
            <div className='space-y-4'>

                <h1 className='font-semibold text-xl' >Login With</h1>
                <div className='space-y-3'>
                    {/* google */}
                    <div onClick={handleGoogle} className='flex cursor-pointer items-center space-x-2 justify-center border-2 py-2 rounded-lg text-blue-500 border-blue-400'>
                        <FaGoogle></FaGoogle>
                        <p>Login with Google</p>
                    </div>
                    {/* github */}
                    <div onClick={handleGithub} className='flex items-center space-x-2 cursor-pointer justify-center border-2 py-2 rounded-lg text-black border-black'>
                        <FaGithub></FaGithub>
                        <p>Login with github</p>
                    </div>

                </div>
            </div>

            {/* follow */}

            <div className='space-y-4'>
                <h1 className='font-semibold text-xl mt-8'>Find Us on</h1>
                <div>
                    <div className='flex items-center space-x-2 justify-center py-3  border'>
                        <img src={fb} alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className='flex items-center space-x-2 justify-center py-3  border'>
                        <img src={twitter} alt="" />
                        <p>Twitter</p>
                    </div>
                    <div className='flex items-center space-x-2 justify-center py-3  border'>
                        <img src={insta} alt="" />
                        <p>Instagram</p>
                    </div>


                </div>


            </div>

            {/* Q zone */}

            <div className='bg-red-50 space-y-4'>
                <h1 className='text-xl font-semibold pt-2 pl-1'>Q-Zone</h1>
                <img src={swim} alt="" />
                <img src={classes} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default RightNav;