
import { FaBook, FaVideo, FaPodcast } from 'react-icons/fa'; // Importing icons from React Icons

const ResourceLibrary = () => {
  const resources = [
    {
      id: 1,
      icon: <FaBook className="text-blue-500 text-6xl" />,
      title: 'Books',
      description: 'Browse through a collection of eBooks and PDFs for learning.',
    },
    {
      id: 2,
      icon: <FaVideo className="text-yellow-500 text-6xl" />,
      title: 'Videos',
      description: 'Watch educational videos and tutorials on various topics.',
    },
    {
      id: 3,
      icon: <FaPodcast className="text-green-500 text-6xl" />,
      title: 'Podcasts',
      description: 'Listen to podcasts and discussions on various subjects.',
    },
  ];

  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Resource Library</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              {resource.icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{resource.title}</h3>
            <p className="text-white text-center">{resource.description}</p>
            <div className="mt-4 text-center">
              <button className="btn btn-primary">Explore More Here</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceLibrary;
