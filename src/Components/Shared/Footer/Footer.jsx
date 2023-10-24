// import React from 'react';
import './Footer.css'
import footerLogo from "../../../assets/footer/dark-logo.jpg"
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#F9F9FB] montserrat-font'>
            <div className='w-10/12 mx-auto pt-16 pb-10'>
                <div className='flex gap-4'>
                    <div className='space-y-4 w-4/12'>
                        <img className='w-40 hover:cursor-pointer' src={footerLogo} alt="" />
                        
                        <p className='font-semibold text-blue-600'>Open time</p>

                        <div className='space-y-1'>
                            <div className='flex text-sm'>
                                <p className='text-gray-500 w-40'>Monday - Friday:</p>
                                <span className='text-gray-500'>09:00 - 20:00</span>
                            </div>

                            <div className='flex text-sm'>
                                <p className='text-gray-500 w-40'>Saturday & Sunday:</p>
                                <span className='text-gray-500'>10:30 - 22:00</span>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='cursor-pointer border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300'>
                                <FaFacebookF className="text-lg"></FaFacebookF>
                            </div>

                            <div className='cursor-pointer border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition duration-300'>
                                <FaYoutube className="text-lg"></FaYoutube>
                            </div>

                            <div className='cursor-pointer border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#1C9CEA] hover:text-white hover:border-[#1C9CEA] transition duration-300'>
                                <FaTwitter className="text-lg"></FaTwitter>
                            </div>

                            <div className='cursor-pointer border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#F33692] hover:text-white hover:border-[#F33692] transition duration-300'>
                                <FaInstagram className="text-lg"></FaInstagram>
                            </div>

                            <div className='cursor-pointer border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#00AAE8] hover:text-white hover:border-[#00AAE8] transition duration-300'>
                                <FaSkype className="text-lg"></FaSkype>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3 w-2/12'>
                        <div className='font-bold text-lg'>
                            <h4>About</h4>
                        </div>

                        <div className='space-y-2 text-sm text-gray-700'>
                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">About Us</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Courses</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Instructor</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Event</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Become A Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3 w-2/12'>
                        <div className='font-bold text-lg'>
                            <h4>Links</h4>
                        </div>

                        <div className='space-y-2 text-sm text-gray-700'>
                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">News & Blogs</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Library</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Gallery</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Partners</span>
                            </div>

                            <div className="hover:text-blue-600 cursor-pointer flex items-center space-x-2">
                                <MdOutlineArrowForwardIos className="text-blue-600"></MdOutlineArrowForwardIos>
                                <span className="duration-200 hover:translate-x-3">Career</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='space-y-3 w-4/12'>
                        <div className='font-bold text-lg'>
                            <h4>Sign Up for Our Newsletter</h4>
                        </div>

                        <div>
                            <p className='text-sm leading-relaxed text-gray-600'>Receive weekly newsletter with educational materials, popular books and much more!</p>
                        </div>

                        <div className='relative pt-4'>
                            <input className='w-full text-sm px-4 py-4 focus:outline-none border rounded shadow-lg' type="email" placeholder='Your E-mail' />

                            <button className='bg-[#FFC221] font-bold px-3 py-[7px] rounded hover:bg-blue-700 hover:text-white absolute right-2 top-6'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <hr className='border-1 border-gray-200 mb-8' />
                    <p className='text-sm text-gray-500 text-center'>Copyright &copy; 2023, powered By <span className='font-bold'>EduMall</span>, All Rights Reserved</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;