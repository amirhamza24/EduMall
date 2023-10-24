// import React from 'react';
import { useState } from 'react';
import './Courses.css'
import { useEffect } from 'react';
import AllCourses from './AllCourses';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className='montserrat-font'>
            <div className="w-10/12 mx-auto">
                <div className="flex justify-center montserrat-font">
                    <div className='text-center relative space-y-2'>
                        <h1 className="text-4xl font-bold text-neutral-800 capitalize">
                            Language Courses
                        </h1>

                        {/* <div className='absolute top-9 right-6'> */}
                            {/* <p className='w-36 h-[5px] bg-[#FFC221]'></p> */}
                            {/* <img src={border} alt="" /> */}
                        {/* </div> */}

                        <p className='text-gray-600 pt-3 text-center'>Learning new languages, connect to the world and <br /> become a global citizen with EduMal</p>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-8 pt-16'>
                    {
                        courses.map(course => <AllCourses
                            key={course._id}
                            course={course}
                        ></AllCourses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;