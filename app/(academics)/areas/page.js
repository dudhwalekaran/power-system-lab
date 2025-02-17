'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Academics() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject === selectedSubject ? null : subject);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-24 bg-contain bg-center"
        style={{
          backgroundImage: 'url("/images/sinwave1.avif")',
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Academics at IIT Power Systems Lab
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the cutting-edge academic programs and research
            in the filed of electrical engineering, focusing on power system, <br />
            renewable energy, and more.
          </p>
        </div>
      </section>

      {/* Academics Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Academic Programs</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            The MIT Power Systems Lab offers a variety of advanced programs and courses designed to advance the understanding of power systems, energy systems, and grid stability.
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">Academic Subjects</h2>

          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {['Power Systems Engineering', 'Renewable Energy Integration', 'Smart Grids', 'Energy Storage Systems', 'Electrical Machines', 'Power Electronics'].map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer" onClick={() => handleSubjectClick(subject)}>
                <h3 className="text-xl font-semibold mb-4">{subject}</h3>
                <div className={`text-sm text-gray-700 space-y-2 transition-all duration-500 ease-in-out ${selectedSubject === subject ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p>Introduction to {subject}, covering the following key topics:</p>
                  <ul className="list-disc pl-5">
                    <li>Fundamental principles and theories</li>
                    <li>Advanced modeling and analysis techniques</li>
                    <li>Applications in real-world scenarios</li>
                    <li>Case studies and ongoing research</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      {selectedSubject && (
        <section className="py-24 bg-white">
          <div className="container mx-auto text-center px-6">
            <h3 className="text-2xl font-semibold mb-6">Detailed Information on {selectedSubject}</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              The {selectedSubject} program covers both theoretical foundations and practical applications, providing students with a comprehensive understanding of the field.
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Students are expected to engage with the latest research, participate in hands-on projects, and contribute to the academic community through papers and presentations.
            </p>
            <Link href="/academics/courses" className="bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-gray-900 transition duration-300">
              Explore Full Course Catalog
            </Link>
          </div>
        </section>
      )}

    </div>
  );
}
