// import usePopular from "../../../hooks/usePopular";
// import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from "react";
import AllInstructor from "./AllInstructor";


const Instructor = () => {
    // const [popular] = usePopular();
    
    // const popularInstructor = popular.filter(item => item.category === 'instructor')

    const [instructor, setInstructor] = useState([]);

    useEffect( () => {
        fetch('https://edumall-server-ju560qe31-amirhamza24.vercel.app/users/instructor')
        .then(res => res.json())
        .then(data => setInstructor(data))
    }, [])


    return (

        <div className="">
            <div className="my-16 w-10/12 mx-auto">
                {/* <Helmet>
                    <title>TopSpin | Instructor</title>
                </Helmet> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        instructor.map(item => <AllInstructor
                            key={item._id}
                            item={item}
                        ></AllInstructor>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Instructor;