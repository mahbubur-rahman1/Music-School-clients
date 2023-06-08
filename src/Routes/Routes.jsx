import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../page/Home/Home/Home";
import Login from "../Compunents/Login/Login";



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
            
        },
        {
            path: "/login",
            element: <Login></Login>
        }
      ]

    },
  ]);