// import React from 'react';
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { useContext, useState } from 'react';
import Swal from "sweetalert2";
import { FaGoogle, FaUserCircle } from 'react-icons/fa';
import img from '../../../assets/login/signup.png'
import { AuthContext } from '../../../providers/AuthProvider';
// import SocialLogin from '../../pages/Layout/SocialLogin/SocialLogin';

const Register = () => {

    const { createUser, googleSign } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        setError('');
        if(password.length < 6) {
            setError('Password must be 6 characters Long')
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, { replace: true });
            form.reset();
            Swal.fire(
                "Success!",
                "Registration Successful!",
                "success"
              );
        })
        .catch(error => {
            console.log(error); 
        })
        
    }

    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error)
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
    }

    return (
        <div className='my-16'>
            <div className='w-10/12 mx-auto montserrat-font'>
                <div className='flex gap-10 items-center'>
                    <div className='w-6/12'>
                        <img src={img} alt="" />
                    </div>


                    <div className='border py-10 w-6/12 shadow-lg'>
                        <form onSubmit={handleLogin}>
                            <div className="w-10/12 mx-auto space-y-4">

                                <div className='flex justify-center text-8xl'>
                                    <FaUserCircle></FaUserCircle>
                                </div>

                                <div className='text-center text-2xl font-bold pb-5'>
                                    <h3>Create Account</h3>
                                </div>

                                <div className='text-left'>
                                    <p className='text-red-500'>{error}</p>
                                </div>

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Enter Name
                                        </p>
                                    </label>

                                    <input type="text" name="name" placeholder="Enter Your Name" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                                </div>

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Enter Email
                                        </p>
                                    </label>

                                    <input type="email" name="email" placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                                </div>

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Photo URL
                                        </p>
                                    </label>

                                    <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                                </div>

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Enter password:
                                        </p>
                                    </label>

                                    <input type="password" name="password" placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div>
                                    <p className="text-red-500 text-left">{}</p>
                                </div>

                                <div>
                                    <p className="text-red-500 text-left">{error}</p>
                                </div>

                                <div className="form-control">
                                    <input type="submit" value="Create Account" className='h-10 bg-blue-600 text-white hover:bg-[#FFC221] hover:text-black transition duration-200 text-xl font-semibold cursor-pointer w-6/12 mx-auto'/>
                                </div>

                                <div className='flex items-center my-6 gap-3'>
                                    <span className='grow w-full h-[1px] bg-gray-300'></span>
                                    <span className='grow-0 font-semibold'>Or</span>
                                    <span className='grow mr-auto w-full h-[1px] bg-gray-300'></span>
                                </div>

                                <div className=''>
                                    <div className='flex flex-col md:flex-row items-center'>
                                        <div className='flex items-center justify-center border hover:border-gray-600 cursor-pointer w-12 h-12 rounded-full mx-auto text-xl' onClick={handleGoogleSign}>
                                            <FaGoogle></FaGoogle>
                                        </div>
                                    </div>
                                </div>

                                {/* <SocialLogin></SocialLogin> */}

                                

                                <div>
                                    <p className="">
                                        Already Have an Account? <Link className="text-blue-600 hover:underline" to="/login">Please Login.</Link>
                                    </p>
                                </div>

                                {/* <div className="form-control">
                                    <input type="submit" value="Login" className='h-10 bg-blue-600 text-white hover:bg-[#FFC221] hover:text-black transition duration-200 text-xl font-semibold cursor-pointer w-4/12 mx-auto'/>
                                </div> */}

                                {/* <button className="w-full h-10 bg-teal-300 hover:bg-teal-400 text-xl font-semibold">
                                    Login
                                </button> */}
            
                                {/* <div className='flex items-center my-6 gap-3'>
                                    <span className='grow w-full h-[1px] bg-gray-300'></span>
                                    <span className='grow-0 font-semibold'>Or</span>
                                    <span className='grow mr-auto w-full h-[1px] bg-gray-300'></span>
                                </div>

                                <div className=''>
                                    <div className='flex flex-col md:flex-row items-center'>
                                        <div className='flex items-center justify-center border hover:border-gray-600 cursor-pointer w-12 h-12 rounded-full mx-auto text-xl' onClick={handleGoogleSign}>
                                            <FaGoogle></FaGoogle>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;