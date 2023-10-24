// import React from 'react';
import './EduHappen.css'
// import border from '../../../../assets/eduhappening/curve-border.png'
import eduImg1 from '../../../../assets/eduhappening/banner-01.jpg'
import eduImg2 from '../../../../assets/eduhappening/banner-02.jpg'
import eduImg3 from '../../../../assets/eduhappening/banner-03.jpg'
import option1 from '../../../../assets/eduhappening/option1.jpg'
import option2 from '../../../../assets/eduhappening/option2.jpg'
import option3 from '../../../../assets/eduhappening/option3.jpg'
import option4 from '../../../../assets/eduhappening/option4.jpg'

const EduHappen = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto my-20">
                <div className="flex justify-center montserrat-font">
                    <div className='text-center relative space-y-2'>
                        <h1 className="text-4xl font-bold text-neutral-900 capitalize">
                            What's happening in
                            <span className=''> eduMall?</span>
                        </h1>

                        <div className='absolute top-9 right-6'>
                            <p className='w-36 h-[5px] bg-[#FFC221]'></p>
                            {/* <img src={border} alt="" /> */}
                        </div>

                        <p className='text-gray-700 pt-3'>Show all featured courses and news for your students</p>
                    </div>
                </div>

                <div className='flex gap-7 my-10'>
                    <div>
                        <img className='rounded-lg' src={eduImg1} alt="" />
                    </div>

                    <div>
                        <img className='rounded-lg' src={eduImg2} alt="" />
                    </div>

                    <div>
                        <img className='rounded-lg' src={eduImg3} alt="" />
                    </div>
                </div>

                <div className='flex gap-5 pt-8'>
                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <img className='rounded-lg w-48 h-40' src={option1} alt="" />

                            <h2 className='px-8 text-xl text-center font-bold'>15 Languages from Beginner to Expert</h2>
                        </div>
                    </div>

                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <img className='rounded-lg w-48 h-40' src={option2} alt="" />

                            <h2 className='px-8 text-xl text-center font-bold'>One-to-One or Group Language Programs</h2>
                        </div>
                    </div>

                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <img className='rounded-lg w-48 h-40' src={option3} alt="" />

                            <h2 className='px-8 text-xl text-center font-bold'>Instructed by Language Experts</h2>
                        </div>
                    </div>

                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <img className='rounded-lg w-48 h-40' src={option4} alt="" />

                            <h2 className='px-8 text-xl text-center font-bold'>A Residential Campus Community</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduHappen;