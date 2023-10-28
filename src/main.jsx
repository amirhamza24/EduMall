import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/pages/Layout/Hom/Home';
import Main from './Main/Main';
import AuthProvider from './providers/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Dashboard from './Components/pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import Instructor from './Components/Shared/Instructor/Instructor';
import Courses from './Components/Shared/Courses/Courses';
import MyClass from './Components/pages/Dashboard/MyClass/MyClass';
import Payment from './Components/pages/Dashboard/Payment/Payment';
import EnrollClass from './Components/pages/Dashboard/EnrollClass/EnrollClass';
import PaymentHistory from './Components/pages/Dashboard/PaymentHistory/PaymentHistory';
import ManageClass from './Components/pages/Dashboard/IsAdmin/ManageClass/ManageClass';
import ManageUsers from './Components/pages/Dashboard/IsAdmin/ManageUsers/ManageUsers';
import AddClass from './Components/pages/Dashboard/IsInstructor/AddClass/AddClass';
import InstClass from './Components/pages/Dashboard/IsInstructor/InstClass/InstClass';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/instructor",
                element: <Instructor></Instructor>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'enrollClass',
                element: <EnrollClass></EnrollClass>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'manageClass',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'manageUser',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'insClass',
                element: <InstClass></InstClass>
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
