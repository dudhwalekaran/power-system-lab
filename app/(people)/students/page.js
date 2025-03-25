"use client";

import { useState } from "react";

export default function CurrentStudents() {
  const students = [
    {
      name: "Deepti Shakya",
      degree: "PhD in Power system",
      project: "Research area power system",
      email: "Not available",
      LinkedIn: "https://www.linkedin.com/in/deepti-shakya-9a9916a9/",
      image: "/students/deepti.jpeg", // Replace with actual image URL
    },
    {
      name: "Henil Shah",
      degree: "PhD in Power system",
      project: "Design and Testing of Linear Electric Motor",
      email: "not available",
      LinkedIn: "https://www.linkedin.com/in/henil-shah-3a958b184/",
      image: "/students/henil.jpeg", // Replace with actual image URL
    },
    {
      name: "Mriganka Mukharjee",
      degree: "PhD in Power system",
      project: "Voltage Stability monitoring using Lyapunov Exponent",
      email: "not available",
      LinkedIn: "https://www.linkedin.com/in/mriganka-mukherjee-2670a699/",
      image: "/students/mriganka.jpeg", // Replace with actual image URL
    },
    {
      name: "Suraj S",
      degree: "PhD in Electrical and Electronics engineering",
      project: "Modified Photovoltaic Electric Spring",
      email: "not available",
      LinkedIn: "https://www.linkedin.com/in/suraj-s-a81aa61b3/",
      image: "/students/suraj.jpeg", // Replace with actual image URL
    },
    {
      name: "Mithila Aithagani",
      degree: "PhD in Power system",
      project: "not available ",
      email: "not available",
      LinkedIn: "https://www.linkedin.com/in/aithagani-mithila-033467232/",
      image: "/students/mithila.jpeg", // Replace with actual image URL
    },
    {
      name: "Disha Goradiya",
      degree: "PhD in Power system",
      project: "not available ",
      email: "not available",
      LinkedIn: "https://www.linkedin.com/in/disha-goradiya-bb633bb9/",
      image: "/students/disha.jpeg", // Replace with actual image URL
    },
    {
      name: "Mrinal Kanti Dey",
      degree: "PhD in Power system",
      project: "not available ",
      email: "not available",
      LinkedIn: "https://www.linkedin.com/in/mrinal-kanti-dey-4a685b15b/",
      image: "/students/mrinal.jpg", // Replace with actual image URL
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Meet Our Lab Students
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Discover the talented students driving innovative research and
          development in the Power Systems Lab, shaping the future of power
          systems and energy solutions.
        </p>

        {/* Students Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl relative"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {student.name}
              </h3>
              <p className="text-gray-600 mb-4 text-center">{student.degree}</p>
              <p className="text-gray-600 mb-4 font-semibold">Project:</p>
              <p className="text-gray-500 mb-4">{student.project}</p>

              <button
                className="text-blue-600 hover:text-blue-800 font-semibold mt-4 block mx-auto"
                onClick={() => openModal(student)}
              >
                Contact
              </button>
            </div>
          ))}
        </div>

        {/* Contact Modal */}
        {modalOpen && selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-1/3 max-w-md relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 font-bold text-xl"
              >
                X
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact {selectedStudent.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Email:{" "}
                <a
                  href={`mailto:${selectedStudent.email}`}
                  className="text-blue-600"
                >
                  {selectedStudent.email}
                </a>
              </p>
              <p className="text-gray-600">
                LinkedIn:{" "}
                <a
                  href={`tel:${selectedStudent.LinkedIn}`}
                  className="text-blue-600"
                >
                  {selectedStudent.LinkedIn}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
