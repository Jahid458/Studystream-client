/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaEnvelope, FaGoogle, FaImage, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { googleLogin, handleRegister, updateUserProfile, setUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState(null);
  const [photoError, setPhotoError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const LogGoogle = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registered",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {
        setNameError(null);
        setPhotoError(null);
        setEmailError(null);
        setPasswordError("Google Login failed. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // error reset
    setNameError(null);
    setPhotoError(null);
    setEmailError(null);
    setPasswordError(null);

    let isValid = true;

    // Full name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Name can only contain letters and spaces.");
      isValid = false;
    }

    //photo URL validations
    if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(photo)) {
      setPhotoError("Please enter a valid photo URL.");
      isValid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    // Password Validations
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, including one uppercase, one lowercase, and one digit or special character."
      );
      isValid = false;
    }

    if (!isValid) return; 


        // Firebase Resgister with email and Password
    handleRegister(email, password)
      .then((res) => {
        updateUserProfile({ displayName: name, photoURL: photo });
        setUser(res.user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch(() => {
        setPasswordError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 bg-base-200">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
         
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
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>

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
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          
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
            {photoError && <p className="text-red-500 text-sm">{photoError}</p>}
          </div>

 
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center gap-1">
                <FaLock /> Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>

   
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>


        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-semibold">
            Login
          </Link>
        </p>

        <div className="divider">OR</div>


        <button
          onClick={LogGoogle}
          className="btn btn-outline w-full flex items-center text-lg justify-center gap-2"
        >
          <FaGoogle className="text-2xl" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
