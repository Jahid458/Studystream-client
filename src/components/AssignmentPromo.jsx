
import { Link } from "react-router-dom";
import img from "../../public/imagesdefa.jpg"; // Replace with your promotional image path
import { useContext } from "react";
import ThemeContext from "../themeProvider/ThemeContext";

const AssignmentPromo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mt-10">
      <div className="container mx-auto px-6 space-y-10 ">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3  lg:mb-0">
            <h1 className="text-4xl font-bold text-green-600 mb-4">
              Simplify Your Assignments with Ease!
            </h1>
            <p className={` ${theme === "light" ? 'text-gray-700' : "text-white" }text-lg  mb-6`}>assignmentImage
              Struggling with managing assignments? Our platform helps you stay
              organized, improve productivity, and achieve academic success.
              Access tools to create, submit, and track assignments seamlessly.
            </p>
            <Link to="/assignments">
              <button className="btn btn-primary px-6 py-3 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                Explore Assignments
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10">
            <img
              src={img}
              alt="Assignment Promo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
            Why Choose Our Assignment Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Easy Assignment Creation
              </h3>
              <p className="text-gray-600">
                Create assignments effortlessly with customizable templates and
                intuitive tools.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Keep track of your pending and completed tasks with real-time
                updates.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Collaboration Made Simple
              </h3>
              <p className="text-gray-600">
                Collaborate with teachers and classmates to complete group
                assignments seamlessly.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Grading and Feedback
              </h3>
              <p className="text-gray-600">
                Receive detailed feedback and grades for every submission, so
                you can improve.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Mobile-Friendly
              </h3>
              <p className="text-gray-600">
                Access assignments on the go with a responsive and mobile-first
                design.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Secure Submissions
              </h3>
              <p className="text-gray-600">
                Submit your assignments securely with robust data protection.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Ready to Get Started?
          </h2>
          <p className={`${theme == 'light' ? "text-gray-600" : "text-white"}text-lg  mb-6`}>
            Join our platform today and make assignment management stress-free!
          </p>
          <Link to="/register">
            <button className="btn btn-success px-8 py-3 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPromo;
