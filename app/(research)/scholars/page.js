'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Scholars() {
  const scholars = [
    {
      name: "Dr. John Doe",
      title: "Professor of Electrical Engineering",
      researchAreas: ["Smart Grid Technologies", "Power System Stability", "Energy Storage Systems"],
      email: "johndoe@mit.edu",
      profileLink: "/scholars/john-doe",
      imageUrl: "/images/john-doe.jpg", // Add the profile image URL here
    },
    {
      name: "Dr. Jane Smith",
      title: "Associate Professor of Electrical Engineering",
      researchAreas: ["Renewable Energy Integration", "Advanced Power Electronics", "Electric Vehicles"],
      email: "janesmith@mit.edu",
      profileLink: "/scholars/jane-smith",
      imageUrl: "/images/jane-smith.jpg", // Add the profile image URL here
    },
    {
      name: "Dr. Robert Brown",
      title: "Research Fellow",
      researchAreas: ["Power Electronics", "Smart Grid Control", "Grid Resilience"],
      email: "robertbrown@mit.edu",
      profileLink: "/scholars/robert-brown",
      imageUrl: "/images/robert-brown.jpg", // Add the profile image URL here
    },
    {
      name: "Dr. Emily White",
      title: "PhD Candidate",
      researchAreas: ["Energy Storage", "Electric Vehicles", "Grid Optimization"],
      email: "emilywhite@mit.edu",
      profileLink: "/scholars/emily-white",
      imageUrl: "/images/emily-white.jpg", // Add the profile image URL here
    },
    {
      name: "Dr. Michael Green",
      title: "Postdoctoral Researcher",
      researchAreas: ["IoT in Power Grids", "Grid Stability", "Cybersecurity in Energy Systems"],
      email: "michaelgreen@mit.edu",
      profileLink: "/scholars/michael-green",
      imageUrl: "/images/michael-green.jpg", // Add the profile image URL here
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Scholars</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg">
          Our team of esteemed scholars, including professors, postdocs, and PhD candidates, are at the forefront of research in electrical engineering and power systems.
        </p>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {scholars.map((scholar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                {/* Scholar Profile Image */}
                <img 
                  src={scholar.imageUrl} 
                  alt={scholar.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{scholar.name}</h3>
                  <p className="text-gray-600">{scholar.title}</p>
                </div>
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">Research Areas:</strong>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {scholar.researchAreas.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Email: </strong>
                <a href={`mailto:${scholar.email}`} className="text-gray-800 hover:text-gray-600">{scholar.email}</a>
              </div>
              <Link
                href={scholar.profileLink}
                className="inline-block mt-4 text-gray-800 font-semibold hover:text-gray-600"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
