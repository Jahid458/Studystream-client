import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import AuthContext from "../components/AuthContext";
import AxiosSecure from "../hooks/AxiosSecure";

const AddAssignment = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const axiosInter = AxiosSecure();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!formData.thumbnail.trim()) {
      newErrors.thumbnail = "Thumbnail URL is required.";
    } else if (!/^https?:\/\/.+\..+$/.test(formData.thumbnail)) {
      newErrors.thumbnail = "Please enter a valid URL.";
    }
    if (!formData.marks || formData.marks <= 0 || formData.marks > 60) {
      newErrors.marks =
        "Marks must be greater than 0 and less than or equal to 60.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (!formData.difficulty) {
      newErrors.difficulty = "Please select a difficulty level.";
    }
    if (!dueDate || new Date(dueDate) < new Date()) {
      newErrors.dueDate = "Due date must be in the future.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = parseFloat(form.marks.value);
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const email = user?.email;

    const formData = {
      title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate,
      email,
    };

    if (!validateForm(formData)) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    try {
      await axiosInter.post(
        `${import.meta.env.VITE_API_URL}/assignmentcreate`,
        formData
      );
      form.reset();
      setDueDate(new Date());
      toast.success("Assignment added successfully!");
    } catch (error) {
      toast.error("Failed to add assignment: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] ">
      <section className="p-6 mx-auto bg-white rounded-md shadow-md mt-32 mb-24">
        <h2 className="text-lg font-semibold text-gray-700 capitalize text-center">
          Add Assignment
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="title">
                Assignment Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.title ? "border-red-500" : "border-gray-200"
                } rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700" htmlFor="thumbnail">
                Thumbnail Image URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="url"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.thumbnail ? "border-red-500" : "border-gray-200"
                } rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
              />
              {errors.thumbnail && (
                <p className="text-red-500 text-sm">{errors.thumbnail}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700" htmlFor="marks">
                Marks
              </label>
              <input
                id="marks"
                name="marks"
                type="number"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.marks ? "border-red-500" : "border-gray-200"
                } rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
              />
              {errors.marks && (
                <p className="text-red-500 text-sm">{errors.marks}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700" htmlFor="difficulty">
                Difficulty Level
              </label>
              <select
                name="difficulty"
                id="difficulty"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.difficulty ? "border-red-500" : "border-gray-200"
                } rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
              >
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              {errors.difficulty && (
                <p className="text-red-500 text-sm">{errors.difficulty}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Due Date</label>
              <DatePicker
                className={`border px-4 py-2 rounded-md text-gray-700 ${
                  errors.dueDate ? "border-red-500" : "border-gray-200"
                }`}
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
              />
              {errors.dueDate && (
                <p className="text-red-500 text-sm">{errors.dueDate}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                errors.description ? "border-red-500" : "border-gray-200"
              } rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white  btn btn-secondary rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Submit Assignment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddAssignment;
