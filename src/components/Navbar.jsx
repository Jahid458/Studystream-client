import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import ThemeContext from "../themeProvider/ThemeContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoutFunc = () => {
    handleLogout();
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 shadow-md px-4 ${
        theme === "light" ? "bg-green-400" : "bg-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex gap-2 items-center">
            <span
              className={`font-bold text-2xl rounded-md p-2 ${
                theme === "light"
                  ? " hover:text-white"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }`}
            >
              Study<span className="text-white">Stream</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1 justify-center flex">
            <li className=" text-white hover:text-black">
              <Link to="/">Home</Link>
            </li>
            <li className=" text-white hover:text-black">
              <Link to="/assignments">Assignments</Link>
            </li>
            {user && (
              <li className=" text-white hover:text-black">
                <Link to="/pen-assignment">Pending Assignments</Link>
              </li>
            )}
            <li>
              <Link to="/teacherDetails" className="lg:block md:hidden text-white hover:text-black">
                TeacherDetails
              </Link>
            </li>
            <li>
              <Link to="/contact" className="lg:block md:hidden text-white hover:text-black">
                Contact
              </Link>
            </li>
            {!user && (
              <li className="md:block text-white hover:text-black">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        {/* Theme Toggle Button and Profile */}
        <div className="ml-4 flex items-center md:mr-10">
          <button
            onClick={toggleTheme}
            className="rounded-2xl text-2xl ml-2"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙 " : "☀️"}
          </button>

          {/* Profile Dropdown - Now Visible on Medium Screens */}
          {user ? (
            <div className="dropdown dropdown-end hidden md:block">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  title={user?.displayName}
                  className="w-10 rounded-full border border-gray-300"
                >
                  <img referrerPolicy="no-referrer" alt="User" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[60] px-3 py-5 shadow ${
                  theme === "light" ? "bg-green-600" : "bg-gray-700"
                } rounded-box w-60`}
              >
                <li className=" text-white hover:text-black">
                  <Link to="/create-Assign">Create Assignments</Link>
                </li>
                <li className=" text-white hover:text-black">
                  <Link to="/my-attempt-assign">My Attempted Assignments</Link>
                </li>
                <li className=" text-white hover:text-black">
                  <Link to="/teacherDetails">TeacherDetails</Link>
                </li>
                <li className=" text-white hover:text-black">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={logoutFunc}
                    className="bg-gray-200 p-2 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="md:hidden text-white bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          {user && (
            <div className="w-10 rounded-full border border-gray-300 mr-2">
              <img referrerPolicy="no-referrer" alt="User" src={user?.photoURL} />
            </div>
          )}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <ul className={`absolute right-4 top-16 menu menu-sm p-2 shadow ${theme === "light" ? "bg-base-100" : "bg-gray-700"} rounded-box w-52`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/assignments">Assignments</Link></li>
              {user ? (
                <>
                  <li><Link to="/pen-assignment">Pending Assignments</Link></li>
                  <li><Link to="/teacherDetails">TeacherDetails</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li className="mt-2">
                    <button onClick={logoutFunc} className="bg-gray-200 block text-center">Logout</button>
                  </li>
                </>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
