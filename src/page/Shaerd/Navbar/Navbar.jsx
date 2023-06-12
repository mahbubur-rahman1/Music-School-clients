import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviter/AuthProviders";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
          .then(() => {})
          .catch((error => console.log(error)));
      };


    const navOption = <>

        <Link to="/"><li className="text-2xl font-semibold px-3">Home</li></Link>
        <Link to="/instructors"><li className="text-2xl font-semibold px-3">Instructors</li></Link>
        <Link to="/classes"><li className="text-2xl font-semibold px-3">Classes</li></Link>
       {
        user?.email? <Link to="/dashboard"><li className="text-2xl font-semibold px-3">Dashboard</li></Link>
        : ""
       }
    </>
    return (
        <nav>
            <div className="navbar w-full   z-30 text-white bg-opacity-50 bg-black">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-gray-400 dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navOption}
                        </ul>   
                    </div>
                    <img className="h-14 w-28 rounded-lg" src="https://i.pinimg.com/originals/79/40/08/794008c804a96f42af807ab929e3b0f0.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Music School</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user ? (
                        <>
                            <img
                                className="rounded-full w-10 mr-2 "
                                src={user?.photoURL}
                                alt=""
                            />
                            <button
                                onClick={handleLogout}
                                className="btn btn-xs md:btn-md text-white btn-neutral"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <p className="btn btn-primary btn-xs md:btn-md  text-white">Login</p>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 