// import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../components/AuthContext';
import axios from 'axios';

const MyAttemptAssign = () => {
  const { user } = useContext(AuthContext); // Get logged-in user's info
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/mysubmitassignment/${user?.email}`
        );
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching submitted assignments:', error);
      }
    };
    fetchAssignments();
  }, [user?.email]);
  console.log(assignments);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">My Submitted Assignments</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Marks</th>
              <th className="px-4 py-2 border">Obtained Marks</th>
              <th className="px-4 py-2 border">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment._id}>
                <td className="px-4 py-2 border">{assignment.tittle}</td>
                <td className="px-4 py-2 border">{assignment.status}</td>
                <td className="px-4 py-2 border">{assignment.marks}</td>
                <td className="px-4 py-2 border">{assignment.obtainedMarks || 'N/A'}</td>
                <td className="px-4 py-2 border">{assignment.feedback || 'No Feedback'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAttemptAssign;
