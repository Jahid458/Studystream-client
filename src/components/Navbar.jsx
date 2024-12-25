import { useContext } from 'react';
import AuthContext from "./AuthContext";
import { Link } from 'react-router-dom';
import logo from '/studystream.png'

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const logoutFunc = () => {
    handleLogout();
  };

  return (
    <div className='navbar w-full bg-base-400 shadow-md px-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Brand */}
        <div className='flex items-center'>
          <Link to='/' className='flex gap-2 items-center'>
         

            <img src={logo} className='w-14' />
            <span className='font-bold text-2xl rounded-md p-2 hover:bg-green-300 hover:text-white'>
              Study<span className="text-green-500">Stream</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-none'>
          <ul className='menu menu-horizontal px-1 justify-center flex'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/assignments'>Assignments</Link>
            </li>
            {user && (
              <li>
                <Link to='/pen-assignment'>Pending Assignments</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>

      

        {/* Profile Dropdown */}
        {user && (
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/create-Assign'>Create Assignments</Link>
              </li>
              <li>
                <Link to='/my-attempt-assign'>My Attempted Assignments</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logoutFunc}
                  className='bg-gray-200 block text-center'>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

           {/* Mobile Menu */}
           <div className='md:hidden flex items-center '>
          <div className='dropdown dropdown-end'>
            <button
              tabIndex={0}
              className='btn btn-ghost btn-circle'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/assignments'>Assignments</Link>
              </li>
              {user && (
                <li>
                  <Link to='/pen-assignment'>Pending Assignments</Link>
                </li>
              )}
                  <li className='mt-2'>
                <button
                  onClick={logoutFunc}
                  className='bg-gray-200 block text-center'>
                  Logout
                </button>
              </li>
              {!user && (
                <li>
                  <Link to='/login'>Login</Link>
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
