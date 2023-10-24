// import React from 'react';
import './Login.css'
import { FaGoogle, FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import Swal from "sweetalert2";
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import img from '../../assets/login/img1.jpg'
// import SocialLogin from '../pages/Layout/SocialLogin/SocialLogin';

const Login = () => {

    const { signIn, googleSign } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signIn(email, passWord)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error);
            setError('Incorrect Email or Password');
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
                                    <h3>Sign in to your account</h3>
                                </div>

                                <div className='text-left'>
                                    <p className='text-red-500'>{error}</p>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Your Email:</p>
                                    </label>

                                    <input type="email" name='email' placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Enter Password:</p>
                                    </label>

                                    <input type="password" name='password' placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" required />

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="toggle" className="form-checkbox" />
                                            <label htmlFor="toggle" className="ml-2 text-gray-700 text-sm">Remember Me</label>
                                        </div>

                                        <p className="text-left text-sm text-red-500"><small>Forget Password?</small></p>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <input type="submit" value="Login" className='h-10 bg-blue-600 text-white hover:bg-[#FFC221] hover:text-black transition duration-200 text-xl font-semibold cursor-pointer w-4/12 mx-auto'/>
                                </div>

                                {/* <button className="w-full h-10 bg-teal-300 hover:bg-teal-400 text-xl font-semibold">
                                    Login
                                </button> */}
            
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
                                    <p className=''>Are you new here? <Link className='text-blue-600 hover:underline' to='/register'>Please Register.</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;