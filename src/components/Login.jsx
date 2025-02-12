import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const { googleLogin, handleLogin, setUser } = useContext(AuthContext);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const LogGoogle = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        toast.error("Google Login failed. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // Reset errors
    setEmailError(null);
    setPasswordError(null);

    let isValid = true;

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    // Validate Password
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    }

    if (!isValid) return; // Stop submission if validation fails

    handleLogin(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful!");

        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setPasswordError("Invalid email or password. Please try again.");
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-10 mt-14">
      <div className="card bg-base-100 shadow-2xl w-[980px] lg:max-w-xl max-w-sm md:max-w-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login Your Account</h2>

        <form onSubmit={handleSubmit} className="card-body">
          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label"> 
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            <Link to="/passreset" className="text-sm text-left text-blue-600 mt-1">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="form-control">
            <button className="btn bg-green-400 hover:bg-green-600 hover:text-white text-xl text-white w-full">
              Login
            </button>
          </div>

          {/* OR Divider */}
          <div className="divider">OR</div>

          {/* Google Login Button */}
          <button
            onClick={LogGoogle}
            className="btn btn-outline w-full flex items-center text-lg justify-center gap-2"
          >
            <FaGoogle className="text-2xl" />
            Continue with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
