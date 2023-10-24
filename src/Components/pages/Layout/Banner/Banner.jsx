// import React from 'react';
import Header from '../../../Shared/Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='w-10/12 mx-auto h-full'>
                
                {/* <Header></Header> */}

                <div className='h-full flex justify-center items-center text-center text-white montserrat-font'>
                    <div className='space-y-5'>
                        <h2 className='text-6xl font-bold tracking-wide'>Innovative</h2>

                        <h2 className='text-6xl'>Language Academic</h2>

                        <p className='text-lg tracking-wide pt-3 capitalize'>Learning new languages, connect to the world</p>

                        <div className='space-x-7 pt-5'>
                            <button className='bg-blue-600 hover:bg-[#FFC221] hover:text-black font-semibold px-8 py-4 rounded-lg tracking-wide transition duration-300'>
                                Register Now
                            </button>

                            <button className='bg-white hover:bg-[#FFC221] text-black font-semibold px-8 py-4 rounded-lg tracking-wide transition duration-300'>
                                Find Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;