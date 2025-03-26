'use client';

import { useState } from 'react'
import Image from 'next/image'

const labMembers = [
  {
    name: 'K Navaneeth',
    title: 'Research Project Assistant',
    bio: 'Power and Energy Systems',
    email: 'Not Available',
    image: '/staff/navaneeth.jpg', // Replace with actual path
    linkedin: 'https://www.linkedin.com/in/k-navaneeth-a26993192/',
  },
  {
    name: 'Harshala Kanade',
    title: 'Senior Project Assistant',
    bio: '',
    email: 'Not Available',
    image: '/staff/harshala.jpg', // Replace with actual path
    linkedin: 'Not available',
  },
  // Add more lab members here...
]

export default function LabMembersPage() {
  const [selectedMember, setSelectedMember] = useState(null)

  const handleOpenModal = (member) => {
    setSelectedMember(member)
  }

  const handleCloseModal = () => {
    setSelectedMember(null)
  }

  return (
    <div>
      {/* Lab Members Grid */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Meet Our Lab Members
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {labMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition duration-300">
                {/* Image */}
                <div className="mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                  />
                </div>
                {/* Name and Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.title}</p>
                {/* Bio */}
                <p className="text-sm text-gray-500 mt-4">{member.bio}</p>
                {/* Contact Information */}
                <div className="mt-6 space-y-2 text-gray-700">
                  <p>Email: <a href={`mailto:${member.email}`} className="text-indigo-600 hover:text-indigo-800">{member.email}</a></p>
                </div>
                {/* More Info Button */}
                <button 
                  className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300"
                  onClick={() => handleOpenModal(member)}
                >
                  More Info
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for More Info */}
      {selectedMember && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 max-w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedMember.name}</h3>
            <p className="text-lg text-gray-600 mb-4">{selectedMember.title}</p>
            <p className="text-sm text-gray-500 mb-4">{selectedMember.bio}</p>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>Email: <a href={`mailto:${selectedMember.email}`} className="text-indigo-600 hover:text-indigo-800">{selectedMember.email}</a></p>
              <p>LinkedIn: <a href={selectedMember.linkedin} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">{selectedMember.linkedin}</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
