import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaCalendar, FaShoppingCart, FaWallet } from 'react-icons/fa'



const DashBoard = () => {




    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-black text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="space-y-3 menu p-4 w-80 h-full ">

                    {/* Sidebar content here */}


                    <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>

                    <li><NavLink to='/dashboard/selectetclass'><FaShoppingCart></FaShoppingCart>
                        My Selected Class <div className="badge badge-secondary"></div>
                    </NavLink></li>



                    <div className="divider"></div>


                    <li><NavLink to='/deshbord/userhome'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>About Me</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>
                        Shoping Cart <div className="badge badge-secondary"></div>
                    </NavLink></li>
                </ul>

            </div>
        </div>




    );
};

export default DashBoard;