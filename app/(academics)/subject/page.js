"use client";

import { useState } from "react";
import Link from "next/link";

export default function Academics() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject === selectedSubject ? null : subject);
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-24 bg-contain bg-center"
        style={{
          backgroundImage: 'url("/images/sinwave.avif")',
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Academics at IIT Power Systems Lab
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Dive deep into the world of electrical engineering and power systems
            through our cutting-edge academic programs and research.
          </p>
        </div>
      </section>

      {/* Academics Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Academic Programs</h2>
          <p className="text-lg max-w-4xl mx-auto mb-6">
            The IIT Power Systems Lab offers a diverse range of academic
            programs that cover the latest advancements in power systems
            analysis, Dynamics and Transiets, power system economics, and more.
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Academic Subjects</h2>

          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Power Systems Analysis",
              "CAPSA",
              "Power system operation and control",
              "Dynamics and Transients",
              "Protection",
              "Power System Economics",
              "HVDC",
              "Mathematics",
              "Electrical Grid/ Measurement/ Design/ Control (Miscellanous)",
              "Controls",
              "Digital Communication",
              "Signals and Systems",
              "Microprocessors",
              "Machine",
              "Power Electronics",
              "Computer Programming",
            ].map((subject, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 cursor-pointer"
                  onClick={() => handleSubjectClick(subject)}
                >
                  {subject}
                </h3>
                <div
                  className={`space-y-2 text-sm transition-all duration-500 ease-in-out ${
                    selectedSubject === subject
                      ? "max-h-72 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600">
                    Introduction to the concepts of {subject}, including key
                    topics such as:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Topic 1 - Basic principles</li>
                    <li>Topic 2 - Advanced modeling</li>
                    <li>Topic 3 - Applications in real-world scenarios</li>
                    <li>Topic 4 - Case studies and research papers</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Details Section (Dynamic) */}
      {selectedSubject && (
        <section className="py-24 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Detailed Information on {selectedSubject}
            </h3>
            <p className="text-lg max-w-4xl mx-auto mb-6">
              Here, we provide more in-depth knowledge about {selectedSubject}.
              The program covers theoretical and practical aspects of{" "}
              {selectedSubject} and prepares students for real-world challenges
              in the field.
            </p>
            <p className="text-lg max-w-4xl mx-auto mb-6">
              We emphasize hands-on experience and projects that allow students
              to apply what they learn to real-world situations.
            </p>
            <Link
              href="/academics/courses"
              className="bg-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Explore Full Course Catalog
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
