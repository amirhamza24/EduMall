// import React from 'react';
import './ContactUs.css'
// import contactImg from '../../../../assets/contactUs/contactUsBG.jpg'
import contactImg from '../../../../assets/contactUs/contactUsBG.png'
import { FaUserAlt } from 'react-icons/fa';


const ContactUs = () => {
    return (
        <div className="my-16 bg-cyan-50 montserrat-font">
            <div className="py-16">
                <div className="w-10/12 mx-auto">
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='w-2/6 space-y-2'>
                                <h2 className='text-4xl font-bold'><span className='uppercase text-blue-700'>Free</span> Resources</h2>
                                <h2 className='text-3xl font-bold'>Learning German for</h2>
                                <h2 className='text-3xl font-bold'>Beginner</h2>

                                <p className='pt-3 text-gray-500 text-sm leading-relaxed'>Learning new languages, connect to the world and become a global citizen with EduMall</p>
                            </div>

                            <div className='w-2/6'>
                                <img src={contactImg} alt="" />
                            </div>

                            <div className='w-2/6 bg-white shadow-lg px-10 py-10'>
                                <div>
                                    <div className='text-2xl text-center font-bold leading-relaxed mb-9'>
                                        <h2>Sign Up for Free Resources</h2>
                                    </div>

                                    <div className='space-y-4'>
                                        <div>
                                            <input className='w-full bg-gray-200 px-4 py-2 focus:outline-none border rounded' type="text" name="name" placeholder='Full Name' />
                                        </div>

                                        <div>
                                            <input className='w-full bg-gray-200 px-4 py-2 focus:outline-none border rounded' type="email" name="email" placeholder='Email' />
                                        </div>

                                        <div>
                                            <input className='w-full bg-gray-200 px-4 py-2 focus:outline-none border rounded' type="text" name="phone" placeholder='Phone' />
                                        </div>

                                        <div className='pt-3'>
                                            <button className='w-full text-center bg-blue-700 hover:bg-[#FFC221] text-white hover:text-neutral-800 py-3 rounded font-semibold transition duration-300'>Get it now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;