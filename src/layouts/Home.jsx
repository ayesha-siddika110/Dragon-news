
import Header from '../componants/Header';
import HeaderMarque from '../componants/HeaderMarque';
import Navbar from '../componants/Navbar';
import LeftNav from '../componants/Navs/LeftNav/LeftNav';
import RightNav from '../componants/Navs/RightNav/RightNav';

import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-poppins w-[90%] m-auto'>
            <header>
            <Header></Header>
            <HeaderMarque></HeaderMarque>

            </header>
            <nav className=' m-auto'>
                <Navbar></Navbar>
            </nav>
            <section className='flex gap-6'>
                <div className='
                w-[20%]'>
                    <LeftNav></LeftNav>
                </div>
                <div className=' w-[60%]'>
                    <Outlet></Outlet>
                </div>
                <div className=' w-[20%]'>
                    <RightNav></RightNav>
                </div>
            </section>

            
        </div>
    );
};

export default Home;