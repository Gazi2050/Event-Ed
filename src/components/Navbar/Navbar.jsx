import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    return (
        <div>
            <div className="navbar shadow-md  bg-teal-200 md:px-5 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/Contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="font-bold normal-case text-xl lg:text-3xl">Event Ed</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1 font-semibold space-x-2">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar font-medium  text-white bg-indigo-700 rounded-full hover:bg-indigo-500"
                        >
                            <FaCircleUser className="text-3xl" />
                        </label>


                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/Profile' className="justify-between">Profile</NavLink>
                            </li>
                            <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
                            <li><NavLink to='/Login'>LogIn</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
