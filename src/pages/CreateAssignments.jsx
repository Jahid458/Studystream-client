
import {  useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import AuthContext from '../components/AuthContext';
import AxiosSecure from '../hooks/AxiosSecure';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';

// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const AddAssignment = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const axiosInter = AxiosSecure();
  

  // const navigate = useNavigate();

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
      email
     
    };

    // console.log('Submitted  Data:', formData);

    try {
      // Make a POST request
      
      await  axiosInter.post(`${import.meta.env.VITE_API_URL}/assignmentcreate`, formData);
   
      // Reset form
      form.reset();
      setDueDate(new Date()); // Reset due date
      toast.success('Assignment added successfully!');

      // Navigate to another page (e.g., assignments list)
      // navigate('/my-assignments');
    } catch (error) {
      toast.error('Failed to add assignment: ' + error.message);
    }
  };

  
  

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className='p-6 mx-auto bg-white rounded-md shadow-md'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize'>Add Assignment</h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            {/* Title */}
            <div>
              <label className='text-gray-700' htmlFor='title'>
                Assignment Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                required
              />
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className='text-gray-700' htmlFor='thumbnail'>
                Thumbnail Image URL
              </label>
              <input
                id='thumbnail'
                name='thumbnail'
                type='url'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                required
              />
            </div>

            {/* Marks */}
            <div>
              <label className='text-gray-700' htmlFor='marks'>
                Marks
              </label>
              <input
                id='marks'
                name='marks'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                required
              />
            </div>

            {/* Difficulty Level */}
            <div>
              <label className='text-gray-700' htmlFor='difficulty'>
                Difficulty Level
              </label>
              <select
                name='difficulty'
                id='difficulty'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                required
              >
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>

            {/* Due Date */}
            <div className='flex flex-col gap-2'>
              <label className='text-gray-700'>Due Date</label>
              <DatePicker
                className='border px-4 py-2 rounded-md text-gray-700'
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700' htmlFor='description'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows='4'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500'
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
