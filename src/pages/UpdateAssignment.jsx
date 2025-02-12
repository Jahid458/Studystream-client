import axios from 'axios';
import { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import AxiosSecure from "../hooks/AxiosSecure";

const UpdateAssignment = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const { id } = useParams();
  const [assignments, setAssignments] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const axiosInter = AxiosSecure();

  useEffect(() => {
    fetchAllAssignments();
  }, []);

  const fetchAllAssignments = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allAssignment/${id}`);
    setAssignments(data);
  };

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }
    if (!formData.thumbnail.trim()) {
      newErrors.thumbnail = 'Thumbnail URL is required.';
    } else if (!/^https?:\/\/.+\..+$/.test(formData.thumbnail)) {
      newErrors.thumbnail = 'Please enter a valid URL.';
    }
    if (!formData.marks || formData.marks <= 0 || formData.marks > 60) {
      newErrors.marks = 'Marks must be greater than 0 and less than or equal to 60.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required.';
    }
    if (!formData.difficulty) {
      newErrors.difficulty = 'Please select a difficulty level.';
    }
    if (!dueDate || new Date(dueDate) < new Date()) {
      newErrors.dueDate = 'Due date must be in the future.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = parseFloat(form.marks.value);
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;

    const formData = { title, description, marks, thumbnail, difficulty };

    if (!validateForm(formData)) {
      toast.error('Please correct the errors before submitting.');
      return;
    }

    try {
      await axiosInter.put(`${import.meta.env.VITE_API_URL}/updateAssignment1/${id}`, formData);
      form.reset();
      toast.success('Data Updated Successfully');
      navigate('/Assignments');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update assignment.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12 ">
      <section className="p-6 mx-auto bg-white rounded-md shadow-md mt-7">
        <h2 className="text-lg font-semibold text-gray-700 capitalize text-center">Update Assignment</h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Title */}
            <div>
              <label className="text-gray-700" htmlFor="title">
                Assignment Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={assignments.title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="text-gray-700" htmlFor="thumbnail">
                Thumbnail Image URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="url"
                defaultValue={assignments.thumbnail}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
              {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail}</p>}
            </div>

            {/* Marks */}
            <div>
              <label className="text-gray-700" htmlFor="marks">
                Marks
              </label>
              <input
                id="marks"
                name="marks"
                type="number"
                defaultValue={assignments.marks}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
              {errors.marks && <p className="text-red-500 text-sm">{errors.marks}</p>}
            </div>

            {/* Difficulty Level */}
            {assignments.difficulty && (
              <div>
                <label className="text-gray-700" htmlFor="difficulty">
                  Difficulty Level
                </label>
                <select
                  name="difficulty"
                  id="difficulty"
                  defaultValue={assignments.difficulty}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                {errors.difficulty && <p className="text-red-500 text-sm">{errors.difficulty}</p>}
              </div>
            )}

            {/* Due Date */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Due Date</label>
              <DatePicker
                className="border px-4 py-2 rounded-md text-gray-700"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                required
              />
              {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              defaultValue={assignments.description}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              required
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Update Assignment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateAssignment;
