import axios from "axios";
import { useEffect, useState } from "react";

const Assignments = () => {
    const[assignments,setAssignments] = useState([]);
  useEffect(()=>{
    fetchAllAssignments()
  },[])

  const fetchAllAssignments = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allAssignment`);
    setAssignments(data)
  }

  console.log(assignments);



    return (
<div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Assignments</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
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
              <p className={`mt-1 text-sm ${
                assignment.difficulty === 'easy'
                  ? 'text-green-500'
                  : assignment.difficulty === 'medium'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}>
                Difficulty: {assignment.difficulty}
              </p>
              <div className="flex justify-between mt-4">
                <button
                //   onClick={() => handleDelete(assignment.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => console.log('Update:', assignment.id)}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => console.log('View:', assignment.id)}
                  className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Assignments;