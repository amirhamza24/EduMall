// import React from 'react';


const AllCourses = ({ course }) => {

    const { image, courseName, flag, program, _id } = course;

    return (
        <div className="relative group overflow-hidden hover:cursor-pointer">
            <div className="rounded-lg overflow-hidden">
                <img src={image} className="w-full h-48 rounded-lg transition-transform duration-500 transform group-hover:scale-110" alt="" />
            </div>

            <div className="text-white">
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="space-y-2 p-5 bg-gradient-to-b from-transparent to-black rounded-lg">
                        <div className="">
                            <p className="font-semibold">{courseName}</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <img className="w-7 h-7 rounded-full" src={flag} alt="" />
                            <p>{program}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;