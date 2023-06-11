import { Link } from "react-router-dom";


const Navbar = () => {
    const navOption = <>

        <Link to="/"><li className="text-2xl font-semibold px-3">Home</li></Link>
        <Link to="/instructors"><li className="text-2xl font-semibold px-3">Instructors</li></Link>
        <Link to="/classes"><li className="text-2xl font-semibold px-3">Classes</li></Link>
        <Link to="/dashboard"><li className="text-2xl font-semibold px-3">Dashboard</li></Link>
    </>
    return (
        <nav>
            <div className="navbar  fixed z-30  text-white bg-opacity-50 bg-black">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-gray-400 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <img className="h-16 w-24 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SotQ6s59qGAG64o22hAX84dJxgE2nqLjbg&usqp=CAU" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Music School</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link className="btn btn-primary" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 