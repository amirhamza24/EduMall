// import React from 'react';
import './WhyEdu.css'
import { TbWorldCog, TbNotes } from 'react-icons/tb';
import { FaUsers, FaCreativeCommonsRemix } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

const WhyEdu = () => {

    const [counter, setCuonter] = useState(false);

    return (
        <div>
            <div className='w-10/12 mx-auto my-16'>
                <div className="flex justify-center montserrat-font">
                    <div className='text-center relative space-y-2'>
                        <h1 className="text-4xl font-bold text-blue-700 capitalize">
                            Why Choose EduMall!
                        </h1>

                        <p className='text-gray-800 text-xl font-semibold'>Language Academic?</p>
                    </div>
                </div>

                <div className='flex gap-5 pt-8'>
                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <TbWorldCog className='text-8xl text-blue-600'></TbWorldCog>

                            {/* <h2>15</h2> */}
                            {/* <CountUp start={0} end={100} duration={2} delay={0} /> */}

                            <ScrollTrigger onEnter={() => setCuonter(true)} onExit={() =>setCuonter(false)}>
                                {
                                    counter && <CountUp className='text-3xl text-blue-600' start={0} end={15} duration={2} delay={0} />
                                }
                            </ScrollTrigger>

                            <h2 className='px-8 text-lg text-center text-gray-500'>Years of Language Education Experience</h2>
                        </div>
                    </div>

                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <FaCreativeCommonsRemix className='text-8xl text-blue-600'></FaCreativeCommonsRemix>

                            {/* <h2>23085</h2> */}

                            <ScrollTrigger onEnter={() => setCuonter(true)} onExit={() =>setCuonter(false)}>
                                {
                                    counter && <CountUp className='text-3xl text-blue-600' start={0} end={23085} duration={2} delay={0} />
                                }
                            </ScrollTrigger>

                            <h2 className='px-8 text-lg text-center text-gray-500'>Learners Enrolled in EduMall Courses</h2>
                        </div>
                    </div>

                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <FaUsers className='text-8xl text-blue-600'></FaUsers>

                            {/* <h2>135</h2> */}

                            <ScrollTrigger onEnter={() => setCuonter(true)} onExit={() =>setCuonter(false)}>
                                {
                                    counter && <CountUp className='text-3xl text-blue-600' start={0} end={135} duration={2} delay={0} />
                                }
                            </ScrollTrigger>

                            <h2 className='px-8 text-lg text-center text-gray-500'>Qualified teachers and language experts</h2>
                        </div>
                    </div>

                    <div className='transition duration-200 hover:shadow-xl h-80 w-3/12'>
                        <div className='flex flex-col justify-center items-center h-full space-y-4'>
                            <TbNotes className='text-8xl text-blue-600'></TbNotes>

                            {/* <h2>127+</h2> */}

                            <ScrollTrigger onEnter={() => setCuonter(true)} onExit={() =>setCuonter(false)}>
                                {
                                    counter && <CountUp className='text-3xl text-blue-600' start={0} end={127} duration={2} delay={0}/> 
                                }
                                <span className='text-3xl text-blue-600'>+</span>
                            </ScrollTrigger>

                            <h2 className='px-8 text-lg text-center text-gray-500'>Innovative Foreign Language Courses</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyEdu;