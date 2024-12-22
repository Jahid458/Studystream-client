/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaEnvelope, FaGoogle, FaImage, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import Swal from "sweetalert2";


const Register = () => {
//handleRegister,updateUserProfile,setUser
  const {googleLogin,handleRegister,updateUserProfile,setUser} = useContext(AuthContext);
  const [error,setError] = useState();
  const navigate = useNavigate();


  const LogGoogle = () => {

    googleLogin()
    .then((res) => {
      console.log(res.user)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Resgister",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
    .catch((err) => {
      console.log(err, "Invalid Login");
    });
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,photo,email,password)


    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    // if(!passwordRegex.test(password)){
    //    setError("PassWord Should be one upperCase, one lowercase and at least 6 character");
    //    return 
    // }
  
    // Add registration logic here
    handleRegister(email,password)
    .then((res) => {
      setUser(res.user)
      updateUserProfile({displayName:name,photoURL:photo})
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Register Successfull!",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(res.user)
    })
    .then(()=>{
      setUser({displayName:name,photoURL:photo})
    })

    .catch(err => console.log("Invalid Register",err))
    
  };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 bg-base-200 mb-3">
        <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
          {/*  */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FaUser /> Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
  
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FaEnvelope /> Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
  
            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FaImage /> Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>
  
            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FaLock /> Password
                </span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>
               {
                error && <p className="text-red-400">{error}</p>
              }
  
            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>
          </form>
  
          {/* Login Link */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 font-semibold">
              Login
            </Link>
          </p>
            {/* OR Divider */}
            <div className="divider">OR</div>
  
            {/* Google Login Button */}
            <button
              onClick={LogGoogle}
              className="btn btn-outline w-full flex items-center text-lg justify-center gap-2"
            >
              <FaGoogle className="text-2xl " />
              Continue with Google
            </button>
        </div>
  
        
      </div>
    );
};

export default Register;