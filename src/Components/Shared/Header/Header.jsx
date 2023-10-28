// import React from 'react';
import './Header.css'
import headerLogo from "../../../assets/sitelogo/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useRole from '../../hooks/useRole';
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [mobileMenu, setMobileMenu] = useState(false);

    const [ role ] = useRole();

    const handleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='bg-blue-600 h-20 montserrat-font'>
            <div className='w-10/12 mx-auto h-full flex justify-between items-center bg-transparent'>
                <div>
                    <img className='w-44 hover:cursor-pointer' src={headerLogo} alt="" />
                </div>

                {/* <div className='space-x-8 text-white font-semibold'>
                    <Link to="/">Home</Link>
                    <Link to="/instructor">Instructor</Link>
                    <Link to="/classes">Classes</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div> */}

                <div  className="hidden lg:flex lg:items-center space-x-3 uppercase header-link text-white">
                    <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold px-4' : 'px-4' } to='/'>
                        Home
                    </NavLink>

                    <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold px-4' : 'px-4' } to='/instructor'>
                        Instructor
                    </NavLink>

                    <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold px-4' : 'px-4' } to='/courses'>
                        Classes
                    </NavLink>

                    { user && 
                        role == "student" ?
                            <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold px-4' : 'px-4' } to='/dashboard/myClass'>
                                    Dashboard
                            </NavLink> 
                            
                        : user && role == "Admin" ?

                            <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold px-4' : 'px-4' } to='/dashboard/manageUser'>
                                    Dashboard
                            </NavLink> 
                        : user &&
                            <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold px-4' : 'px-4' } to='/dashboard/insClass'>
                                Dashboard
                            </NavLink>
                    }
                </div>

                <div className='space-x-8 text-white font-semibold'>
                    {
                        user ? <>
                            <Link onClick={handleLogOut} className="bg-lime-400 px-5 py-2 text-black font-semibold rounded-full" to="/">Logout</Link>
                        </> : <>
                            <Link className="bg-lime-400 px-5 py-2 text-black font-semibold rounded-full" to="/login">Login</Link>
                        </>
                    }

                    {
                        user && (
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img src={user && user.photoURL ? user.photoURL : <FaUserCircle /> } className="w-10 h-10 rounded-full" alt="user_img" />
                            </div>
                        )
                    }
                </div>


                {/* mobile menu */}
                <div className="lg:hidden">
                    <div className="flex items-center space-x-4">
                        <div>
                            {
                                user && (
                                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                        <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="user_img" />
                                    </div>
                                )
                            }
                        </div>

                        <button aria-label='Open Menu' title='Open Menu' onClick={() => setMobileMenu(true)}>
                            <HiMenu onClick={handleMenu} className="text-2xl"></HiMenu>
                        </button>
                    </div>

                                

                    {
                        mobileMenu && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className='bg-gray-800 p-5 border shadow-sm'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <img className="w-40" src={headerLogo} alt="" />
                                        </div>

                                        <div className='text-lg flex items-center space-x-4'>
                                            <div className="mr-5">          
                                                {
                                                    user && (
                                                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                                            <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="user_img" />
                                                        </div>
                                                    )
                                                }
                                            </div>

                                            <div>
                                                <button aria-label='Close Menu' title='Close Menu' onClick={() => setMobileMenu(false)}>
                                                    <HiX onClick={handleMenu} className="text-2xl"></HiX>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-5 mt-5">
                                        <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold w-20 text-center' : 'w-20' } to='/'>
                                            Home
                                        </NavLink>

                                        <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold w-20 text-center' : 'w-20' } to='/instructor'>
                                            Instructor
                                        </NavLink>

                                        <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold w-20 text-center' : 'w-20' } to='/classes'>
                                            Classes
                                        </NavLink>

                                        <NavLink className={({isActive }) => isActive ? 'bg-lime-400 text-black py-1 font-semibold w-20 text-center' : 'w-20' } to='/dashboard'>
                                            Dashboard
                                        </NavLink>

                                        {
                                            user ? <>
                                                <Link onClick={handleLogOut} className="bg-lime-400 w-20 text-center py-2 text-black font-semibold rounded-full" to="/">Logout</Link>
                                             </> : <>
                                                <Link className="bg-lime-400 w-20 text-center py-2 text-black font-semibold rounded-full" to="/login">Login</Link>
                                            </>
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;