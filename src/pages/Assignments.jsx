import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../components/AuthContext";
import AxiosSecure from "../hooks/AxiosSecure";
import toast from "react-hot-toast";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState(""); // Holds the value to be searched
  const axiosInter = AxiosSecure();

  const fetchFilteredAssignments = async (searchQuery) => {
    try {
      setLoading(true);
      const { data } = await axiosInter.get(
        `${
          import.meta.env.VITE_API_URL
        }/filteredAssignments?difficulty=${filter}&search=${searchQuery}`
      );
      setAssignments(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch filtered assignments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredAssignments(query);
  }, [filter, query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(searchText); // Update query only on form submission
  };

  const handleDelete = async (id) => {
    try {
      await axiosInter.delete(
        `${import.meta.env.VITE_API_URL}/deleteAssignment/${id}?email=${user.email}`
      );
      toast.success("Assignment deleted successfully.");
      fetchFilteredAssignments(query);
    } catch (error) {
      toast.error("Failed to delete assignment.", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
        <p className="text-gray-500 text-lg ml-4">Loading assignments...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 mt-20">
      <h1 className="text-2xl font-bold text-center mb-6">Assignments</h1>
      <form
        onSubmit={handleSearchSubmit}
        className=" justify-between items-center mb-6"
      >
        <input
          type="text"
          placeholder="Search assignments..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-md px-4 py-2 w-1/3"
        />
           <button
          type="submit"
          className="px-4 py-2 text-white rounded bg-green-500 "
        >
          Search
        </button>
       
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md px-4 py-2 ml-10"
        >
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      
      </form>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={assignment.thumbnail}
              alt={assignment.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{assignment.title}</h2>
              <p className="text-gray-600">Marks: {assignment.marks}</p>
              <p
                className={`mt-1 text-sm ${
                  assignment.difficulty === "easy"
                    ? "text-green-500"
                    : assignment.difficulty === "medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                Difficulty: {assignment.difficulty}
              </p>
              <div className="flex justify-between mt-4">
                {assignment.email === user?.email && (
                  <button
                    onClick={() => handleDelete(assignment._id)}
                    className="px-3 py-1 btn btn-error text-white text-sm rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                )}
                <Link to={`/allAssignment/${assignment._id}`}>
                  <button className="px-3 py-1 btn btn-primary text-white text-sm rounded hover:bg-blue-600">
                    Update
                  </button>
                </Link>
                <Link to={`/assignmentDetails/${assignment._id}`}>
                  <button className="px-3 py-1 btn btn-secondary text-white text-sm rounded hover:bg-green-600">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
