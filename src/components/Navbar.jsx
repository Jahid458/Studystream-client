import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import logo from "/studystream.png";
import ThemeContext from "../themeProvider/ThemeContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const logoutFunc = () => {
    handleLogout();
  };

  return (
    <div
      className={`navbar w-full shadow-md px-4 ${
        theme === "light" ? "bg-green-400" : "bg-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img src={logo} className="w-14" />
            <span
              className={`font-bold text-2xl rounded-md p-2 ${
                theme === "light"
                  ? "hover:bg-orange-300 hover:text-white"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }`}
            >
              Study<span className="text-white">Stream</span>
            </span>
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline mx-4"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1 justify-center flex">
            <li className=" hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-white">
              <Link to="/assignments">Assignments</Link>
            </li>
            {user && (
              <li className=" hover:text-white">
                <Link to="/pen-assignment">Pending Assignments</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        {/* Profile Dropdown */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                title={user?.displayName}
                className="w-10 rounded-full border border-gray-300"
              >
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
                theme === "light" ? "bg-green-400" : "bg-gray-700"
              } rounded-box w-52`}
            >
              <li className="hover:text-white">
                <Link to="/create-Assign">Create Assignments</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/my-attempt-assign">My Attempted Assignments</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logoutFunc}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
                theme === "light" ? "bg-base-100" : "bg-gray-700"
              } rounded-box w-52`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/assignments">Assignments</Link>
              </li>
              {user && (
                <li>
                  <Link to="/pen-assignment">Pending Assignments</Link>
                </li>
              )}
              <li className="mt-2">
                <button
                  onClick={logoutFunc}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
              {!user && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
