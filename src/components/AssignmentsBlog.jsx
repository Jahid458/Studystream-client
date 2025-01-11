import { useState } from "react";

const AssignmentsBlog = () => {
  // Example assignment data
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Math Assignment: Algebra Basics",
      description: "Solve 10 problems related to basic algebra concepts.",
      dueDate: "2025-01-15",
      status: "Pending",
    },
    {
      id: 2,
      title: "Science Assignment: Photosynthesis",
      description:
        "Write a 500-word essay explaining the process of photosynthesis.",
      dueDate: "2025-01-20",
      status: "Completed",
    },
    {
      id: 3,
      title: "History Assignment: World War II",
      description: "Create a timeline of major events during World War II.",
      dueDate: "2025-01-18",
      status: "Pending",
    },
  ]);

  return (
    <div className=" py-6 mt-5">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-green-600">
          Assignment Blog Section
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className={`p-6 rounded-lg shadow-md ${
                assignment.status === "Pending" ? "bg-yellow-100" : "bg-green-100"
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {assignment.title}
              </h2>
              <p className="text-gray-700 mb-3">{assignment.description}</p>
              <p className="text-gray-500">
                <strong>Due Date:</strong> {assignment.dueDate}
              </p>
              <p
                className={`font-bold mt-2 ${
                  assignment.status === "Pending"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                Status: {assignment.status}
              </p>
              {assignment.status === "Pending" && (
                <button
                  className="mt-4 btn btn-sm btn-primary"
                  onClick={() =>
                    setAssignments((prev) =>
                      prev.map((a) =>
                        a.id === assignment.id
                          ? { ...a, status: "Completed" }
                          : a
                      )
                    )
                  }
                >
                  Mark as Completed
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsBlog;
