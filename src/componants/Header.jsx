
import logo from "../assets/logo.png"

import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center space-y-1 mb-3 flex-col justify-center'>
                <img className='pt-6 h-16' src={logo} alt="" />
                <p className='text-base text-gray-500'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            
            
        </div>
    );
};

export default Header;