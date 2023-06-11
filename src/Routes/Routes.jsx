import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../page/Home/Home/Home";
import Login from "../Compunents/Login/Login";
import Instructors from "../page/Shaerd/Instructors/Instructors";
import ClassesDetails from "../page/Home/ClassesDetails/ClassesDetails";
import DashBoard from "../Layout/Main/DashBoard";
import SelectetClass from "../DashBoard/SelectetClass";
import Payment from "../DashBoard/Payment/Payment";
import PaymentHistory from "../DashBoard/PaymentHistory/PaymentHistory";
import MyEnrollClass from "../DashBoard/MyEnrollClass/MyEnrollClass";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import AddClass from "../DashBoard/AddClass";




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
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>
        },
        {
          path: "/classes",
          element: <ClassesDetails></ClassesDetails>
        }
      ]

    },

    {
      path: "dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "my-Selected-class",
          element: <SelectetClass></SelectetClass>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'my-enroll-class',
          element: <MyEnrollClass></MyEnrollClass>
        },
        {
          path: 'all-users',
          element: <AllUsers></AllUsers>
        },
        {
          path: "add-class-page",
          element: <AddClass></AddClass>
        }
      ]
    }
  ]);