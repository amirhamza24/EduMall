// import React from 'react';


const AllCourses = ({ course }) => {

    // const { image, courseName, flag, program, _id } = course;

    const { imageURL, seat } = course;

    return (
        // <div className="relative group overflow-hidden hover:cursor-pointer">
        //     <div className="rounded-lg overflow-hidden">
        //         <img src={image} className="w-full h-48 rounded-lg transition-transform duration-500 transform group-hover:scale-110" alt="" />
        //     </div>

        //     <div className="text-white">
        //         <div className="absolute bottom-0 left-0 w-full">
        //             <div className="space-y-2 p-5 bg-gradient-to-b from-transparent to-black rounded-lg">
        //                 <div className="">
        //                     <p className="font-semibold">{courseName}</p>
        //                 </div>

        //                 <div className="flex gap-2 items-center">
        //                     <img className="w-7 h-7 rounded-full" src={flag} alt="" />
        //                     <p>{program}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className="border shadow-2xl relative group overflow-hidden" >
                <div className="">
                    <img className="w-full h-60" src={imageURL} alt="" />
                </div>

                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 duration-200">
                    <div className="relative p-8 bg-gradient-to-b from-transparent to-black w-full">
                        <p className="text-xl text-center text-lime-400 font-semibold pt-16 tracking-wider title-font">Students: {seat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;