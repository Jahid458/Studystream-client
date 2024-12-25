import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../components/AuthContext';
import toast from 'react-hot-toast';

const PendingAssignments = () => { 
  const { user } = useContext(AuthContext); 
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchPendingAssignments = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/pendingAssignments`);
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching pending assignments:', error);
      }
    };
    fetchPendingAssignments();
  }, []);

  const handleMarkAssignment = (assignmentId) => {
    setSelectedAssignment(assignmentId);
    setModalOpen(true);  
  };

  const handleSubmitMarks = async () => {
    if (!marks || !feedback) {
      toast.success('Please enter both marks and feedback');
      return;
    }

    try {
 await axios.patch(
        `${import.meta.env.VITE_API_URL}/updateAssignment/${selectedAssignment}`,
        {
          email: user.email,
          marks,
          feedback,
        }
      );

      setAssignments(assignments.map((assignment) =>
        assignment._id === selectedAssignment ? { ...assignment, status: 'completed' } : assignment
      ));
      toast.success('Marks updated successfully');
      setModalOpen(false);  
    } catch (error) {
        toast.error('Error updating marks:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Pending Assignments</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Submitted By</th>
              <th className="px-4 py-2 border">Marks</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment._id}>
                <td className="px-4 py-2 border">{assignment.tittle}</td>
                <td className="px-4 py-2 border">{assignment.userEmail}</td>
                <td className="px-4 py-2 border">{assignment.marks}</td>
                <td className="px-4 py-2 border">
                  {assignment.userEmail !== user.email && assignment.status === 'pending' && (
                    <button
                      onClick={() => handleMarkAssignment(assignment._id)}
                      className="btn btn-accent text-white py-1 px-3 rounded"
                    >
                      Give Mark
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white w-96 rounded shadow-lg p-6">
      <div className="text-lg font-bold mb-4">Give Marks for Assignment</div>
      <div className="mb-4">
        <textarea
          placeholder="Enter marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Enter feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handleSubmitMarks}
          className="btn btn-primary text-white py-1 px-4 rounded hover:bg-green-600"
        >
          Submit
        </button>
        <button
          onClick={() => setModalOpen(false)}
          className="btn btn-secondary text-white py-1 px-4 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default PendingAssignments;
