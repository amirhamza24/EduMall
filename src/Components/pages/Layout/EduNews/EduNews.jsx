// import React from 'react';
import './Edunews.css'
import news1 from '../../../../assets/eduNews/news1.jpg'
import news2 from '../../../../assets/eduNews/news2.jpg'
import news3 from '../../../../assets/eduNews/news3.jpg'
import news4 from '../../../../assets/eduNews/news4.jpg'
import { FaCalendar, FaEye } from 'react-icons/fa'

const EduNews = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto mb-16 montserrat-font'>
                <div className="flex justify-center">
                    <div className='text-center relative space-y-2'>
                        <h1 className="text-4xl font-bold capitalize">
                            EduMall News
                        </h1>

                        <div className='absolute top-9 right-3'>
                            <p className='w-20 h-[5px] bg-[#FFC221]'></p>
                            {/* <img src={border} alt="" /> */}
                        </div>

                        <p className='pt-3'>From EduMall to the World</p>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-4 gap-6 mt-10'>
                        <div className='space-y-2 relative group overflow-hidden'>
                            <div className='h-36 overflow-hidden rounded'>
                                <img className='rounded w-full h-full transition-transform duration-500 transform group-hover:scale-110' src={news1} alt="" />
                            </div>

                            <div className='flex justify-between text-gray-500 text-sm py-1'>
                                <div className='flex items-center space-x-2'>
                                    <FaCalendar></FaCalendar>
                                    <p>August 10, 2022</p>
                                </div>

                                <div className='flex items-center space-x-2'>
                                    <FaEye></FaEye>
                                    <p>736 views</p>
                                </div>
                            </div>

                            <div>
                                <h5 className='font-bold text-slate-700'>Learning Management System Design Tips For eLearning</h5>
                            </div>

                            <div>
                                <p className='text-slate-600 text-sm'>As our elementary students head back to school in person, …</p>
                            </div>

                            <div className='pb-5 pt-3'>
                                <button className='text-blue-600 bg-gray-100 px-5 py-2 rounded hover:shadow-lg hover:bg-white transition duration-400'>Read More</button>
                            </div>
                        </div>

                        <div className='space-y-2 relative group overflow-hidden'>
                            <div className='h-36 overflow-hidden rounded'>
                                <img className='rounded w-full h-full transition-transform duration-500 transform group-hover:scale-110' src={news2} alt="" />
                            </div>

                            <div className='flex justify-between text-gray-500 text-sm py-1'>
                                <div className='flex items-center space-x-2'>
                                    <FaCalendar></FaCalendar>
                                    <p>August 10, 2022</p>
                                </div>

                                <div className='flex items-center space-x-2'>
                                    <FaEye></FaEye>
                                    <p>382 views</p>
                                </div>
                            </div>

                            <div>
                                <h5 className='font-bold text-slate-700'>The Importance Of Intrinsic Motivation for Students</h5>
                            </div>

                            <div>
                                <p className='text-slate-600 text-sm'>As our elementary students head back to school in person, …</p>
                            </div>

                            <div className='pb-5 pt-3'>
                                <button className='text-blue-600 bg-gray-100 px-5 py-2 rounded hover:shadow-lg hover:bg-white transition duration-400'>Read More</button>
                            </div>
                        </div>

                        <div className='space-y-2 relative group overflow-hidden'>
                            <div className='h-36 overflow-hidden rounded'>
                                <img className='rounded w-full h-full transition-transform duration-500 transform group-hover:scale-110' src={news3} alt="" />
                            </div>

                            <div className='flex justify-between text-gray-500 text-sm py-1'>
                                <div className='flex items-center space-x-2'>
                                    <FaCalendar></FaCalendar>
                                    <p>August 10, 2022</p>
                                </div>

                                <div className='flex items-center space-x-2'>
                                    <FaEye></FaEye>
                                    <p>417 views</p>
                                </div>
                            </div>

                            <div>
                                <h5 className='font-bold text-slate-700'>A Better Alternative To Grading Student Writing</h5>
                            </div>

                            <div>
                                <p className='text-slate-600 text-sm'>As our elementary students head back to school in person, …</p>
                            </div>

                            <div className='pb-5 pt-3'>
                                <button className='text-blue-600 bg-gray-100 px-5 py-2 rounded hover:shadow-lg hover:bg-white transition duration-400'>Read More</button>
                            </div>
                        </div>

                        <div className='space-y-2 relative group overflow-hidden'>
                            <div className='h-36 overflow-hidden rounded'>
                                <img className='rounded w-full h-full transition-transform duration-500 transform group-hover:scale-110' src={news4} alt="" />
                            </div>

                            <div className='flex justify-between text-gray-500 text-sm py-1'>
                                <div className='flex items-center space-x-2'>
                                    <FaCalendar></FaCalendar>
                                    <p>August 10, 2022</p>
                                </div>

                                <div className='flex items-center space-x-2'>
                                    <FaEye></FaEye>
                                    <p>638 views</p>
                                </div>
                            </div>

                            <div>
                                <h5 className='font-bold text-slate-700'> Think Differently About Writing In The Classroom</h5>
                            </div>

                            <div>
                                <p className='text-slate-600 text-sm'>As our elementary students head back to school in person, …</p>
                            </div>

                            <div className='pb-5 pt-3'>
                                <button className='text-blue-600 bg-gray-100 px-5 py-2 rounded hover:shadow-lg hover:bg-white transition duration-400'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduNews;