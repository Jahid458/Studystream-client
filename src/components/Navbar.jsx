
import { useContext } from 'react'
import AuthContext from "./AuthContext";
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext)

  const logoutFunc = () => {
        handleLogout();
      };
  return (
    <div className='navbar w-full bg-base-400 shadow-md  px-4 '>

      <div className='container mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <span className='font-bold text-2xl rounded-md p-2 hover:bg-green-300 hover:text-white'>Study<span className="text-green-500">Stream</span></span>
        </Link>
      </div>
      <div className='flex-none text-center'>
        <ul className='menu menu-horizontal px-1 justify-center flex '>
          <li >
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
        {user && (
          <div className='dropdown dropdown-end z-50'>
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
                <Link to='/my-attempt-assign'>My Attempted Assignments </Link>
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
      </div>
  
    </div>
  )
}

export default Navbar

