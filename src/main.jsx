import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Components/pages/Layout/Hom/Home';
import Main from './Main/Main';
import AuthProvider from './providers/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Instructor from './Components/pages/Layout/Heading/Instructor/Instructor';
import Classes from './Components/pages/Layout/Heading/Classes/Classes';
import Dashboard from './Components/pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './routes/PrivateRoute';

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
            path: "/classes",
            element: <Classes></Classes>
        }
      ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
