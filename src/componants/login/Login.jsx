
import { FaUserAstronaut } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import Loginpage from './Register/Registerpage';
import Header from '../Header';
import Navbar from '../Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import LoginUser from './LoginUser/LoginUser';

const Login = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className=' bg-base-200 m-auto'>
                <Header></Header>
                <div className='w-[90%] m-auto'>

                <Navbar></Navbar>
                </div>
               <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Login;