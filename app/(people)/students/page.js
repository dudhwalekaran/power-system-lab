'use client';

import { useState } from 'react';

export default function CurrentStudents() {
  const students = [
    {
      name: "Deepti Shakya",
      degree: "PhD in Power system",
      project: "Research area power system",
      email: "Not available",
      phone: "Not available",
      image: "/students/deepti.jpeg", // Replace with actual image URL
    },
    {
      name: "Henil Shah",
      degree: "phD in Power system",
      project: "Design and Testing of Linear Electric Motor",
      email: "not available",
      phone: "not available",
      image: "/students/henil.jpeg", // Replace with actual image URL
    },
    {
      name: "Mriganka Mukharjee",
      degree: "PhD in Power system",
      project: "Voltage Stability monitoring using Lyapunov Exponent",
      email: "not available",
      phone: "not available",
      image: "/students/mriganka.jpeg", // Replace with actual image URL
    },
    {
      name: "Suraj S",
      degree: "phD in Electrical and Electronics engineering",
      project: "Modified Photovoltaic Electric Spring",
      email: "not available",
      phone: "not available",
      image: "/students/suraj.jpeg", // Replace with actual image URL
    },
    {
      name: "Mithila Aithagani",
      degree: "PhD in Power system",
      project: "not available ",
      email: "not available",
      phone: "not available",
      image: "/students/mithila.jpeg", // Replace with actual image URL
    },
    {
      name: "Disha Goradiya",
      degree: "PhD in Power system",
      project: "not available ",
      email: "not available",
      phone: "not available",
      image: "/students/disha.jpeg", // Replace with actual image URL
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
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Current Students
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Meet the current students working on groundbreaking research projects in the Power Systems Lab.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{student.name}</h3>
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
              <p className="text-gray-600 mb-4">Email: <a href={`mailto:${selectedStudent.email}`} className="text-blue-600">{selectedStudent.email}</a></p>
              <p className="text-gray-600">Phone: <a href={`tel:${selectedStudent.phone}`} className="text-blue-600">{selectedStudent.phone}</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
