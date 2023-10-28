import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';
import useRole from '../../hooks/useRole';
import { AuthContext } from '../../../providers/AuthProvider';

const AllCourses = ({ classItem }) => {
    const { imageURL, subCategory, instructor, seat, price, _id } = classItem;

    const { user } = useContext(AuthContext);
    const [ , refetch ] = useCourse();
    const navigate = useNavigate();
    const location = useLocation();
    const [ role ] = useRole()

    const handleCart = (classItem) => {
        console.log(classItem);

        if(user && user.email) {
            const selectItem = { menuItem: _id, subCategory, imageURL, instructor, price, email: user.email }

            fetch('https://edumall-server-ju560qe31-amirhamza24.vercel.app/classes', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This class is selected',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else {
            Swal.fire({
                title: 'Please Login First, then Select this Class',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now.'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div>
            <div className="border shadow-xl">
                <img className="h-80 w-full" src={imageURL} alt="" />
                
                <div className="p-6 space-y-2 title-poppins">
                    <h2 className="text-lg font-semibold">Name: <span className="text-lime-600">{subCategory}</span></h2>
                    <h4 className="">Instructor Name: <span className="text-orange-500 font-semibold">{instructor}</span></h4>
                    
                    <div className="flex justify-between">
                        <p>Available Seats: <span className="font-semibold text-blue-700">{seat}</span></p>
                        <p>Price: <span className="text-purple-700 font-semibold">${price}</span></p>
                    </div>

                    <div className="flex justify-end pt-4">
                        {
                            role == "student" ?
                            <button onClick={() => handleCart(classItem)} className='btn btn-outline btn-success text-lg duration-200 px-7 title-font tracking-wider text-black font-semibold uppercase'>Select</button>
                            :

                            <button disabled className='btn btn-outline btn-success text-lg duration-200 px-7 title-font tracking-wider text-black font-semibold uppercase'>Select</button>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllCourses;