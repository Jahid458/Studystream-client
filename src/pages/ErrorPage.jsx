import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../themeProvider/ThemeContext";

const ErrorPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "light" ? "bg-green-100 text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for doesn't exist.</p>
      <img
        src="./404_page_cover.jpg"
        alt="Error Illustration"
        className="w-1/2 max-w-md my-6"
      />
      <Link
        to="/"
        className="px-6 py-3 rounded-md text-white font-semibold shadow-md transition-transform transform hover:scale-105"
        style={{
          backgroundColor: theme === "light" ? "#22c55e" : "#1e293b",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
