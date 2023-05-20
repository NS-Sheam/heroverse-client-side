import logo from "../../../assets/herologo.png"
import { FaUserAlt } from 'react-icons/fa';
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const userRender = <>
        <li>
            <ActiveLink to={`/mytoys`}>My toys</ActiveLink>
        </li>
        <li>
            <ActiveLink to={`/addtoy`}>Add a toys</ActiveLink>
        </li>
    </>
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-orange-primary text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="bg-orange-primary menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li>
                            <ActiveLink to={`/`}>Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to={`/alltoys`}>All toys</ActiveLink>
                        </li>
                        {
                            user &&
                            userRender
                        }
                        <li>
                            <ActiveLink to={`/blogs`}>blogs</ActiveLink>
                        </li>
                        {
                            !user ?

                                <li>
                                    <div>
                                        <FaUserAlt />
                                    </div>
                                    <div>
                                        <ActiveLink to={`/login`}>
                                            Login
                                        </ActiveLink>
                                    </div>
                                </li> :
                                <li>
                                    <div className="">
                                        <img className="h-10 w-10 rounded-full" src={user.photoURL} title={user.displayName} alt="" />
                                    </div>
                                    <div>
                                        <Link onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    </div>
                                </li>
                        }
                    </ul>
                </div>


                <Link to="/" className="flex justify-center items-center">
                    <img className=" h-10" src={logo} alt="logo" />
                    <h3 className="text-xl font-bold">Heroverse</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 px-1">
                    <li>
                        <ActiveLink to={`/`}>Home</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to={`alltoys`}>All toys</ActiveLink>
                    </li>

                    {/* Conditional render */}
                    {
                        user &&
                        userRender
                    }
                    {/* Conditional render end */}
                    <li>
                        <ActiveLink to={`/blogs`}>blogs</ActiveLink>
                    </li>
                    {/* Conditional render */}
                    <li className="lg:hidden">
                        <FaUserAlt />
                    </li>
                    <li className="lg:hidden">
                        <ActiveLink to={`/login`}>
                            Login
                        </ActiveLink>
                    </li>
                    {/* Conditional render end  */}
                    <li className="lg:hidden">
                        <ActiveLink to={`/logout`}>
                            Logout
                        </ActiveLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:block">
                <ul className="flex justify-center items-center gap-4 px-1">
                    {
                        !user ?

                            <>
                                <li>
                                    <FaUserAlt />
                                </li>
                                <li>
                                    <ActiveLink to={`/login`}>
                                        Login
                                    </ActiveLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <img className="w-10 h-10 rounded-full" src={user.photoURL} title={user.displayName} alt="" />
                                </li>
                                <li>
                                    <Link onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;