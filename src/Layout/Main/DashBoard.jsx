import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCalculator, FaContao, FaGratipay, FaHome, FaMendeley, FaShopify, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useEnroll from '../../Hooks/useEnroll';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import useMyClass from '../../Hooks/useMyClass';
import useMyEnroll from '../../Hooks/useMyEnroll';


const Dashboard = () => {
  const [cart] = useEnroll();
  const [classes, refetch] = useMyClass();
  const [myEnroll] = useMyEnroll();

  //   const  isAdmin = true;
//   const [isAdmin] = useAdmin();
//   const [isInstructor] = useInstructor();
  return (
    <div >
      <Helmet>
        <title>Music School | Dashboard</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button absolute top-0 right-5   lg:hidden"
          >
            <img className="w-5 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />

          </label>

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-black space-y-2 bg-opacity-80 text-white ">
           <>
               
                <li >
                  <NavLink to='/dashboard/all-users'><FaUserCircle></FaUserCircle> All Users</NavLink>
                </li>
              </>
              
                <>
                  <li >
                    <NavLink to='/'> <FaHome />Home</NavLink>
                  </li>
                  <li >
                    <NavLink to='/dashboard/add-class-page'><FaCalculator></FaCalculator> Add Class Page</NavLink>
                  </li>
                  <li >
                    <NavLink to='/dashboard/my-class'><FaShoppingCart></FaShoppingCart> My All Class
                      <span className="badge badge-secondary">+{classes?.length || 0}</span>
                    </NavLink>
                  </li>
                </>
              
             
                  <>
                    <li >
                      <NavLink to='/'> <FaHome /> User Home</NavLink>
                    </li>
                    <li >
                      <NavLink to='/dashboard/payment-history'><FaGratipay></FaGratipay> Payment History</NavLink>
                    </li>
                    <li >
                      <NavLink to='/dashboard/my-enroll-class'><FaShopify></FaShopify> My Enroll Class
                        <span className="badge badge-primary">+{myEnroll?.length || 0}</span>
                      </NavLink>
                    </li>

                    <li >
                      <NavLink to='/dashboard/my-Selected-class'><FaShoppingCart></FaShoppingCart> My Selected Class
                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                      </NavLink>
                    </li>
                  </>

                


            {/* <li>
              <hr />
              <NavLink to='/'> <FaHome /> Home</NavLink>
            </li>
            <li >
              <NavLink to='/'><FaMendeley></FaMendeley> menu</NavLink>
            </li>
            <li >
              <NavLink to='/'><FaContao></FaContao> Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





















// import { Outlet } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaCalendar, FaShoppingCart, FaWallet, FaShopify } from 'react-icons/fa'
// import useMyEnroll from "../../Hooks/useMyEnroll";



// const DashBoard = () => {

//     const [myEnroll] = useMyEnroll();



//     return (

//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col items-center justify-center">
//                 {/* Page content here */}
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
//                 <Outlet></Outlet>
//             </div>
//             <div className="drawer-side bg-black text-white">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

//                 <ul className="space-y-3 menu p-4 w-80 h-full ">

//                     {/* Sidebar content here */}


//                     <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>

//                     <li><NavLink to='/dashboard/selectetclass'><FaShoppingCart></FaShoppingCart>
//                         My Selected Class <div className="badge badge-secondary"></div>
//                     </NavLink></li>

//                     <li >
//                       <NavLink to='/dashboard/my-enroll-class'><FaShopify></FaShopify> My Enroll Class
//                         <span className="badge badge-primary">+{myEnroll?.length || 0}</span>
//                       </NavLink>
//                     </li>



//                     <div className="divider"></div>


//                     <li><NavLink to='/deshbord/userhome'><FaHome></FaHome>User Home</NavLink></li>
//                     <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>About Me</NavLink></li>
//                     <li><NavLink to='/dashboard/payment-history'><FaWallet></FaWallet> Payment History</NavLink></li>
//                     <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>
//                         Shoping Cart <div className="badge badge-secondary"></div>
//                     </NavLink></li>
//                 </ul>

//             </div>
//         </div>




//     );
// };

// export default DashBoard;