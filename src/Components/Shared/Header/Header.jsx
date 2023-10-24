// import React from 'react';
import './Header.css'
import headerLogo from "../../../assets/sitelogo/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-600 h-20 montserrat-font'>
            <div className='w-10/12 mx-auto h-full flex justify-between items-center bg-transparent'>
                <div>
                    <img className='w-44 hover:cursor-pointer' src={headerLogo} alt="" />
                </div>

                <div className='space-x-8 text-white font-semibold'>
                    <Link to="/">Home</Link>
                    <Link to="/instructor">Instructor</Link>
                    <Link to="/classes">Classes</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                <div className='space-x-8 text-white font-semibold'>
                    <Link to="/login">Login</Link>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default Header;