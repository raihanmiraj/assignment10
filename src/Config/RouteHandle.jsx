import React, { createContext, useContext } from 'react';
 
import {  createBrowserRouter,
    RouterProvider,
    useParams,
  } from "react-router-dom";
import Layout from '../Layout/Layout'; 
import axios from 'axios'; 
import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
 
import { AuthContext } from '../Provider/AuthContextProvider';
import PrivateRoute from './PrivateRoute';
import RestictedPublicRoute from './RestictedPublicRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import BlogPage from '../Pages/BlogPage/BlogPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import ChefDetails from '../Pages/ChefDetails/ChefDetails';
const RouteHandle = () => {
   const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
 
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
              children: [
            {
              path: "/",
              loader: ()=> {
                return {
                chefDataLoad :axios.get("/chef"),
            
              }
            },
              element: <HomePage />,
             },

             {
              path: "/blog",
              loader: ()=> {
                return {
                  blogDataLoad :axios.get("/blog"),
            
              }
            },
              element: <BlogPage />,
             },
             {
              path: "/chef/:id",
              
             
              element:<PrivateRoute> <ChefDetails /></PrivateRoute>,
             },
        ]
      },
        {
             path: "/login",
            element:<RestictedPublicRoute> <LoginPage/></RestictedPublicRoute>,
        }
        , {
          path: "/register",
         element:<RestictedPublicRoute> <RegisterPage/></RestictedPublicRoute>,
     }
        ,
        {
          path: "*",
         element:<ErrorPage/>,
     }
       
       
      ]);
      
     
    return (
        <>
              <RouterProvider router={router} />  
        </>
    );
}

export default RouteHandle;
