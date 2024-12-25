import { FaSearch, FaRegListAlt, FaHandshake } from "react-icons/fa";

function EducationJourney() {
  return (
    <div className=" py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Start your Online Education Journey</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Discover Section */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md">
            <FaSearch className="text-4xl text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Discover</h3>
          <p className="text-gray-500 mt-2 max-w-xs">
            Browse thousands of Assignment take your journey of Free Exams
          </p>
        </div>

        {/* Line connecting Discover to Compare */}
        <div className="hidden md:block w-20 border-t-2 border-green-500"></div>

        {/* Compare Section */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md">
            <FaRegListAlt className="text-4xl text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Compare</h3>
          <p className="text-gray-500 mt-2 max-w-xs">
            See Assignments lists and give the Assignment
          </p>
        </div>

        {/* Line connecting Compare to Connect */}
        <div className="hidden md:block w-20 border-t-2 border-green-500"></div>

        {/* Connect Section */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md">
            <FaHandshake className="text-4xl text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Connect</h3>
          <p className="text-gray-500 mt-2 max-w-xs">
            Anyone can Take Assignment and start journey Here
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationJourney;
