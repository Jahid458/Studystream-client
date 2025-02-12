

const teachers = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    experience: "10 years",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    subject: "Physics",
    experience: "8 years",
    email: "janesmith@example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    subject: "Chemistry",
    experience: "12 years",
    email: "michaeljohnson@example.com",
  },
  {
    id: 4,
    name: "Emily Davis",
    subject: "Biology",
    experience: "9 years",
    email: "emilydavis@example.com",
  },
  {
    id: 5,
    name: "Robert Brown",
    subject: "English",
    experience: "11 years",
    email: "robertbrown@example.com",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    subject: "History",
    experience: "7 years",
    email: "sarahwilson@example.com",
  },
  {
    id: 7,
    name: "David Martinez",
    subject: "Geography",
    experience: "6 years",
    email: "davidmartinez@example.com",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    subject: "Computer Science",
    experience: "5 years",
    email: "oliviataylor@example.com",
  },
  {
    id: 9,
    name: "James Anderson",
    subject: "Economics",
    experience: "13 years",
    email: "jamesanderson@example.com",
  },
  {
    id: 10,
    name: "Sophia Thomas",
    subject: "Psychology",
    experience: "14 years",
    email: "sophiathomas@example.com",
  }
];

const TeacherDetails = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-400 text-center mb-10 mt-20">Our Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="card bg-base-100 shadow-xl p-4">
            <div className="card-body">
              <div className="flex flex-col items-center text-center">
                <h2 className="card-title text-xl font-semibold text-gray-800">{teacher.name}</h2>
                <p className="text-gray-600">Subject: {teacher.subject}</p>
                <p className="text-gray-600">Experience: {teacher.experience}</p>
                <p className="text-gray-600">Email: {teacher.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDetails;
