import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../../providers/AuthProvider";
// import { Helmet } from "react-helmet-async";

const InstClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    useEffect( () => {
        const instructorClass = async () => {
            await axios.get(`https://edumall-server-ju560qe31-amirhamza24.vercel.app/addClass/instructor/${user?.email}`)
            .then(res => setMyClasses(res.data))
        }
        instructorClass();
    }, [user?.email])


    return (
        <div className="w-full">

            {/* <Helmet>
                <title>TopSpin | My Classes</title>
            </Helmet> */}

            <h3>Instructor Class here: {myClasses?.length}</h3>

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>{`Status`}</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}

                    {
                        myClasses.map((myClass, index) => <tr
                        key={myClass._id}>
                            <th>{index+1}</th>
                            <td><img className="w-12 h-12 rounded-lg" src={myClass.imageURL} alt="" /></td>
                            <td>${myClass?.price}</td>
                            <td>{myClass?.status}</td>
                            <td>
                                <button className="btn btn-outline btn-primary btn-sm">Update</button>
                            </td>
                            <td>Available Seats: {myClass?.seat}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InstClass;