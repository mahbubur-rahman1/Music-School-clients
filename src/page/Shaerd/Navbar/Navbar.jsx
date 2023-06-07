import { Link } from "react-router-dom";


const Navbar = () => {
    const navOption = <>
        
       <Link to="/"><li className="font-semibold">Home</li></Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link className="btn btn-primary" to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;