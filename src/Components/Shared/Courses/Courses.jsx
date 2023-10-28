import { useEffect, useState } from 'react';
// import usePopular from "../../../hooks/usePopular";
// import { Helmet } from "react-helmet-async";
import AllCourses from './AllCourses';


const Class = () => {

    // const [popular] = usePopular();

    // const popularClass = popular.filter(item => item.category === 'class')

    const [popularClass, setPopularClass] = useState([]);

    useEffect( () => {
        fetch('https://edumall-server-ju560qe31-amirhamza24.vercel.app/classes/approveClass')
        .then(res => res.json())
        .then(data => setPopularClass(data))
    }, [])

    return (
        <div className="my-16 w-10/12 mx-auto">
            {/* <Helmet>
                <title>TopSpin | Class</title>
            </Helmet> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    popularClass.map(classItem => <AllCourses
                        key={classItem._id}
                        classItem={classItem}
                    ></AllCourses>)
                }
            </div>
            
        </div>
    );
};

export default Class;