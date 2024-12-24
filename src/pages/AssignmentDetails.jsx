import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import AuthContext from "../components/AuthContext";

const AssignmentDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [assignment, setAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submissionLink, setSubmissionLink] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    fetchAssignmentDetails();
  }, [id]);

  const fetchAssignmentDetails = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allAssignment/${id}`);
    setAssignment(data);
  };
  console.log(assignment);

  const handleSubmit = async () => {
    const submissionData = {
      assignmentId: id,
      userEmail: user?.email,
      googleDocLink: submissionLink,
      note,
    };
    console.log(submissionData);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/submitAssignment`, submissionData);
      toast.success('Assignment submitted successfully!');
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to submit assignment: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto my-8 ">
      {assignment ? (
        <div className="bg-white p-6 rounded shadow-md ">
            <img src={assignment.thumbnail} alt={assignment.title} className="w-full h-[600px] object-cover mb-4 rounded" />
          <h1 className="text-2xl font-bold">{assignment.title}</h1>
          <p className="mt-2 text-gray-600">{assignment.description}</p>
          <p className="mt-2">Marks: {assignment.marks}</p>
          <p className={`mt-2 text-sm ${
            assignment.difficulty === 'easy'
              ? 'text-green-500'
              : assignment.difficulty === 'medium'
              ? 'text-yellow-500'
              : 'text-red-500'
          }`}>
            Difficulty: {assignment.difficulty}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Take Assignment
          </button>
         
        </div>
      ) : (
        <p>Loading assignment details...</p>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mb-48">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Submit Assignment</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Google Docs Link</label>
                <input
                  type="url"
                  className="w-full p-2 border rounded"
                  value={submissionLink}
                  onChange={(e) => setSubmissionLink(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quick Note</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;
