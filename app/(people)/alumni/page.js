'use client';

import { useState } from 'react';

export default function AlumniStudents() {
  const alumni = [
    {
      name: "Santosh Singh",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2019",
      currentPosition: "Not Available",
      subject: "Not Available",
      website: "https://www.linkedin.com/in/santosh-singh-42915473/",
      image: "/alumni/user.gif", // Replace with actual image URL
    },
    {
      name: "Vinay Chindu",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2024",
      currentPosition: "Power Research and Development Consultants Pvt Ltd",
      subject: "power system modelling specifically EMT modelling",
      website: "https://www.linkedin.com/in/vinay-chindu-7b43b253/",
      image: "/alumni/user.gif", // Replace with actual image URL
    },
    {
      name: "Dr. Kevin Gujjar",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2023",
      currentPosition: "R&D Senior Engineer at Hitachi Energy",
      subject: "Stability Analysis and Design of Wide-Area Damping Controllers",
      website: "https://www.linkedin.com/in/kevin-gajjar-ph-d-a4317b74/",
      image: "/alumni/kevin.jpeg", // Replace with actual image URL
    },
    {
      name: "Dr. Kaustav Dey",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2022",
      currentPosition: "L&T Technology Services",
      subject: "Power electronics and power system",
      website: "https://www.linkedin.com/in/kaustav-dey-ph-d-mieee-miet-4665a5110/",
      image: "/alumni/kaustav.jpeg", // Replace with actual image URL
    },
    {
      name: "Rathin Dholakiya",
      degree: "MTech in Electrical Engineering",
      graduationYear: "2017",
      currentPosition: "Team Lead, Energy Market Analyst at Energy Exemplar",
      subject: "Power System modelling & analysis",
      website: "https://www.jessicawhite.com",
      image: "/alumni/rathin.jpeg", // Replace with actual image URL
    },
    {
      name: "Dr. Kunal Salunkhe",
      degree: "PhD in Electrical Engineeging",
      graduationYear: "2016",
      currentPosition: "Senior System Performance Engineer",
      subject: "Power System",
      website: "https://www.linkedin.com/in/dr-kunal-salunkhe-7a511b119/",
      image: "/alumni/kunal.jpeg", // Replace with actual image URL
    },
    {
      name: "Dr. Mukesh Das",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2016",
      currentPosition: "Power System Studies Specialist at Electranix Corporation",
      subject: "Electrical Engineering/Power system",
      website: "https://www.linkedin.com/in/mukesh-kumar-das-41479b34",
      image: "/alumni/mukesh.jpeg", // Replace with actual image URL
    },
    {
      name: "Dr. Ashwin Damle",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2011",
      currentPosition: "Director at Nayak Power Systems Pvt. Ltd.",
      subject: "Power electronics and Power system",
      website: "https://www.linkedin.com/in/ashwin-damle-03452a215/",
      image: "/alumni/ashwin.jpeg", // Replace with actual image URL
    },
    {
      name: "Dr. Elizabeth Cheriyan",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2011",
      currentPosition: "Power electronics",
      subject: "Specialized in Power and Energy Systems",
      website: "https://www.linkedin.com/in/dr-elizabeth-cheriyan-1959b3125/",
      image: "/alumni/user.gif", // Replace with actual image URL
    },
    {
      name: "Dr. Shilpi Kedia",
      degree: "PhD in Electrical Engineering",
      graduationYear: "2024",
      currentPosition: "not available",
      subject: "High power electronics converter",
      website: "https://www.linkedin.com/in/shilpi-kedia-7a7776b4/",
      image: "/alumni/user.gif", // Replace with actual image URL
    }
  ];
  

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);

  const openModal = (alumnus) => {
    setSelectedAlumnus(alumnus);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAlumnus(null);
  };

  return (
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Alumni 
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Meet our distinguished alumni who have gone on to make significant contributions to the field of electrical engineering and power systems.
        </p>

        {/* Alumni Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl relative"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={alumnus.image}
                  alt={alumnus.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{alumnus.name}</h3>
              <p className="text-gray-600 mb-2 text-center">{alumnus.degree} ({alumnus.graduationYear})</p>
              <p className="text-gray-600 mb-4 text-center">{alumnus.subject}</p>

              <p className="text-gray-600 mb-4 font-semibold">Current Position:</p>
              <p className="text-gray-500 mb-4">{alumnus.currentPosition}</p>

              <button
                className="text-blue-600 hover:text-blue-800 font-semibold mt-4 block mx-auto"
                onClick={() => openModal(alumnus)}
              >
                Contact
              </button>
            </div>
          ))}
        </div>

        {/* Contact Modal */}
        {modalOpen && selectedAlumnus && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-1/3 max-w-md relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 font-bold text-xl"
              >
                X
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact {selectedAlumnus.name}
              </h2>
              <p className="text-gray-600 mb-4">Website: <a href={selectedAlumnus.website} target="_blank" rel="noopener noreferrer" className="text-blue-600">{selectedAlumnus.website}</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
