'use client';

import { useState } from 'react'
import Image from 'next/image'

const professors = [
  {
    name: 'Dr. John Doe',
    title: 'Professor of Electrical Engineering',
    bio: 'Dr. John Doe leads the MIT Power Systems Lab and has over 20 years of experience in the integration of renewable energy in electrical grids. His research focuses on the challenges of smart grid systems, energy storage, and the use of artificial intelligence for grid optimization.',
    email: 'john.doe@mit.edu',
    phone: '+1 (123) 456-7890',
    image: '/images/john-doe.jpg', // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/john-doe',
    researchgate: 'https://www.researchgate.net/profile/John-Doe',
    publications: [
      { title: 'Smart Grid: A Comprehensive Approach', link: 'https://link-to-publication.com' },
      { title: 'AI in Energy Systems', link: 'https://link-to-publication.com' }
    ],
    researchAreas: ['Smart Grids', 'Renewable Energy', 'AI in Power Systems'],
  },
  {
    name: 'Dr. Jane Smith',
    title: 'Associate Professor of Electrical Engineering',
    bio: 'Dr. Jane Smith specializes in power electronics and the integration of renewable energy sources into existing grid infrastructure. Her current research focuses on improving the stability and efficiency of energy distribution networks.',
    email: 'jane.smith@mit.edu',
    phone: '+1 (987) 654-3210',
    image: '/images/jane-smith.jpg', // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/jane-smith',
    researchgate: 'https://www.researchgate.net/profile/Jane-Smith',
    publications: [
      { title: 'Power Electronics for Renewable Integration', link: 'https://link-to-publication.com' },
      { title: 'Grid Stability with Renewables', link: 'https://link-to-publication.com' }
    ],
    researchAreas: ['Power Electronics', 'Grid Stability', 'Energy Distribution Networks'],
  },
  // Add more professors here...
]

export default function LabProfessorsPage() {
  const [selectedProfessor, setSelectedProfessor] = useState(null)

  const handleOpenModal = (professor) => {
    setSelectedProfessor(professor)
  }

  const handleCloseModal = () => {
    setSelectedProfessor(null)
  }

  const handleModalClick = (e) => {
    // Close modal if the user clicks outside the modal content area
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  return (
    <div>
      {/* Lab Professors Grid */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Meet Our Professors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {professors.map((professor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition duration-300">
                {/* Image */}
                <div className="mb-6">
                  <Image
                    src={professor.image}
                    alt={professor.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                  />
                </div>
                {/* Name and Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{professor.name}</h3>
                <p className="text-lg text-gray-600">{professor.title}</p>
                {/* Bio */}
                <p className="text-sm text-gray-500 mt-4">{professor.bio}</p>
                {/* Contact Information */}
                <div className="mt-6 space-y-2 text-gray-700">
                  <p>Email: <a href={`mailto:${professor.email}`} className="text-indigo-600 hover:text-indigo-800">{professor.email}</a></p>
                  <p>Phone: {professor.phone}</p>
                </div>
                {/* More Info Button */}
                <button
                  className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300"
                  onClick={() => handleOpenModal(professor)}
                >
                  More Info
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for More Info */}
      {selectedProfessor && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick} // Close modal on outside click
        >
          <div className="bg-white p-8 rounded-lg w-full sm:w-[600px] max-w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedProfessor.name}</h3>
            <p className="text-lg text-gray-600 mb-4">{selectedProfessor.title}</p>
            <p className="text-sm text-gray-500 mb-4">{selectedProfessor.bio}</p>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>Email: <a href={`mailto:${selectedProfessor.email}`} className="text-indigo-600 hover:text-indigo-800">{selectedProfessor.email}</a></p>
              <p>Phone: {selectedProfessor.phone}</p>
              <p>LinkedIn: <a href={selectedProfessor.linkedin} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">{selectedProfessor.linkedin}</a></p>
              <p>ResearchGate: <a href={selectedProfessor.researchgate} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">{selectedProfessor.researchgate}</a></p>
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mt-6">Publications</h4>
            <ul className="mt-2 space-y-2">
              {selectedProfessor.publications.map((pub, index) => (
                <li key={index}>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">{pub.title}</a>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mt-6">Research Areas</h4>
            <ul className="mt-2 space-y-1">
              {selectedProfessor.researchAreas.map((area, index) => (
                <li key={index} className="text-gray-600">{area}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
